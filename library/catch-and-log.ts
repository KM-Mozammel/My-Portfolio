import { logError } from "./error-logger";

export async function catchAndLog<T>(
    fn: () => Promise<T>,
    context: { path?: string; source?: "server" | "api" } = {}
): Promise<T | null> {
    try {
        return await fn();
    } catch (err: unknown) {
        const error = err instanceof Error ? err : new Error(String(err));

        await logError({
            type: error.name || "ServerError",
            message: error.message,
            path: context.path,
            stack: error.stack,
            source: context.source || "server",
            extra: {
                // you can add more context here
            },
        });

        // Re-throw so the caller still knows something went wrong
        throw error;
    }
}