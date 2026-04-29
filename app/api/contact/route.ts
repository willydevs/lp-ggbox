import { NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const data = ContactSchema.safeParse(body);

    if (!data.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: data.error.flatten() },
        { status: 400 },
      );
    }

    // Integração com e-mail pode ser adicionada aqui
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
