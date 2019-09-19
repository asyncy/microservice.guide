---
layout: Home
home: true
---

```yaml
    omg: 1
    
    info:
      version: 1.0.1
      title: Calculator
      description: This is a sample calculator
      license:
        name: MIT
        url: https://opensource.org/licenses/MIT
    
    actions:
      add:
        help: Add two integers
        http:
          method: post
          path: /add
          port: 5000
        arguments:
          x:
            type: int
            required: true
            in: requestBody
          y:
            type: int
            required: true
            in: requestBody
          output:
            type: int

    lifecyle:
      startup:
        command: ['flask', 'run', '--host=0.0.0.0']
```