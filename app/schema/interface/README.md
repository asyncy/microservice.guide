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
