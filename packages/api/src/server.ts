import { initTRPC } from "@trpc/server";

import { Context } from "./context";

export const createRouter = () => {
	const t = initTRPC.context<Context>().create();
	return t.router;
};
