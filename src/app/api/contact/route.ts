import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/admin';

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabaseAdmin.from('contacts').insert([
    {
      name: body.name,
      phone: body.phone,
      product: body.product,
      type: body.type,
      message: body.message,
    },
  ]);

  if (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }

  return NextResponse.json({ success: true });
}
