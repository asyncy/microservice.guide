# Actions

::: tip Important
Services **MUST** list all actions; exposing the functionality of the service.
:::

Actions describe the APIs, functions and logic within the microservice. Each action includes the `arguments` and `output` that correspond with the behavior of the action.


### Example

Below is an action called `convert` which accepts `units`, `from` and `to` returning an object with properies of `units` and `currency`.

```yaml
actions:
  convert:
    help: Convert a currency into another currency
    http:  # defining how to execute this action
      ...
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
        "required": true
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

Define the `arguments` (input data) that the action accepts.

An `action` **MUST** declare all arguments it accepts. Each argument, will have the following information about them.

<json-table>
<p>
{
    "help": {
        "desc": "A short description of the argument which can provide clarity to end user."
    },
    "type": {
        "desc": "The type of this argument. It must be one of `int`, `number`, `float`, `string`, `uuid`, `path`, `list`, `map`, `boolean`, `object`, or `any`",
        "required": true
    },
    "in": {
        "desc": "The location of this argument. Each execution strategy provides different possible values for this. Possible values are `requestBody`, `query`, and `path`. (**Required** for `http` interface)"
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

### Example

Below is an `action` called `capitalize` which accepts `string` and outputs a type a `string`.

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
    output:
      type: string
```

```bash
$ curl -X POST -d '{"text":"einstein"}' http://service:8000/run/capitalize
# Einstein
```


### Patterns

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


<json-table>
<p>
{
    "type": {
        "desc": "The type of output. It must be one of `int`, `number`, `float`, `string`, `uuid`, `path`, `list`, `map`, `boolean`, `object`, or `any`"
    },
    "contentType": {
        "desc": "If the `type` is specified as `object`, this **MUST** indicate the Content-Type of the response"
    },
    "properties": {
        "desc": "[Read more](#properies) (for `type: object` only)"
    }
}
</p>
</json-table>

### Properties

Define the objects properties.

<json-table>
<p>
{
  
}
</p>
</json-table>
