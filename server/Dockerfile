FROM ruby:2.4.0

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# install app dependecies
COPY Gemfile /usr/src/server
COPY Gemfile.lock /usr/src/server
RUN bundle install

# bundle app source
COPY . /usr/src/server

# start server
EXPOSE 9292

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "9292"]
