---
layout: Docs
home: false
sidebar: true
---

# Overview

The Open Microservice Specification is an open standard for annotating reusable
microservices. The intent of this guide is to provide developers and operators
with a framework to build, deploy, and operate microservices.

It is important to understand that this guide is to be used as a blueprint to
build microservices. It can be applied to technologies like Docker, Rocket,
Spring Boot, Go kit, etc. It's up to the developer to decide on the underlying
infrastructure.

If you'd like to contribute, please feel free to
[reach out](mailto:info@openmicroservices.org)!

### Microservice Definition

A `oms.yml` file **MUST** be provided, which outlines the structure and
operations of the container, as in the [anatomy](/introduction/anatomy/).

### Keywords

- **MUST** - Required for a service to contain this functionality
- **SHOULD** - Recommended for a service to contain this functionality
- **MAY** - Optional for a service to contain this functionality

See [RFC 2119](https://tools.ietf.org/html/rfc2119) for details

### Next

Create your first `oms.yml` by referring to its
[anatomy](/introduction/anatomy/).
