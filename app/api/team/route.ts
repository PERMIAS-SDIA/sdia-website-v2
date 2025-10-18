import { NextResponse } from 'next/server';
import { sql } from '@/lib/neon';

export async function GET() {
  try {
    const data = await sql`SELECT * FROM team ORDER BY name ASC`;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching team data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team data' },
      { status: 500 }
    );
  }
}
