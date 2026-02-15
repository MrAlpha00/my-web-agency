import { Pool, PoolConfig } from 'pg';

let pool: Pool;

if (!process.env.DATABASE_URL) {
    throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
}

const config: PoolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: true,
};

declare global {
    var postgresPool: Pool | undefined;
}

if (process.env.NODE_ENV === 'production') {
    pool = new Pool(config);
} else {
    if (!global.postgresPool) {
        global.postgresPool = new Pool(config);
    }
    pool = global.postgresPool;
}

export default pool;
