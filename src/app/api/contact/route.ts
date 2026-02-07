import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const { name, phone, need, budget, message } = await req.json();

  const supabase = await createClient();

  const { error } = await supabase.from('contacts').insert({
    name,
    phone,
    need,
    budget,
    message,
  });

  if (error) {
    console.error(error);
    return Response.json({ success: false });
  }

  return Response.json({ success: true });
}
