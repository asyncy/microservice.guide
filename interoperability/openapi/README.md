---
layout: Docs
home: false
sidebar: true
---
# OpenAPI

The [`openapi2oms`](https://github.com/microservices/openapi2oms) tool helps
convert an OpenAPI spec to the Open Microservice Specification. To do so, it
adds the following fields in the root of the generated `microservice.yaml`:

```yaml
source: openapi
hostedExternally: true
fromOpenAPIVersion: 3.0.0
```
