import pg from 'pg';
import type {
    Connection,
    ClientConfig,
    Client as ClientType,
} from 'pg';
const { Client } = pg;
export default new Promise(async (resolve, reject) => {
    try {
        const config: ClientConfig = {
            host: 'aws-0-ap-southeast-1.pooler.supabase.com',
            database: 'postgres',
            user: 'postgres.hofyowuhtxudcabxylbq',
            password: 'vadky6-vaXqym-hydnir',
            port: 5432,

        };
        const client = new Client(config);
        await client.connect();
        resolve(client);
    }

    catch (Exception) {
        throw new Error(Exception);
    }
}) as Promise<ClientType>;