import { Global, Module } from "@nestjs/common";

import { ConfigService } from "./providers/config.service";
import { PrismaService } from "./providers/prisma.service";

@Global()
@Module({
	providers: [PrismaService, ConfigService],
	exports: [PrismaService, ConfigService],
})
export class CommonModule {}
