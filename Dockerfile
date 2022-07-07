FROM node:18.4.0

ENV APP_DIR=/app

COPY package.json $APP_DIR/package.json

RUN cd $APP_DIR \
    && npm install \
    && npm install -g forever

COPY . $APP_DIR

WORKDIR $APP_DIR

EXPOSE 3000

CMD ["forever", "-a", "-o", "/tmp/out.log", "-e", "/tmp/err.log", "--watch", "--watchDirectory", "./api", "server.js"]