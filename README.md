# React Web Template Example

This is a simple example of a React web template using Mobx to handle states, react hooks, Dockerfile and Docker
Compose.

## How to run

With docker compose

```bash
docker-compose up --build
```

Without docker compose

```bash
npm install
npm start
```

## Server Communication

This project uses Eryx´s own lib appyx-comm to handle communication with the server. You can read more about it in
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
