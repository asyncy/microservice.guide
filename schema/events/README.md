# Events

<!-- TODO a nice svg illustration showing how this works -->

A Service **MAY** have an action that publishes events asynchronously.
The Platform would subscribe to events and the Service will publish events back to the Platform.

> <small>Intended for webhooks, pubsub, user interactions and streaming IoT data.</small>

[[toc]]

## Example Event Pubsub

```yaml {5,24,30}
actions:
  user:
    help: Subscribe to user events
    events:
      signup:
        help: When a customer signs up
        http: &http
          port: 5000
          subscribe:
            path: /subscribe
            method: post
            contentType: application/json
          unsubscribe:
            path: /unsubscribe
            method: post
        output: &user
          type: object
          contentType: application/json
          properties:
            name:
              type: string
            email:
              type: string
      login:
        help: When a user logs in.
        http:
          <<: *http  # yaml magic to reuse the object declared above
        output: 
          <<: *user
      logout:
        help: When a user logs out.
        http:
          <<: *http
        output:
          <<: *user
```


1. **Subscribe**. The Platform subscribes to an event by making a HTTP request to the Service.
```shell
# Platform to Service
POST http://SERVICE/subscribe {
  "id": "9a8b0ad3-9bc0-4af5-890f-75b9acacf3ab",
  "event": "signup",
  "endpoint": "https://CLIENT/signups",
  "data": { }  # This would be a map of arguments if the event has any.
}
```

The Service **MUST** store this subscription information. Here's a Python snippet depicting this:
```python
subscriptions = {}

def subscribe(data):
    subscriptions[data['id']] = data
```

2. **Publish**. A new event is ready to be published by the Service.

Here's a Python snippet which reads our previously declared `subscriptions` map:

```python
def publish(event, data):
    for subscription in subscriptions:
        if subscription['event'] == event:
            # Make a HTTP POST request to subscription['endpoint']
```

The Service then makes a HTTP POST request to send the event to the Platform using the [CloudEvents spec](https://github.com/cloudevents/spec).

```shell
# Service to Platform
POST https://CLIENT/signups {
  "cloudEventsVersion" : "0.1",
  "eventType" : "com.user.signup",
  "source" : "/signup",
  "eventID" : "A234-1234-1234",
  "eventTime" : "2018-04-05T17:31:00Z",
  "contentType" : "text/json",
  "data" : {  # event data
    "name": "Steve",
    "email": "no-reply@microservice.guide"
  }
}
```

> <small>This allows the Platform to subscribe to many events. 
All subscriptions will have a unique destination to publish events.</small>

## Overview

<json-table>
<p>
{
  "help": {
    "desc": "A human friendly description for this event."    
  },
  "http": {
    "desc": "Define how the platform can subscribe and unsubscribe from events",
    "required": true,
    "$block": {
      "port": "The port to make (un)subscribe requests to.",
      "subscribe": {
        "required": true,
        "desc": "Describing how to subscribe to the event.",
        "$block": {
          "path": "A path used in the request url.",
          "method": "HTTP method. E.g. post.",
          "contentType": "Choose how arguments are encoded when subscribing."
        }
      },
      "unsubscribe": {
        "desc": "Describing how to unsubscribe to the event.",
        "$block": {
          "path": "A path used in the request url.",
          "method": "HTTP method. E.g. post or delete",
          "contentType": "Choose how arguments are encoded when unsubscribing."
        }
      }
    }
  },
  "arguments": {
      "desc": "Optional and required inputs the action has. [Read more](#arguments)",
      "required": true
  },
  "output": {
      "desc": "Type of data that the action returns. [Read more](#output)",
      "required": true
  }
}
</p>
</json-table>


**Example Services**

Below are a few services that publish events.

- [Slack: Bot](https://github.com/microservice/slack/blob/master/microservice.yml)
  - Listen and hear messages in a room.
- [Twitter: Streaming tweets](https://github.com/microservice/twitter/blob/master/microservice.yml)
  - Stream tweets filtered by a hashtag.


## Arguments

<Badge text="actions.$.events.$.arguments" type="info"/>

Subscribing to an event **MAY** include `arguments` which can be used to define certain parameters
concerning the subscription. For example, filtering the content before the event is published.

See [Action Arguments](/schema/actions/#arguments) for details.


## Output

<Badge text="actions.$.events.$.output" type="info"/>

The event published to the Platform **MUST** include the `output` detailing the structure of the event data published.

See [Action Output](/schema/actions/#output) for details.