---
layout: Docs
home: false
sidebar: true
---
# HTTP Server

## GET Example

```yaml
oms: 1
info: ...
lifecycle:
  startup:
    command: ['FLASK_APP=example.py', 'flask', 'run', '--host=0.0.0.0']
actions:
  concat:
    arguments:
      left:
        type: string
        in: query
      right:
        type: string
        in: query
    output:
      type: string
    http:
      method: get
      endpoint: /concat
      port: 5000
```

```python
# example.py
from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/concat')
def concat():
    left = request.args.get('left', '')
    right = request.args.get('right', '')
    return f'{left}{right}'
```

```javascript
// Request
{
  "left": "a",
  "right": "b"
}
```

```bash
# Platform Translation
$ curl -X GET http://service:5000/concat?left=a&right=b

# Response
ab
```

## POST Example

Using the same example above, here's a sample of the `microservice.yaml` for
having the `left` and `right` arguments in the request body of a POST request.

The lines changed have been highlighted for your convenience below:

```yaml{11,14,18,21}
oms: 1
info: ...
lifecycle:
  startup:
    command: ['FLASK_APP=example.py', 'flask', 'run', '--host=0.0.0.0']
actions:
  concat:
    arguments:
      left:
        type: string
        in: requestBody
      right:
        type: string
        in: requestBody
    output:
      type: string
    http:
      method: post
      endpoint: /concat
      port: 5000
      contentType: application/json
```

```javascript
// Request
{
  "left": "a",
  "right": "b"
}
```

```bash
# Platform Translation
$ curl -X POST -d '{"left": "a", "right": "b"}' -H "Content-Type: application/json" http://service:5000/concat

# Response
ab
```
