# Metrics

Services **SHOULD** support metric delivery to [Prometheus](https://prometheus.io). Ingestion can be accomplished in many different ways.

### Namespacing

There are many ways to organize metrics. It is important to always properly namespace your collected data. This gives you the flexibility to easily slice and dice your metrics at a later date.

See [Prometheus Metric and Label Naming](https://prometheus.io/docs/practices/naming/) to get a better understanding of best practices.

## StatsD
Containers can send metrics to StatsD for aggregation and delivery.

#### StatsD basic usage

```shell
echo "accounts.authentication.password.failure.no_email_found:1|c" \
| nc -u -w1 $OMG_STATSD_HOSTNAME $OMG_STATSD_PORT
```

#### StatsD with tag support

```shell
echo "accounts.authentication.password.failure.no_email_found:1|c|#tag:value,another_tag:another_value" \
| nc -u -w1 $OMG_STATSD_HOSTNAME $OMG_STATSD_PORT
```

| Endpoint | Port | Protocol |
| --- | --- | --- |
| `$OMG_STATSD_HOSTNAME` | `$OMG_STATSD_PORT` | `tcp` + `udp` |


See [https://github.com/etsy/statsd](https://github.com/etsy/statsd) for usage details.

## Flat Files (Metrics 2.0)

Write [Metrics 2.0](http://metrics20.org/) output to `/var/lib/metrics.dat`

```shell
echo '
{
    what=github_response_time
    http_code=206
    http_method=GET
    host=api.github.com
    service=github-api
    stat=upper_90
    target_type=gauge
    unit=ms
}
meta: {
    env=production
}
' >> /var/lib/metrics.dat
```

## Prometheus Exporter

Your service **MAY** expose metrics via Prometheus Exporter. Provide the location of where to retrieve these metrics in your `microservice.yml`.

```yaml
metrics:
  prometheus:
    tls: false
    port: 8080
    uri: /metrics
```

See the official [Prometheus](https://prometheus.io/docs/instrumenting/exporters/) documentation to understand how to write an exporter


<!--
# Details

The service **MAY** provide additional details about metrics in the `microservice.yml` assist end users in understanding the metrics.

```yaml
metrics:
    details:
        github_response_time:
            help: Time in milliseconds GitHub takes takes to return results
```
-->