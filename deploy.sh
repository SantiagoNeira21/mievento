#!/bin/bash

# Construir la imagen de Docker
docker build -t mievento -f Dockerfile .

# Detener y eliminar el contenedor antiguo
docker stop mievento || true
docker rm mievento || true

# Iniciar un nuevo contenedor con la imagen recién construida
docker run -d --name mievento -p 3000:3000 mievento
