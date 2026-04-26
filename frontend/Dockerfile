FROM node:20-alpine

WORKDIR /app

COPY ./app .
COPY ./entrypoint.sh .

RUN chmod +x ./entrypoint.sh

RUN npm ci

CMD ["/app/entrypoint.sh"]