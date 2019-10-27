---
layout: Docs
home: false
sidebar: true
---

# Subscribe

When ran in a directory containing an `oms.yml`, the command subscribes to an event defined by the microservice.

### Command Line Interface

```
Usage: subscribe [options] <action> <event>

Subscribe to an event defined in your `oms.yml`. Must be ran in a directory with a `Dockerfile` and a `oms.yml`

Options:
  -a --args <a>  Arguments to be passed to the event, must be of the form `key="val"` (default: [])
  -e --envs <e>  Environment variables to be passed to run environment, must be of the form `key="val"` (default: [])
  -r --raw       All logging is suppressed expect for the output of the action.
  -h, --help     output usage information
```

#### Options

##### `-a --args <a>`

Arguments to be passed to the event, must be of the form `key="val"`. To pass arguments to an event, use the following command:

``` sh
oms subscribe bot hears \
  -a channel='#general' \
  -a pattern='Knock, knock'
```

##### `-e --envs <e>`

Environment variables can be passed to a service as follows: `-e FOO='bar'`. For example:

```sh
oms subscribe bot hears \
  -e BOT_TOKEN='xoxb-****' \
  -e API_KEY='xoxb-****'
```

::: warning &#x26A0; Notice
If a required environment variable is not supplied `run` will fail.
:::

### Example Usage

When inside a directory containing an `oms.yml` and a `Dockerfile`, you can use the `subscribe` command to listen for events exposed by the microservice. The following output appears for the [OMS-compliant GitHub service](https://github.com/oms-services/github):

```
oms subscribe bot hears \
  -a channel='#general' \
  -a pattern='Knock, knock'
```

And the following output will appear:

```
ℹ Building Docker image
Step 1/5 : FROM        python:3.7-alpine
---> b11d2a09763f
Step 2/5 : COPY        app/ /app
---> 418fe4ba0996
Step 3/5 : ADD         requirements.txt /app
---> 44d7dd2bf3ce
Step 4/5 : RUN         pip install -r /app/requirements.txt
---> Running in e1aa55926334
...
Removing intermediate container e1aa55926334
---> 1827ba542263
Step 5/5 : ENTRYPOINT  ["python", "/app/main.py"]
---> Running in 8bbffa068154
Removing intermediate container 8bbffa068154
---> 2723aabfae16
Successfully built 2723aabfae16
Successfully tagged oms/l1vzzxjzl21hdhrozxdodwrzb24vu3rvcnlzy3jpchqvb21zlxnlcnzpy2vzl3nsywnr:latest
✔ Built Docker image with name: oms/l1vzzxjzl21hdhrozxdodwrzb24vu3rvcnlzy3jpchqvb21zlxnlcnzpy2vzl3nsywnr
✔ Started Docker container: 3ab04cfd6111
⠹ Executing default health check
```
