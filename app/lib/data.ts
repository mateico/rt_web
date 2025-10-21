import postgres from 'postgres';
import {PaquetesTable,} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchFilteredPaquetes(
    query: string,
) {
    try {
        const data = await sql<PaquetesTable[]>`
        SELECT
            paquetes.id,
            paquetes.title,
            paquetes.subtitle,
            paquetes.price,
            paquetes.image,
            paquetes.country,
            paquetes.tag
        FROM paquetes
        WHERE
            paquetes.title ILIKE ${`%${query}%`} OR
            paquetes.subtitle ILIKE ${`%${query}%`} OR
            paquetes.country::text ILIKE ${`%${query}%`} OR
            paquetes.tag::text ILIKE ${`%${query}%`}
        ORDER BY paquetes.id DESC
      `;

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.');
    }
}

export async function fetchPaqueteById(id: string) {
    try {
        const result = await sql<PaquetesTable[]>`
             SELECT
                 paquetes.id,
                 paquetes.title,
                 paquetes.subtitle,
                 paquetes.price,
                 paquetes.image,
                 paquetes.country,
                 paquetes.tag
             FROM paquetes
           WHERE paquetes.id = ${id}
             LIMIT 1;
         `;
        return result[0] ?? null;
    } catch (error) {
        console.error('Database Error:', error);
        //throw new Error('Failed to fetch invoice.');
    }
}