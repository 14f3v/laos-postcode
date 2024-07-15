import { Bool, Num, OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { PostCode, } from "../types";
import supabaseConnect from 'utils/dbs/supabase';
export class PostCodeLists extends OpenAPIRoute {
    schema = {
        tags: ["Postcodes"],
        summary: "List Postcode",
        request: {
            query: z.object({
                page: Num({
                    description: "Page number",
                    default: 0,
                    required: false,
                }),
                id: Num({
                    description: 'Record No.',
                    required: false
                }),
                country_code: Str({
                    description: 'Country Code',
                    required: false,
                }),
                country_code_name: Str({
                    description: 'Country Code Name',
                    required: false,
                }),
                country_name: Str({
                    description: 'Country Name',
                    required: false,
                }),
                mobile_code: Str({
                    description: 'Mobile Prefix Code',
                    required: false,
                }),
                nationality_code: Str({
                    description: 'Nationality Code',
                    required: false,
                }),
                country_master_id: Num({
                    description: 'Country Id',
                    required: false,
                }),
                type: Str({
                    description: 'State Type',
                    required: false,
                }),
                state_code: Str({
                    description: 'State Code',
                    required: false,
                }),
                code_name: Str({
                    description: 'State Code Name',
                    required: false,
                }),
                state_name: Str({
                    description: 'State name',
                    required: false,
                }),
                state_entity_id: Str({
                    description: 'Parent State Id',
                    required: false,
                }),
            }),
        },
        responses: {
            "200": {
                description: "Returns a list of tasks",
                content: {
                    "application/json": {
                        schema: z.object({
                            series: z.object({
                                success: Bool(),
                                result: z.object({
                                    postcodes: PostCode.array(),
                                }),
                            }),
                        }),
                    },
                },
            },
        },
    };

    async handle(context) {
        const data = await this.getValidatedData<typeof this.schema>();
        const supabase = supabaseConnect(context?.env);

        // Retrieve the validated parameters
        const {
            page,
            id,
            country_code,
            country_code_name,
            country_name,
            mobile_code,
            nationality_code,
            country_master_id,
            type,
            state_code,
            code_name,
            state_name,
            state_entity_id,
        } = data.query;

        let statement = supabase
            .from("postcodes")
            .select('*')

        if (id) {
            statement.eq('id', id);
        }

        if (country_code) {
            statement.eq('country_code', country_code);
        }

        if (country_code_name) {
            statement.eq('country_code_name', country_code_name);
        }

        if (country_name) {
            statement.eq('country_name', country_name);
        }

        if (mobile_code) {
            statement.eq('mobile_code', mobile_code);
        }

        if (nationality_code) {
            statement.eq('nationality_code', nationality_code);
        }

        if (country_master_id) {
            statement.eq('country_master_id', country_master_id);
        }

        if (type) {
            statement.eq('type', type);
        }

        if (state_code) {
            statement.eq('state_code', state_code);
        }

        if (code_name) {
            statement.eq('code_name', code_name);
        }

        if (state_name) {
            statement.eq('state_name', state_name);
        }

        if (state_entity_id) {
            statement.eq('state_entity_id', state_entity_id);
        }

        const { data: dataRec, error } = await statement;

        console.log({ dataRec, error });
        // Implement your own object list here

        return {
            success: true,
            postcodes: dataRec,
        };
    }
}
