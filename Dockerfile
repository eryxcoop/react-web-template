# Local development stage
FROM node:18.20-alpine as development

WORKDIR /app
# Copy and install dependencies
COPY package.json package-lock.json ./
# 'npm ci' ensures that the exact versions from package-lock.json are installed
RUN npm ci

# Copy the rest of the application and define default command
COPY public public
COPY src src
CMD ["npm", "start"]

# Build stage
FROM development as build
# Build the application
RUN npm run build

# Production stage
FROM nginx:1.27.0-alpine as production

# Copy the nginx configuration template
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy the build output to serve with nginx
COPY --from=build /app/build /usr/share/nginx/html

# Default port is 80, but some environments (e.g. Cloud Run) may need to set a different port
ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]