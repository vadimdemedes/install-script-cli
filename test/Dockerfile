FROM debian:jessie

WORKDIR /usr/src/test

COPY install-script.sh ./

RUN chmod 0777 install-script.sh && \
    bash ./install-script.sh
