# Actions
Defining actions is a way to organize which APIs are exposed 
and how they are used within an application or platform.

Properly defining actions can assist with the following:
  - Service discovery
  - Documentation
  - Operational insight

Services **MUST** list actions that can be executed.

At a high level, services **SHOULD** define the following about themselves:

- Interface (HTTP/RPC/etc)
- Arguments
- Output 

[[toc]]

**Example**

Here's an action called `convert` which accepts `units`, `from` and `to` returning an object with two properties - `units` and `currency`.

```yaml
actions:
  convert:
    help: Convert a currency into another currency
    http: # defining how to execute this action, more below
    arguments:
      units:
        type: number
      from:
        type: string
      to:
        type: string
    output:
      type: object
      properties:
        units:
          type: number
        currency:
          type: string
```

## Overview

Within a named `action`, the following fields are available:

<json-table>
<p>
{
    "help": {
        "desc": "A human friendly description for this action",
        "required": true
    },
    "arguments": {
        "desc": "Optional and required inputs the action has. [Read more](#arguments)",
        "required": false
    },
    "output": {
        "desc": "Type of data that the action returns. [Read more](#output)",
        "required": true
    },
    "http | rpc | format": {
        "desc": "How to call the action. [Read more](/schema/interface)",
        "required": true
    }
}
</p>
</json-table>

## Arguments

<Badge text="actions.$.arguments" type="tip"/> <Badge text="actions.$.events.$.arguments" type="tip"/>

Define the `arguments` (input data) that the action accepts.

An `action` **MUST** declare all arguments it accepts. Each argument, will have the following information about it:

<json-table>
<p>
{
    "help": {
        "desc": "A short description of the argument which can provide clarity to end user."
    },
    "type": {
        "desc": "The type of this argument. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `enum`, or `any`",
        "required": true
    },
    "in": {
        "desc": "The location of this argument. Each execution strategy provides different possible values for this. Possible values are `requestBody`, `query`, and `path`. (**Required** for `http` interface)",
        "required": true
    },
    "required": {
        "desc": "Whether this argument is required or not. The default value for this is false"
    },
    "default": {
        "desc": "The default value if not provided by the user (**not** available for types `map` or `object`)"
    },
    "pattern": {
        "desc": "[Read more](#pattern) (for `type: string` only)"
    },
    "enum": {
        "desc": "[Read more](#enum) (for `type: enum` only)"
    },
    "range": {
        "desc": "[Read more](#range) (for `type: int|float` only)"
    }
}
</p>
</json-table>

**Example**

Here is an `action` called `capitalize` which accepts `string` and returns a `string`.

```yaml{4-7}
actions:
  capitalize:
    arguments:
      text:
        help: The string to capitalize.
        type: string
        in: requestBody
    http:
      method: post
      port: 8000
      path: /run/capitalize
      contentType: application/json
    output:
      type: string
```

```bash
$ curl -H "Content-Type: application/json" -d '{"text":"einstein"}' http://service:8000/run/capitalize
# Einstein
```


### Patterns

<Badge text="actions.$.arguments.$.pattern" type="tip"/> <Badge text="actions.$.events.$.arguments.$.pattern" type="tip"/>

The argument `color` must match the regexp `pattern`.

```yaml{6}
actions:
  colorize:
    arguments:
      color:
        type: string
        pattern: '^\#?\w{6}$'
```

### Enums

<Badge text="actions.$.arguments.$.enum" type="tip"/> <Badge text="actions.$.events.$.arguments.$.enum" type="tip"/>


The argument `color` must match one of the values under `enum`.

```yaml{6-9}
actions:
  colorize:
    arguments:
      color:
        type: enum
        enum:
        - red
        - blue
        - green
```

### Range

<Badge text="actions.$.arguments.$.range" type="tip"/> <Badge text="actions.$.events.$.arguments.$.range" type="tip"/>

The argument `threshold` must be within a `range`.

```yaml{6,7,8}
actions:
  colorize:
    arguments:
      threshold:
        type: int
        range:  # default is no bounds for min and max
          min: 10
          max: 20
```


## Output


<Badge text="actions.$.arguments.$.output" type="tip"/> <Badge text="actions.$.events.$.arguments.$.output" type="tip"/>


Outputs are what the action returns as its result.

An `action` **MUST** define it's `output`.

<json-table>
<p>
{
    "type": {
        "desc": "The type of output. It must be one of `int`, `float`, `string`, `list`, `map`, `boolean`, `object`, or `any`"
    },
    "contentType": {
        "desc": "If the `type` is specified as `object`, this **MUST** indicate the Content-Type of the response"
    },
    "properties": {
        "desc": "A map of `key: {Output}` (only for `map` or `object` types)"
    },
    "actions": {
        "desc": "A map of `action: {Action}` that can be performed by this output (only for `object` types)."
    }
}
</p>
</json-table>

> <small>If there is no output then it must use `output: null` explicitly.</small>

### Properties

<Badge text="actions.$.arguments.$.output.properties" type="tip"/> <Badge text="actions.$.events.$.arguments.$.output.properties" type="tip"/>


A map of properties this object has defined.

```yaml
actions:
  getAddress:
    ...
    output:
      type: object
      properties:
        lat:
          type: float
        long:
          type: float
```

The `output` of this `action` returns an object that has two properties that can be accessed: `lat` and `long`.

### Next Actions

<Badge text="actions.$.arguments.$.output.actions" type="tip"/> <Badge text="actions.$.events.$.arguments.$.output.actions" type="tip"/>

An `output` **MAY** define other `actions` the user may perform. 

The `action` may reference `properties` of its parent.

```yaml{4,16-19}
actions:
  like: &like
    arguments:
      tweetid:
        type: int
    output: null

  stream:
    events:
      tweet:
        output:
          properties:
            id:
              type: int
          actions:
            like: 
              <<: *like  # yaml feature to reuse a defined structure (see &like above)
              defaults:
                tweetid: id
```

> <small>Twitter streams tweets. Each tweet has an output of which has an action `like`. It utilizes the service's action `like` by setting the argument `tweetid` to the property `id`. [See full example here](https://github.com/microservice/twitter/blob/da79f0f75f0b23d257cb3b8678d8f0d558f9432b/microservice.yml#L126-L145).</small>
