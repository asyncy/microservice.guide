---
layout: Docs
home: false
sidebar: true
---

# List

When ran in a directory containing an `oms.yml` , the command lists all actions and arguments exposed by a microservice.

### Command Line Interface

```
Usage: list [options]

Lists all actions available in microservice.

Options:
  -j --json     Returns actions in json format
  -d --details  Returns detailed actions
  -h, --help    output usage information
```

#### Options

##### `-d --details`

To see a list of arguments each action accepts, use the following command:

``` sh
oms list -d
```

##### `-j --json`

To see a the same list, but in JSON format, use the following command:

``` sh
oms list -j
```

### Example Usage

When inside a directory containing an `oms.yml`, you can return all actions exposed by microservice with the following terminal command:

``` sh
oms list
```

The following output appears for the [OMS-compliant Dropbox service](https://github.com/oms-services/dropbox):

```
list: List all folders
userInfo: Get user information
upload: Upload file using filename
download: download file using path or url
```

To see a list of arguments each action accepts, enter the following into the terminal:

``` sh
oms list -d
```

And the following output will appear:

```
list: List all folders
HTTP :3000/list?
{}

userInfo: Get user information
HTTP :3000/userinfo?
{}

upload: Upload file using filename
HTTP :3000/upload?
{
    "fileName": "string",
    "fileContent": "any",
    "fileType": "string"
}

download: download file using path or url
HTTP :3000/download?
{
    "path": "string",
    "url": "string"
}
```
