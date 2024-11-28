
# Assignment API Project

## Description

This is the Assignment API project built with NestJS. The API provides various functionalities including user authentication and profile management.

## Requirements

To run this project, ensure you have the following installed on your machine:

- [Node.js (>= 12.x)](https://nodejs.org/)
- [npm (>= 6.x)](https://www.npmjs.com/) or [yarn (>= 1.x)](https://yarnpkg.com/)
- [Docker (>= 20.x)](https://www.docker.com/)
- [Docker Compose Plugin (>= 2.0.0)](https://docs.docker.com/compose/)

## Installation

### Clone the Repository

To download the project, clone it from the GitHub repository:
```bash
git clone https://github.com/joaopschias/assignment-api.git && cd assignment-api
```

### Environment Variables

Create a `.env` file in the root directory of the project by copying from the `.env.example` file:

```bash
cp .env.example .env
```

Ensure you update the `.env` file with any necessary configuration values.

### Install Dependencies

You can install the project dependencies using either npm or yarn.

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

## Running the Project

### Running with Docker

To run the project using Docker, follow these steps:

We use this method to separate concerns between the database and the application itself. This way, you can run MongoDB in a container while developing the NestJS application locally with live reload for faster development cycles. This approach provides flexibility and efficiency during development.

> **Note:** If you are using an older version of Docker (before version 20.x or without the Docker Compose plugin), the command `docker compose` may not work. In that case, use `docker-compose` instead. Ensure your Docker version is up-to-date to avoid compatibility issues.

1. **Start MongoDB using Docker Compose**
    ```bash
    docker compose up -d mongo-db
    ```

2. **Run the NestJS application locally**

   Ensure your `.env` file has the correct MongoDB connection string (`MONGO_URL`).
    ```bash
    yarn start:dev
    ```

   You can also choose to run both MongoDB and the NestJS application using Docker:

3. **Start all services using Docker Compose**
    ```bash
    docker compose up -d
    ```

Alternatively, you can run MongoDB in Docker and the NestJS application locally using your terminal as described above. This provides the benefit of live reload for the NestJS application.

### Running without Docker

If you prefer to run MongoDB and the NestJS application locally without Docker, make sure MongoDB is installed and running on your machine.

1. **Start MongoDB Locally**

   Ensure MongoDB is running locally on port 27017. If you have MongoDB installed, you can start it using:

    ```bash
    mongod
    ```

2. **Run the NestJS application**

    ```bash
    yarn start:dev
    ```

## Available Commands

The project includes several `npm`/`yarn` scripts for development and deployment. Below is an explanation of each command in the `package.json` file:

### General Commands

- **`yarn build`**:
  Compiles the TypeScript code into JavaScript, generating a production-ready build in the `dist` folder.

- **`yarn start`**:
  Starts the compiled application from the `dist` folder in production mode.

- **`yarn start:dev`**:
  Starts the application in development mode with hot-reloading enabled. Useful for local development.

- **`yarn start:prod`**:
  Starts the application in production mode. This is typically used for deployment.

- **`yarn test`**:
  Runs the application's unit tests using Jest.

- **`yarn format`**:
  Formats all TypeScript files in the `src` and `test` directories using Prettier.

- **`yarn lint`**:
  Lints the codebase using ESLint and fixes any auto-fixable issues.

### Console Commands

- **`yarn console`**:
  Opens the NestJS console environment, allowing you to run commands directly within the application context.

- **`yarn console seed`**:
  Runs the seeding process to populate the database with initial data, including the wildcard user (`developer@example.com` / `dev123`).

## Useful Docker Commands and Further Reading

If you're new to Docker or need a refresher, here are some of the most useful Docker commands:

- **Start services defined in docker-compose.yml**
    ```bash
    docker compose up -d
    ```

- **Stop all running containers**
    ```bash
    docker stop $(docker ps -q)
    ```

- **Remove all containers**
    ```bash
    docker rm $(docker ps -a -q)
    ```

- **Remove all images**
    ```bash
    docker rmi $(docker images -q)
    ```

- **Clean up the system (remove all unused containers, networks, images, and optionally, volumes)**
    ```bash
    docker system prune -a --volumes
    ```

- **Build an image from a Dockerfile**
    ```bash
    docker build -t <image_name> .
    ```

- **Run a container from an image**
    ```bash
    docker run -d -p <host_port>:<container_port> <image_name>
    ```

- **List all running containers**
    ```bash
    docker ps
    ```

- **Stop a running container**
    ```bash
    docker stop <container_id>
    ```

- **Remove a stopped container**
    ```bash
    docker rm <container_id>
    ```

- **List all images**
    ```bash
    docker images
    ```

- **Remove an image**
    ```bash
    docker rmi <image_id>
    ```

- **View container logs**
    ```bash
    docker logs <container_id>
    ```

For more detailed information and advanced usage, please refer to the [official Docker documentation](https://docs.docker.com/).

## Conclusion

This README provides the necessary steps to set up and run the Assignment API project using both Docker and local environments. By following these instructions, you can efficiently develop and test the API functionalities.

If you have any questions or need further assistance, please feel free to reach out.

Happy coding!
