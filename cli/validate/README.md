---
layout: Docs
home: false
sidebar: true
---

# Validate

When ran in a directory of a microservice (a directory containing a `oms.yml`), validation will be ran against that file.

The `validate` command can very helpful when creating a new OMS-compliant microservice, or instrumenting an existing service.

### CLI Interface

```
Usage: validate [options]

Validate the structure of a `oms.yml` in the current directory

Options:
  -j --json    Formats output to JSON
  -s --silent  Only feedback is the status exit code
  -h, --help   output usage information
```

### Example Usage

When inside a directory containing an `oms.yml`, you can test the validity of that microservice definition by entering the following code into the terminal:

```
oms validate
```

The following output appears for a **valid** `oms.yml`:

```
No errors
```

And an error similar to the following output appears when the `oms.yml` is **invalid**:

```
actions.add.arguments.x should have required property 'type'
```
