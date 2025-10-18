import { NextResponse } from 'next/server';
import { sql } from '@/lib/neon';

export async function GET() {
  try {
    const data = await sql`SELECT * FROM events ORDER BY datetime DESC`;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching events data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events data' },
      { status: 500 }
    );
  }
}
