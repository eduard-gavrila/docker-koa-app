# Simple Koa Server app in Docker

## Prerequisites
- Docker
- Make

## How to run
- Clone the repository
- Run `make` to build the docker image and run the container
- The server will be running on `http://localhost:3000`
- endpoints:
  - `GET /` - returns a simple message
  - `GET /save-request-cookies` - logs request cookies in the `requestCookies.txt` file
  - `GET /save-request-info` - logs some request information in the `requestHistory.txt` file
- The log files from the container will be exposed in the `logs` repo directory on the host machine

## Exercises

### Exercise 1
Create and run a simple koa server app. The app should run in a docker container.
- use Typescript for the app code
- do not install dependencies on the host machine
- do not build the app on the host machine
- the app should have 2 endpoints that logs some request information in a file
- the file should be made available on the host machine