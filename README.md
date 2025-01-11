
# Test IA Database

This project demonstrates the integration of [LangChain](https://www.langchain.com/) with a SQLite database using TypeORM and OpenAI's GPT models for structured querying and natural language processing. It provides a system to transform user queries into SQL commands and return meaningful results.

---

## Features

- **SQLite Database**: Uses a `Chinook` database as the data source.
- **LangChain Integration**: Harnesses LangChain's tools for managing SQL interactions.
- **OpenAI GPT-4o-mini**: Processes queries and generates SQL commands using AI.
- **Zod Validation**: Validates structured output from LLM responses.
- **Streaming Responses**: Streams AI-generated answers to the console.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 16 or higher.
- **TypeScript**: Ensure your development environment supports TypeScript.
- **SQLite**: Used as the database backend.

You will also need an OpenAI API key. Create an account at [OpenAI](https://platform.openai.com/signup) to obtain your key.

---

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/test-ia-database.git
   cd test-ia-database
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Place the `Chinook.db` SQLite file in the project root directory.

---

## Usage

Run the project with the following command:
```bash
npx tsx src/main.ts
```

### Example Interaction

- **User Question**: How many employees are there?
- **Generated SQL Query**: `SELECT COUNT(*) FROM Employees;`
- **Result**: The program will stream the response back to the console.

---

## Project Structure

- **`src/main.ts`**: The main script for handling queries and interacting with the database.
- **`.env`**: Holds environment variables, including the OpenAI API key.
- **`Chinook.db`**: The SQLite database used in this project.

---

## Dependencies

This project leverages the following packages:

- **LangChain**: Tools for SQL interaction and LLM integration.
- **OpenAI SDK**: For interacting with GPT models.
- **TypeORM**: Database abstraction and ORM.
- **Zod**: Schema validation.
- **dotenv**: For loading environment variables.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Submit a pull request.

---

## Acknowledgments

- The [LangChain](https://www.langchain.com/) team for powerful tools in LLM integration.
- The [Chinook Database](https://github.com/lerocha/chinook-database) for sample data.
- The [OpenAI](https://openai.com/) team for the GPT-4 models.

---

## Contact

If you have any questions or feedback, feel free to reach out at [rafael.tiburcio@live.com](mailto:rafael.tiburcio@live.com).

