---
layout: Docs
home: false
sidebar: true
---

# Build

When ran in a directory of a microservice (a directory containing a `oms.yml` and a `Dockerfile`), the command builds a Docker image.

### Command Line Interface

```
Usage: build [options]

Builds the microservice defined by the `Dockerfile`. Image will be tagged with `oms/$github_user/$repo_name`, unless the tag flag is given. If no git config is present a random string will be used.

Options:
  -t --tag, <t>  The tag name of the image
  -h, --help     output usage information
```

#### Options

##### `-t --tag, <t>`

You can supply your own image name with the following command:

``` sh
oms build -t custom-image-name
```

### Example Usage

When inside a directory containing an `oms.yml` and a `Dockerfile`, you can build an image of the microservice by entering the following code into the terminal:

``` sh
oms build
```

By default, your image will be tagged with `oms/$github_user/$repo_name`. If no git config is present then your image with be tagged with a random string.

If you wish, you may tag your image with a custom name:

``` sh
oms build -t custom-image-name
```

The following output appears for a **successful** build:

```
ℹ Building Docker image
Step 1/6 : FROM        node:10-alpine
---> b95baba1cfdb
Step 2/6 : RUN         mkdir /app
---> Using cache
---> 3f1a0fd3c344
Step 3/6 : ADD         package.json package-lock.json /app/
---> 79c2191f5f17
Step 4/6 : RUN         npm install --prefix /app
---> Running in 916687dde570
...
added 411 packages from 303 contributors and audited 1804 packages in 9.466s
found 0 vulnerabilities
Removing intermediate container 916687dde570
---> 075a92b22e98
Step 5/6 : COPY        src /app/src
---> 4a1641b4e974
Step 6/6 : ENTRYPOINT  ["node", "/app/src/index.js"]
---> Running in 1aae68238762
Removing intermediate container 1aae68238762
---> de1b6375542d
Successfully built de1b6375542d
Successfully tagged oms/matthewhudson/oms-nodejs-template:latest
✔ Built Docker image with name: oms/matthewhudson/oms-nodejs-template
```
