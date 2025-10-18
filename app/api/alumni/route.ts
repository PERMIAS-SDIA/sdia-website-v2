import { NextResponse } from 'next/server';
import { sql } from '@/lib/neon';

export async function GET() {
  try {
    const data = await sql`SELECT * FROM alumni ORDER BY graduation_year DESC, name ASC`;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching alumni data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch alumni data' },
      { status: 500 }
    );
  }
}
