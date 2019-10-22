---
layout: Docs
home: false
sidebar: true
---

# Test

### Run

When ran in a directory of a microservice (a directory containing a
`microservice.yml` and `Dockerfile`) this command will build the microservice
and execute a given command.

### Usage

```
oms run [options] <action>

  Options:

    -i --image <i>  The name of the image to spin up the microservice, if not provided a fresh image will be build based of the `Dockerfile`
    -a --args <a>   Arguments to be passed to the command, must be of the form `key="val"`
    -e --envs <e>   Environment variables to be passed to run environment, must be of the form `key="val"`
    -h, --help      output usage information
```

#### action

Action is a required argument. The microservice will be executed with the given
action.

#### [options]

##### Arguments

If a command required arguments they can be passed as follows: `-a key='val'`.
If required arguments are not given `run` will fail.

##### Environment variables

If the microservice has any required environment variables they must be passed
in with the `run` command. Much like Docker, environment variables can be passed
as follows: `-e FOO='bar'`. If a required environment variable is not supplied
`run` will fail.

### Example `run` call

```sh
oms run -e BOT_TOKEN='xoxb-****' send  -a message='Hello, World!' -a to=CAFAF9C
```

```sh
ℹ Building Docker image
Sending build context to Docker daemon  7.879MB
Step 1/4 : FROM node:alpine
 ---> 9036ebdbc59d
Step 2/4 : ADD package.json /package.json
 ---> Using cache
 ---> af51ae7111aa
Step 3/4 : ADD slackSend.js /slackSend.js
 ---> Using cache
 ---> 5bb3accd42da
Step 4/4 : RUN npm i
 ---> Using cache
 ---> 35a377859cc3
Successfully built 35a377859cc3
Successfully tagged oms/asyncy/asyncy-slack-stream:latest
✔ Building Docker image
✔ Started Docker container: ece23f7a5005
✔ Health check passed
✔ Ran action: `send` with output: {
  "ok": true,
  "reply_to": 1,
  "ts": "1547069368.000900",
  "text": "Hello, World!"
}
✔ Stopped Docker container: ece23f7a5005
```
