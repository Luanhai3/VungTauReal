// app/api/contact/route.ts
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  const body = await req.json();

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error } = await supabase.from('contacts').insert([
    {
      name: body.name,
      phone: body.phone,
      product: body.product,
      type: body.type,
      message: body.message,
    },
  ]);

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json({ success: true });
}
