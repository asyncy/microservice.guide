---
layout: Docs
home: false
sidebar: true
---
# Health Checks

A service **SHOULD** provide health checks to ensure that the Platform knows of it's current state.
Services are consistently down will be terminated and restarted.

**Sample**

```yaml
health:
  http:
    path: /health
    port: 5000
```

### What's considered healthy

Your health check **MUST** be a HTTP GET endpoint returning a `2xx` or `3xx` code when it's `healthy`.

<json-table>
<p>
{
  "http": {
    "desc": "Describes the HTTP interface for the health check.",
    "$block": {
      "port": {
        "desc": "The port on which the connection must be established.",
        "required": true
      },
      "path": {
        "desc": "The path for the health check to fetch state.",
        "required": true
      }
    }
  }
}
</p>
</json-table>
