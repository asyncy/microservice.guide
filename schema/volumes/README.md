---
layout: Docs
home: false
sidebar: true
---
# Volumes

Depending on the implementation of the service it **MAY NOT** have access to any volume.

A container **MAY** require a service-specific volume that is accessible to that service only.

```yaml
volumes:
  foobar:  # custom name
    target: /mnt/data
    persist: true
```

Each volume name under `volumes` may have the following information about it:

<json-table>
<p>
{
    "target": {
        "desc": "The target directory for this volume",
        "required": true
    },
    "persist": "Whether this volume must be persisted or not. If not specified, it defaults to `false`"    
}
</p>
</json-table>