# Event-driven HTTP Service

Building an event-driven HTTP service involves the following:

1. Expose a HTTP endpoint when a container is started
2. Accept subscription requests
3. Deliver events via the subscription metadata provided in (2) above

In this example, let's build a simple pub/sub service.

## Handling event subscription

In microservice.yml:

```yaml
version: 1
lifecycle:
  startup:
    command: ['node', 'app.js']
actions:
  listen:
    help: Subscribe to events
    events:
      event:
        http:
          port: 5000
          subscribe:
            path: /subscribe
            method: post
            contentType: application/json
          unsubscribe:
            path: /unsubscribe
            method: delete
            contentType: application/json
        arguments:
          name:
            type: string
            in: requestBody
            required: true
  publish:
    help: Publish an event to your service
    arguments:
      eventName:
        type: string
        in: requestBody
        required: true
      data:
        type: map
        in: requestBody
        required: true
    http:
      port: 5000
      method: post
      contentType: application/json
      path: /publish
```

To publish an event, the HTTP call made by the Platform to the service will be:

```sh
curl -X POST \
     -d '{"eventName": "foo", "data": {"foo": "bar"}}' \
     -H 'Content-Type: application/json; charset=utf-8' \
     http://service:5000/publish
```

When the Platform wants to subscribe to an event emitted from the service, the
Platform will make the following HTTP request:

```sh
curl -X POST \
     -d '{"endpoint": "http://platform:8000/foo/bar/event", \
          "id": "subscription uuid", "data": {"name": "foo", "id": "uuid"}}' \
     -H 'Content-Type: application/json; charset=utf-8' \
     http://service:5000/subscribe
```

## Delivering events

After the Platform has subscribed to events via the subscription HTTP request
above, it's time for the service to deliver these events to the Platform. The
service MUST make an HTTP request to the platform, to the endpoint specified
during the subscription HTTP call.

The HTTP payload must follow the
[CloudEvents](https://github.com/cloudevents/spec/blob/master/json-format.md)
JSON specification.

```sh
curl -X POST \
     -d '{ \
        "eventType": "foo", \
        "cloudEventsVersion": "0.1", \
        "source": "/context", \
        "eventID": "1234-1234-1234", \
        "eventTime": "2018-08-06T17:53:09Z" \
        "contentType": "application/vnd.oms.object+json", \
        "data": {"data": {"foo": "bar"}} \
        }' \
     -H 'Content-Type: application/json; charset=utf-8' \
     http://platform:8000/foo/bar/event
```
