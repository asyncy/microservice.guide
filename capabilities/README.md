# Linux Capabilities

A service **MUST** list the [Linux capabilities](http://man7.org/linux/man-pages/man7/capabilities.7.html) that are required for the service to properly operate.

```yaml
cap:
  - chown
```

> Learn more about [Docker runtime privilege and linux capabilities](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities).
