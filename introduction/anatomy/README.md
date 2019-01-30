# Anatomy

Here's a sample `microservice.yml` file:

```yaml
omg: 1
info:
  version: 1.0.1
  title: Currency Converter
  description: This is a sample currency converter service
  contact:
    name: John Doe
    url: https://support.example.com
    email: support@example.com
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT  
lifecycle:
  startup:
    command: ["java", "-jar", "CurrencyApp.jar"]
actions:
  convert:
    help: Convert a currency into another currency
    http:
      port: 8080
      method: get
      path: /convert
    arguments:
      units:
        type: number
        in: query
        required: true
      from:
        type: string
        in: query
        required: true
      to:
        type: string
        in: query
        required: true
    output:
      type: object
      contentType: application/json
      properties:
        units:
          type: number
        currency:
          type: string
```

Let's break it down a bit.
### omg
```yaml
omg: 1
```
The `omg` field specifies which version of the OMG revision this file is written in.

### info
```yaml
info:
  version: 1.0.1
  title: Currency Converter  
  description: This is a sample currency converter service
  contact:
    name: John Doe
    url: https://support.example.com
    email: support@example.com
  license:
    name: MIT
    url: https://opensource.org/licenses/MIT  
```

The `info` field specifies general information about this service, such as contact, licence, and it's
version.

::: tip 📖 Read more
More information about the `info` field is found [here](/schema/info/).  
:::

### lifecycle

```yaml
lifecycle:
  startup:
    command: ["java", "-jar", "CurrencyApp.jar"]
```
The `lifecycle` field describes the lifecycle of your microservice. When your microservice is
started by an underlying container framework, such as Docker, the Platform must use this command
instead of the ENTRYPOINT value in the Dockerfile.

::: tip 📖 Read more
More information about the `lifecycle` field is found [here](/schema/lifecycle/).
:::

### actions
```yaml
actions:
  convert:
    help: Convert a currency into another currency
    http:
      port: 8080
      method: get
      path: /convert
    arguments:
      ...
    output:
      type: object
      contentType: application/json
      properties:
        ...
```
The `actions` field describes how to interact with this service. It's important to note that
every action specified here might have a different underlying execution strategy. In the case
above, the action `convert` uses the `http` execution strategy, i.e. the Platform **MUST** make a
HTTP call to the to the service, respecting the configuration under the `http` section.

::: tip 📖 Read more
More information about the `actions` field is found [here](/schema/actions/).
:::

### events
```yaml{3}
actions:
  user:
    events:
      signup:
        help: A new user signed event
        arguments:
          ...
        output:
          ...
```
The `events` field describes various events that an action can publish.

::: tip 📖 Read more
More information about the `events` field is found [here](/schema/events/).
:::
