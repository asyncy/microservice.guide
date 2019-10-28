---
layout: Docs
home: false
sidebar: true
---
# Interfacing

Since the underlying execution strategy for an action can be a command, a HTTP request, or a RPC call, 
each action **MUST** provide an interface for it to be executed:

[[toc]]

## HTTP

<Badge text="actions.$.http" type="info"/>

An `action` **MAY** use the HTTP protocol to execute it's function.

```yaml
actions:
  convert:
    http:
      port: 8080
      method: get
      path: /convert
      url: https://example.com/api/full/path/without/query/parameters
```

<json-table>
<p>
{
    "method": {                                                          
        "desc": "The HTTP method to be used - one of get/post/put/delete/patch",
        "required": true
    },
    "port": {                                                          
        "desc": "If specified, `url` **MUST NOT** be specified. The port on which the connection must be established (to your microservice).",
        "required": true
    },
    "path": {                                                          
        "desc": "If specified, `url` **MUST NOT** be specified. The path for this action to be executed.",
        "required": true
    },
    "url": {
        "desc": "If specified, `port` and `path` **MUST NOT** be specified. To be used when your action invokes a resource which is external to your microservice. The URL specified MUST BE absolute (with the scheme, host, port, and path). No query parameters should be included in the URL. Path parameters may be used (eg: `https://example.com/api/{apiVersion}/foo`)",
        "required": true
    },
    "contentType": {                                                              
        "desc": "The Content-Type for the request body. If any of your arguments have the field `in` set to `requestBody`, they'll be encoded with this Content-Type specified"
    }  
}
</p>
</json-table>

### Platform to Server

In this communication method the Service's HTTP server **MUST** be already running and waiting for connections.
The Platform will make HTTP requests to the server which results in a response body of data which the Platform would handle.

```bash
+------------+         +----------+
|            |         |          |
|  Platform  |         |  Server  |
|            |         |          |
+-----+------+         +-----+----+
      |                      |
      |  {"word": "hello"}   |
      | -------------------> |
      |                      |
      |    {"length": 5}     |
      | <------------------- |
      |                      |
```

### Location of arguments in the HTTP request

All types of HTTP requests will apply arguments based on the value of `in` for that argument.

The below example shows a `GET` request with a query and path parameter.

```yaml{4,5,6,7,8,9,13}
actions:
  fetch_usd:
    arguments:
      units:
        type: int
        in: query
      currency:
        type: string
        in: path
    output:
       type: int
    http:
      port: 8080
      method: get
      path: /fetch_usd/{currency}
```

<Badge text="actions.$.arguments.$.in" type="tip"/>

In addition to the fields documented [here](/schema/actions/#arguments), the following fields are required for
interfacing via HTTP:

<json-table>
<p>
{
    "in": {
        "required": true,
        "desc": "The location of this argument in the HTTP request. It MUST be one of `query`, `requestBody`, `path`, or `header`."
    }
}
</p>
</json-table>

*Path parameters **MUST** be specified in the `path`*

```sh
$ curl -X GET http://service:8080/fetch_usd/eur?units=100
```

This next example is a `POST` where data is passed via the body.

```yaml{4,5,6,7,8,9}
actions:
  fetch_usd:
    arguments:
      units:
        type: int
        in: requestBody
      currency:
        type: string
        in: requestBody
    output:
      type: int
    http:
      contentType: application/json
      method: post
      path: /convert
```

```sh
$ curl -X POST http://service:8080/path -H "Content-Type: application/json" -d '{"currency": "eur", "units": 100}'
```

## Command

<Badge text="actions.$.format" type="info"/>

If the container provider is Docker, then `docker exec` is used:

### Docker Run/Exec
Docker run/exec can be used as an interface for execution **and** communication.
Data is transmitted using standard output. Arguments can be used to pass values to the container.

**Sample**

```yaml
actions:
  count:
    format:
      command: ["/app/count.sh"]
    arguments:
      word:
        type: string
    output:
      type: int
```

<json-table>
<p>
{
    "command": {                                                          
        "desc": "The command to be executed. This may either be an array of strings, or a single string instead. An array of strings is **RECOMMENDED**",
        "required": true
    }
}
</p>
</json-table>

```sh
$ docker run --rm alpine /app/count.sh '{"word": "hello"}'
5
```

### Output
- The Service **MAY** write data to `stdout` which is considered the result of the operation.
- The Service **MUST** `exit 0` if it performed the operations successfully.

### Fail and Traceback
- If the Service fails to process the request, it **MUST** `exit 1` or `exit 2`.
- Data written to `stdout` is ignored when the exit code is greater than `0`.
- Data written to `stderr` **SHOULD** be traceback details.

#### Deterministic Failure
- The Service **MAY** exit with code `1` if it failed to performed the operation.
- An `exit 1` will inform the Platform *not* to process the command as the failure is deterministic.

#### Retry Failure
- The Service **MAY** exit with code `2` which indicates a failure and the Platform **SHOULD** retry.


#### Data Flow

```sh
+----------+               +------------+                                +----------------------+
|          |               |            |                                |                      |
|  Caller  |               |  Platform  |                                |  Interface via Exec  |
|          |               |            |                                |                      |
+----+-----+               +-----+------+                                +----------+-----------+
     |                           |                                                  |
     |    {"word": "hello"}      |                                                  |
     | ------------------------> |                                                  |
     |                           |   docker exec service count '{"word":"hello"}'   |
     |                           |  --------------------------------------------->  |
     |                           |                     5                            |
     |                           |  <---------------------------------------------  |
     |      {"length": 5}        |                                                  |
     | <------------------------ |                                                  |
     |                           |                                                  |
```

## RPC

<Badge text="actions.$.rpc" type="info"/>

The Service **MAY** communicate via RPC.

The Service **MUST** define server and framework attributes.

```yaml
rpc:
  port: 8080
  framework:
    grpc:
      version: 2
      proto:
        path: git@github-server:project/repo.git/path/to/api.proto # Any valid URI path can be used
  client:
    endpoint: service
    port: 8080
    tls: true
```

::: tip 💡 Heads up!
TLS configuration is defined separately. See the [authentication](/schema/authentication) section for details.
:::
