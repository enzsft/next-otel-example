import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { Resource } from "@opentelemetry/resources";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";

const sdk = new NodeSDK({
  resource: new Resource({}),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
  serviceName: "next-otel-example",
});

sdk.start();
