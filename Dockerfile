# Fase de construcción
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Fase de ejecución
FROM node:14
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve
EXPOSE 3000:3000
CMD ["serve", "-s", "build", "-l", "3000"]
