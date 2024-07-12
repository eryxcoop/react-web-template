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
# Set the project id
gcloud config set project $MY_PROJECT_ID

# Check the project id is set correctly
gcloud config get-value project

# Deploy
gcloud run deploy --source .
```

and following the instructions.

If you want to upload an updated version of the project, you need to run the same command. Be careful to use
the name of for your existing service.

## Linter

This project uses ESLint and Prettier (see https://prettier.io/docs/en/comparison) to enforce a consistent coding style.
Rules are still vague and can be changed to
fit the teams personal preferences.

```bash
npm run lint

npm run prettier
npm run prettier:fix # to fix the files
```

## Pipelines

### Linter

You can find the linter pipeline in the .github/workflows/lint.yml file. It runs the linter on merge request (but it can
be changed easily to run on push).
If you are working with Gitlab, you can use the .gitlab-ci.yml file inside pipelines.

### Deploy Staging

If you use github, you can find the deploy pipeline in the .github/workflows/deploy_to_staging.yml file. It deploys to
cloud run when action is manually run over branch.
You must set in github secrets the following variables:

- CLOUD_RUN_SERVICE (name of the service in cloud run)
- GOOGLE_CLOUD_SERVICE_KEY (service key to authenticate with google cloud)
- GOOGLE_CLOUD_PROJECT 
- GOOGLE_CLOUD_ARTIFACT_REPOSITORY
- GOOGLE_CLOUD_ARTIFACT_IMAGE

Your service account must have the following roles:

- Artifact Registry Admin
- Cloud Run Admin
- Cloud Run Service Agent
- Service Account User
- Storage Admin

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
