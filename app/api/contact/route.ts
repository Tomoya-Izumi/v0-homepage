import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'KIBAN お問い合わせ <contact@mail.kibantech.com>',
      to: ['tomoya-izumi@kibantech.com'],
      subject: `【KIBAN】お問い合わせ: ${name}様`,
      html: `
        <h2>お問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>会社名:</strong> ${company || '未入力'}</p>
        <hr />
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
