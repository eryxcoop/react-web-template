# Build stage
FROM node:18.18-alpine as development

WORKDIR /app
COPY package*.json /app/
RUN npm install

# Production stage
FROM nginx:1.16.0-alpine as production
COPY . /app
# Get variables from files or use defaults
RUN env && npm run build
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf.template

# Default port is 80, but some environments (e.g. Cloud Run) may need to set a different port
ARG PORT=80
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]