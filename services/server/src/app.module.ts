import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CommonModule } from "./common/common.module";
import { loadConfig } from "./config/configuration";

@Module({
	imports: [
		CommonModule,
		// config module
		ConfigModule.forRoot({
			isGlobal: true,
			load: [loadConfig],
		}),
	],
	controllers: [],
})
export class AppModule {}
