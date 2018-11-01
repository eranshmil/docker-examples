# Simple Docker Examples

My Docker playground examples, written for learning purposes.<br />
Tested on MacOS, so feel free to open a PR if you are using another platform.<br />
_Warning: may not be suitable for production use._

## What's in the box

Currently, each example uses [nodemon](https://github.com/remy/nodemon) for:

1. Debugging
1. Watching files and live-reload the app

## Usage

1. Install [Docker](https://docs.docker.com/install/).
1. Clone this repository:

   ```bash
   git clone https://github.com/eranshmil/docker-examples.git
   ```

1. Go to the folder you want to use, for example:

   ```bash
   cd express-mongo
   ```

1. Run the following command to create the containers:

   ```bash
    docker-compose up
   ```

1. When you finish developing, run:

   ```bash
   docker-compose down
   ```

- If you have some issue, try to run the container with the build flag:

  ```bash
  docker-compose up --build
  ```

### Standalone services

Running only one service in the container:

```bash
docker-compose run --service-ports mongo
```

- In this example, the service called mongo
- The service-ports flag publishes the service ports to the host machine

### Breakpoint at first line

In order to debug the initialization process of your app, change the --inspect flag to --inspect-brk in the relevant package.json.<br />
For example:

```json
{
    ...
    "scripts": {
        ...
        "watch": "nodemon -L --inspect-brk=0.0.0.0 server.js"
    }
    ...
}
```

## Debugging with vscode

<img src="assets/vscode-debugger.gif">

## Todo

1. Add documentation about parameters used in Dockerfile and docker-compose.yml.
1. Explain about the first example.
1. Disable watch for unwanted files.
1. Examples to add:
   - Angular container
   - Laravel container

## Resources

1. [Official NodeJS Debugging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started/)
