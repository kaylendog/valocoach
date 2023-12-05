import { AVAILABLE_VERSIONS } from "src/utils/version";

import { Controller, Get } from "@nestjs/common";
import { StatusResponse } from "@valocoach/api";

@Controller("status")
export class StatusController {
	@Get("/")
	status(): StatusResponse {
		return { versions: AVAILABLE_VERSIONS };
	}
}
