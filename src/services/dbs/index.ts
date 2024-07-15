import pg from 'pg';
import type {
    ClientConfig,
    Client as ClientType,
} from 'pg';
const { Client } = pg;

export default class DataBaseServices {
    private static instance: DataBaseServices;
    private config: ClientConfig = {
        host: 'aws-0-ap-southeast-1.pooler.supabase.com',
        database: 'postgres',
        user: 'postgres.hofyowuhtxudcabxylbq',
        password: 'vadky6-vaXqym-hydnir',
        port: 5432,

    };

    private _client: ClientType;

    private constructor() {
        this.clientInitConnection();
    };

    public static getInstance(): DataBaseServices {
        if (!DataBaseServices.instance) {
            DataBaseServices.instance = new DataBaseServices();
        }
        return DataBaseServices.instance;
    };

    public async clientInitConnection(): Promise<void> {
        this._client = new Client(this.config);
        await this._client.connect();
    }

    public async checkingConnection() { 
        const res = await this._client.query('SELECT NOW()');
        console.log(res);
    }
};