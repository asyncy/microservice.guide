---
layout: Docs
home: false
sidebar: true
---
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
    http:  # Defining how to execute this action, more below.
    arguments:
      units:
        type: number
      from:
        type: string
      to:
        type: string
      conversionAttributes:
        type: object
        properties:  # Required if the type is object.
          decimals:
            type: int
    output:
      type: object
      properties:
        units:
          type: float
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
        "desc": "How to call the action. [Read more](/schema/interface/)",
        "required": true
    }
}
</p>
</json-table>

## Arguments

<SBadge text="actions.$.arguments" type="tip"/> <SBadge text="actions.$.events.$.arguments" type="tip"/>

Define the `arguments` (input data) that the action accepts.

An `action` **MUST** declare all arguments it accepts. Each argument, will have the following information about it:

<json-table>
<p>
{
    "help": {
        "desc": "A short description of the argument which can provide clarity to end user."
    },
    "type": {
        "desc": "The type of this argument. It must be one of `object`, `int`, `float`, `string`, `list`, `map`, `boolean`, `enum`, or `any`",
        "required": true
    },
    "properties": {
        "desc": "If the value for `type` is `object`, this field **MUST** be specified. These properties will be serialised according to the execution strategy specified (eg: for the `http` strategy, the fields under `properties` will be serialised based on the `contentType` specified). `object`s MAY be nested in other `object`s"
    },
    "in": {
        "desc": "The location of this argument. Each execution strategy provides different possible values for this. For possible values, see [Interfacing](/schema/interface/)",
        "required": true
    },
    "required": {
        "desc": "Whether this argument is required or not. The default value for this is false"
    },
    "default": {
        "desc": "The default value if not provided by the user (**not** available for types `map` or `object`)"
    },
    "pattern": {
        "desc": "[Read more](#patterns) (for `type: string` only)"
    },
    "enum": {
        "desc": "[Read more](#enums) (for `type: enum` only)"
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

<SBadge text="actions.$.arguments.$.pattern" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.pattern" type="tip"/>

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

<SBadge text="actions.$.arguments.$.enum" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.enum" type="tip"/>


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

<SBadge text="actions.$.arguments.$.range" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.range" type="tip"/>

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

### Lists

<Badge text="actions.$.arguments.$.list" type="tip"/> <Badge text="actions.$.events.$.arguments.$.list" type="tip"/>

The optional argument `list` must have a key `elements` with the type of its list elements.

```yaml{6}
actions:
  colorize:
    arguments:
      colors:
        type: list
        list:
          elements:
            type: int
```

This service argument must be a list of integers.

### Maps

<Badge text="actions.$.arguments.$.map" type="tip"/> <Badge text="actions.$.events.$.arguments.$.map" type="tip"/>

The argument `map` must have the keys `keys` and `values` with the respective types of the map.

```yaml{6}
actions:
  colorize:
    arguments:
      colorMapping:
        type: map
        map:
          keys:
            type: string
          values:
            type: int
```

This service argument must be a `map` with `string` as keys and integers as value.

### Objects

<Badge text="actions.$.arguments.$.properties" type="tip"/> <Badge text="actions.$.events.$.arguments.$.properties" type="tip"/>

The argument type `object` must have a `properties` entry.

```yaml{6}
actions:
  colorize:
    arguments:
      color:
        type: object
        properties:
          red:
            type: float
          green:
            type: float
          blue:
            type: float
```

Objects may be nested:


```yaml{6}
actions:
  create:
    arguments:
      user:
        type: object
        properties:
          name:
            type: string
          location:
            type: object
            properties:
              street:
                type: string
              postcode:
                type: string
```

Objects may have optional properties:

```yaml{6}
actions:
  create:
    arguments:
      user:
        type: object
        properties:
          name:
            type: string
          location:
            type: object
            properties:
              street:
                type: string
                required: false
              postcode:
                type: string
```

## Output


<SBadge text="actions.$.arguments.$.output" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.output" type="tip"/>


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
        "desc": "A map of `key: {Output}` (only for `object` types)"
    },
    "actions": {
        "desc": "A map of `action: {Action}` that can be performed by this output (only for `object` types)."
    }
}
</p>
</json-table>

> <small>If there is no output then it must use `output: none` explicitly.
> `output: none` can also be used if the output should be ignored (e.g. for debug output).
> </small>

### Properties

<SBadge text="actions.$.arguments.$.output.properties" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.output.properties" type="tip"/>


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

<SBadge text="actions.$.arguments.$.output.actions" type="tip"/> <SBadge text="actions.$.events.$.arguments.$.output.actions" type="tip"/>

An `output` **MAY** define other `actions` the user may perform. 

The `action` may reference `properties` of its parent.

```yaml{4,16-19}
actions:
  like: &like
    arguments:
      tweetid:
        type: int
    output: none

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
