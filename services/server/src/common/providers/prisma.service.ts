import { OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@valocoach/prisma";

import { ConfigService } from "./config.service";

export class PrismaService extends PrismaClient implements OnModuleInit {
	constructor(config: ConfigService) {
		super({ datasourceUrl: config.getOrThrow("database.url") });
	}

	onModuleInit() {
		return this.$connect();
	}
}
