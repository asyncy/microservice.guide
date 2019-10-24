---
layout: Docs
home: false
sidebar: true
---

# UI

::: danger &#x26A0; HERE BE EXPERIMENTAL DRAGONS
The `oms ui` feature is new and under active development. Documentation here is extremely limited and unreliable at best.
:::

### Command Line Interface

```
Usage: ui [options]

Starts the oms-app which monitors your microservice.

Options:
  -p --port, <p>  The port to bind
  --no-open       Do not open in browser
  --inherit-env   Binds host env variable asked in the oms.yml to the container env
  -h, --help      output usage information
```

### Example Usage

When inside a directory containing an `oms.yml`, you can launch the OMS UI web application by entering the following code into the terminal:

``` sh
oms ui
```

If that doesn't work, you've stumbled upon at least one dragon. But fear not brave one, you can find us on [Spectrum Chat](https://spectrum.chat/open-microservices) ready to pledge ourselves to your cause.
