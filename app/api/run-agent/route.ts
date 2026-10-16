import { NextResponse } from 'next/server';
import { generateHeadline } from '@/agents/MainAgent';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { ok: false, error: 'The AI demo is not configured.' },
      { status: 503 },
    );
  }

  try {
    const text = await generateHeadline('soccer', 'A late goal decides the match');
    return NextResponse.json({ ok: true, text });
  } catch (error: unknown) {
    console.error('Headline generation failed:', error instanceof Error ? error.name : 'Unknown error');
    return NextResponse.json(
      { ok: false, error: 'Unable to generate a headline. Please try again later.' },
      { status: 502 },
    );
  }
}
