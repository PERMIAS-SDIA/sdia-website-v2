import { NextResponse } from 'next/server';
import { sql } from '@/lib/neon';

export async function GET() {
  try {
    const data = await sql`
      SELECT * 
      FROM team 
      ORDER BY
        -- 1. Executive department first
        CASE 
          WHEN department = 'Executive' THEN 0
          ELSE 1
        END,

        -- 2. Within Executive: Vice second, President first, others last
        CASE 
          WHEN department = 'Executive' AND role ILIKE '%vice%' THEN 1
          WHEN department = 'Executive' AND role ILIKE '%president%' THEN 0
          ELSE 2
        END,

        -- 3. Then by department, isHead, and role alphabetically
        department ASC,
        "isHead" DESC,
        role ASC;
      `;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching team data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team data' },
      { status: 500 }
    );
  }
}
