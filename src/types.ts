import { Str, Num } from "chanfana";
import { z } from "zod";

export const PostCode = z.object({
	id: Num(),
	country_code: Str(),
	country_code_name: Str(),
	country_name: Str(),
	mobile_code: Str(),
	nationality_code: Str(),
	country_master_id: Str(),
	type: Str({ example: 'PROVINCE' }),
	state_code: Str(),
	code_name: Str(),
	state_name: Str(),
	state_entity_id: Str()
});