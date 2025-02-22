FROM alpine:3.21.3
WORKDIR /redis
COPY ./redis/redis.conf /redis
RUN echo "💻 Creating a redis instance from scratch"
RUN echo "Listing default system packages:"
RUN apk info
RUN apk update
RUN apk add redis
RUN echo "Updated system packages:"
RUN apk info
CMD [ "redis-server", "/redis/redis.conf" ]
# Or pass arguments directly
# CMD [ "redis-server", "--port", "6333" ]