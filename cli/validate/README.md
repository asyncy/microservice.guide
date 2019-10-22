---
layout: Docs
home: false
sidebar: true
---

# Validate

When ran in a directory of a microservice (a directory containing a
`microservice.yml`), validation will be ran against that file.

### Usage

```shell
Usage: validate [options]

Validate the structure of a `oms.yml` in the current directory

Options:
  -j --json    Formats output to JSON
  -s --silent  Only feedback is the status exit code
  -h, --help   output usage information
```

### Examples

Enter the following code into the terminal:

```
oms validate
```

The following output appears for a **valid** `oms.yml`:

```
No errors
```

And the following output appears when the `oms.yml` is **invalid**:

```
actions.add.arguments.x should have required property 'type'
```
