---
layout: Docs
home: false
sidebar: true
---

# Run

When ran in a directory of a microservice (a directory containing a `oms.yml`
and `Dockerfile`) this command will build the microservice and execute a given
command.

### Interface

```
Usage: run [options] <action>

Run actions defined in your `oms.yml`. Must be ran in a directory with a `Dockerfile` and a `oms.yml`

Options:
  -a --args <a>   Arguments to be passed to the command, must be of the form `key="val"` (default: [])
  -e --envs <e>   Environment variables to be passed to run environment, must be of the form `key="val"` (default: [])
  -i --image <i>  The name of the image to spin up the microservice, if not provided a fresh image will be built based off the `Dockerfile`
  -r --raw        All logging is suppressed expect for the output of the action.
  -h, --help      output usage information
```

#### Action

Action is a required argument. The microservice will be executed with the given
action.

::: tip &#128214; Read more
More information about the `actions` field is found [here](/schema/actions/).
:::

#### Options

##### `-a --args <a>`

If a command required arguments they can be passed as follows: `-a key='val'`. For example:

```sh
oms run send -a message='Hello, World!'
```

::: warning &#x26A0; Notice

If a required argument is not supplied `run` will fail.
:::

##### `-e --envs <e>`

Environment variables can be passed to a service as follows: `-e FOO='bar'`. For example:

```sh
oms run send -e BOT_TOKEN='xoxb-****' -e API_KEY='xoxb-****'
```

::: warning &#x26A0; Notice
If a required environment variable is not supplied `run` will fail.
:::

### Example Usage

```sh
oms run send \
  -e BOT_TOKEN='xoxb-****' \
  -a message='Hello, World!' \
  -a to="Buddy"
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
