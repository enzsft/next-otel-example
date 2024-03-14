"use server";

import { createLogger } from "@enzsft/logging";
import { getOpenTelemetryTracingContext } from "@enzsft/logging/opentelemetry";
import { revalidatePath } from "next/cache";
import { store } from "../store";

const logger = createLogger({
  service: "next-otel-example",
});

logger.withTracingContext(getOpenTelemetryTracingContext());

export const incrementTally = async () => {
  return await logger.withSpan("action.incrementTally", async () => {
    const originalTally = store.tally;
    store.tally = store.tally + 1;

    logger.info({
      message: "Incremented tally",
      data: {
        originalTally,
        newTally: store.tally,
      },
    });

    revalidatePath("/");

    return Promise.resolve({ tally: store.tally });
  });
};
