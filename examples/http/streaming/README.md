# Event-driven HTTP Service

Building an event-driven HTTP service involves the following:
1. Expose an HTTP endpoint when a container is started
2. Accept subscription requests
3. Deliver events via the subscription metadata provided in (2) above

In this example, let's build a simple pub/sub service.

## Handling event subscription
In microservice.yml:
```yaml
commands:
  subscribe:
    run:
      port: 5000
    events:
      help: Subscribe to events
      event:
        arguments:
          name:
            type: string
            required: true        
      http:
        method: get
        endpoint: /subscribe
  publish:
    help: Publish an event
    arguments:
      event:
        type: string
        location: body
        required: true  
      data:
        type: map
        location: body
        required: true
    http:
      method: post
      endpoint: /publish
```

To publish an event, the HTTP call made by the Platform to the service will be:
```sh
curl -X POST \ 
     -d '{"event": "foo", "data": {"foo": "bar"}}' \ 
     -H 'Content-Type: application/json; charset=utf-8' \ 
     http://service:5000/publish
```

When the Platform wants to subscribe to an event emitted from the service, the
Platform will make the following HTTP request:
```sh
curl -X POST \ 
     -d '{"endpoint": "http://platform:8000/foo/bar/event", "data": {"name": "foo"}}' \ 
     -H 'Content-Type: application/json; charset=utf-8' \ 
     http://service:5000/subscribe
```

## Deliver events
After the Platform has subscribed to events via the subscription HTTP request above,
it's time for the service to deliver these events to the Platform. 
The service MUST make an HTTP request to the platform, to the endpoint
specified during the subscription HTTP call.

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
        "contentType": "application/json", \ 
        "data": {"foo": "bar"} \
        }' \
     -H 'Content-Type: application/json; charset=utf-8' \ 
     http://platform:8000/foo/bar/event
```