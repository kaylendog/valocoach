import z from "zod";

export const StatusResponseSchema = z.object({
	versions: z.array(z.string()),
});

export type StatusResponse = z.infer<typeof StatusResponseSchema>;
