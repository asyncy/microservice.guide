# Comparison with OpenAPI (fka Swagger)

The OMS and
[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md)
have very similar goals, but focus on two different aspects.

The table below highlights the key differences between OpenAPI and the OMS:

| OpenAPI                                                                | Open Microservice Specification                                                                                      |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Focuses on defining and documenting REST APIs for a particular service | Focuses on defining and documenting the deployment of a service, right from its lifecycle, to the APIs exposed       |
| Built for HTTP only                                                    | Completely agnostic of the underlying data exchange protocol                                                         |
| APIs are expressed as HTTP paths                                       | APIs are expressed as actions - an action can be executed via a HTTP request, or a shell command within that service |

<!--
The table above is generated from https://www.tablesgenerator.com/markdown_tables
-->

The OMS is heavily inspired by the OpenAPI 3.0 specification, and as such, it
borrows a lot of the existing schema from OpenAPI.
