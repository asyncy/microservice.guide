---
layout: Docs
home: false
sidebar: true
---
# Validate

When ran in a directory of a microservice (a directory containing a
`microservice.yml`), validation will be ran against that file.

```sh
oms validate
```

#### Example output

Valid `microservice.yml`:

```sh
No errors
```

Invalid `microservice.yml`:

```sh
actions.add.arguments.x should have required property 'type'
```

#### Options

- Silent: `--silent` or `-s`
  - Only feedback is the exit code (`0` or `1`)
- JSON: `--json` or `-j`
  - Forms the response in JSON
