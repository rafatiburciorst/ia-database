import 'dotenv/config'
import { SqlDatabase } from 'langchain/sql_db'
import { DataSource } from 'typeorm'
import { ChatOpenAI } from '@langchain/openai'
import { pull } from 'langchain/hub'
import { z } from 'zod'
import { QuerySqlTool } from 'langchain/tools/sql'
import type { ChatPromptTemplate } from '@langchain/core/prompts'

const llm = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0.7,
  maxTokens: 1000,
  openAIApiKey: process.env.OPENAI_API_KEY,
})

const datasource = new DataSource({
  type: 'sqlite',
  database: 'Chinook.db',
})

const db = await SqlDatabase.fromDataSourceParams({
  appDataSource: datasource,
})

const queryPromptTemplate = await pull<ChatPromptTemplate>(
  'langchain-ai/sql-query-system-prompt'
)

const queryOutput = z.object({
  query: z.string().describe('Syntactically valid SQL query.'),
})

const structuredLlm = llm.withStructuredOutput(queryOutput)

const promptValue = await queryPromptTemplate.invoke({
  dialect: db.appDataSourceOptions.type,
  top_k: 10,
  table_info: await db.getTableInfo(),
  input: 'How many Employees are there?',
})

const result = await structuredLlm.invoke(promptValue)

const executeQueryTool = new QuerySqlTool(db)

const question = 'How many employees are there?'
const queryResult = await executeQueryTool.invoke(result.query)

const prompt = `Given the following user question, corresponding SQL query, and SQL result, answer the user question.\n\nQuestion: ${question}\nSQL Query: ${result.query}\nSQL Result: ${queryResult}\n`

const response = await llm.stream(prompt)

for await (const chunk of response) {
  console.log(chunk.content)
}
