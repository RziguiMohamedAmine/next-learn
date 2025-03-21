import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data.rows;
}

export async function GET() {
  // If you want to use the commented out code:
  try {
    return NextResponse.json(await listInvoices());
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 });
  }
  
  // Or if you want to keep the placeholder message:
  // return NextResponse.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
}