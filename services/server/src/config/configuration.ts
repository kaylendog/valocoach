import deepmerge from "deepmerge";

import { Config } from "./config.interface";
import { config as defaults } from "./envs/default";

export const loadConfig = async (): Promise<Config> => {
	const { config: environment } = <{ config: Config }>(
		await import(`${__dirname}/envs/${process.env.NODE_ENV ?? "development"}`)
	);
	return deepmerge(defaults, environment);
};
