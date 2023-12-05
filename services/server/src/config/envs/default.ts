import { Config } from "../config.interface";

export const config: Config = {
	database: {
		url: process.env.DATABASE_URL,
	},
};
