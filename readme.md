# Node.js Project Template for Vercel

This is a Node.js project template configured for deployment with Vercel. It uses Express for handling HTTP requests, Sequelize as the ORM, and PostgreSQL as the database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Installation

First, clone the repository:

```bash
git clone https://github.com/gabrielmartinezghioma/template-exp-sq-module.git
cd template-exp-sq-module
```
Install the dependencies:

```bash
npm install
```

## Usage
To start the server, run:

```bash
npm start
```
This will start the server on the port specified in your environment variables.

For development, use the following command:

```bash
npm run dev
```

This will start the server with --watch mode, automatically reloading on changes.

## Scripts

- `start`: Runs the server in production mode.
- `dev`: Runs the server in development mode with automatic reloading.

## Project Structure

```bash
├── src
│   ├── server.js        # Entry point for the application
│   ├── models           # Sequelize models
│   ├── routes           # Express routes
│   ├── controllers      # Request handlers
│   └── config           # Configuration files (e.g., database connection)
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `sequelize`: Promise-based ORM for Node.js v8 and up.
- `pg`: Non-blocking PostgreSQL client for Node.js.
- `pg-hstore`: A node package for serializing and deserializing JSON data to hstore format in PostgreSQL.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing.
- `helmet`: Middleware for securing Express apps by setting various HTTP headers.

## Development

For development, the project uses morgan for logging HTTP requests. You can add more development dependencies as needed.

```bash
npm install morgan --save-dev
```

To run the server in development mode:

```bash
npm run dev
```

## Deployment

This project is configured to be deployed on Vercel. Follow these steps to deploy:

1. Push your code to GitHub.
2. Connect your GitHub repository to Vercel.
3. Set up environment variables in Vercel as per your `.env` file.
4. Deploy!

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the ISC License.



