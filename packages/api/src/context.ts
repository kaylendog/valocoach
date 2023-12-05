import { PrismaClient } from "@valocoach/prisma";

export interface Context {
	prisma: PrismaClient;
}
