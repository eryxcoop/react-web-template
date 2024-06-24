# React Web Template Example

This is a simple example of a React web template using Mobx to handle states, react hooks, Dockerfile and Docker
Compose.

## How to run

You'll need a local .env file. You can take the .env.example file as a reference.

```bash
cp .env.example .env
```

Then, in order to work with docker, run:

```bash
docker compose up --build
```

To work without docker:

```bash
npm install
npm start
```

In either case you should be able to access the server at http://localhost:3000

## Deploy to Cloud Run

The easiest and cheapest way to get this project running is to deploy it to Google Cloud Run. You can do this by running

```bash
gcloud run deploy --source .
```

and following the instructions.

## Server Communication

This project uses Eryx´s own lib appyx-comm to handle communication with a backend server. You can read more about it in
the [appyx-comm documentation](https://eryxcoop.github.io/appyx-comm/).

## State Management

This project uses Mobx to handle states. You can read more about it in
the [Mobx documentation](https://mobx.js.org/README.html).

## Components

This project uses Material UI for components. You can read more about it in
the [Material UI documentation](https://material-ui.com/).
Nevertheless, you can use any other component library or create your own components.

## Theming

This project uses Material UI for theming. Base theme added is themes/darkTheme.js. React default theming could also be
used.

