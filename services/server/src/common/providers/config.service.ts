import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfig, Path, PathValue } from "@nestjs/config";

import { Config } from "../../config";

@Injectable()
export class ConfigService<K = Config> extends NestConfig<K> {
	override get<P extends Path<K>>(path: P): PathValue<K, P> | undefined {
		const value = super.get(path, { infer: true });
		return value;
	}

	override getOrThrow<P extends Path<K>>(path: P): PathValue<K, P> {
		const value = this.get(path);
		if (value === undefined) {
			throw new Error(`Missing configuration value for ${path}`);
		}
		return value;
	}
}
