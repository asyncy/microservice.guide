# Environment

Services **MUST** list environment variables that may be used to 
perform any actions the service exposes. They are provided when the service starts.

```yaml{2}
environment:
  access_token:
    type: string
    pattern: "^key_"
    required: true
    help: |
      Description of how the user should produce this variable
```

Environment variables are **case insensitive** to the end-user. They are provided to the service in upper case. For example, if the user defines `access_TOKEN=abc`, the service will get `ACCESS_TOKEN=abc`.

Each environment variable under `environment` may have the following information about it:

<json-table>
<p>
{
    "type": {
        "desc": "The data type for this environment variable. It must be one of `int`, `float`, `string`, `boolean`",
        "required": true
    },
    "pattern": "Validations for strings in a regular expression format.",
    "required": "Whether this variable is required or not. Default is `false`",
    "sensitive": "Set this to true if the environment variable is considered secret/private to inform the platform to encrypt the variable. Default is `false`",
    "help": "Description of how the user can produce this variable or details on why they need to provide it"
}
</p>
</json-table>
