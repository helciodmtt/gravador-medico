import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    APPMAX_API_TOKEN: process.env.APPMAX_API_TOKEN ? '✅ Configurado (primeiros 8: ' + process.env.APPMAX_API_TOKEN.substring(0, 8) + '...)' : '❌ NÃO configurado',
    APPMAX_PRODUCT_ID: process.env.APPMAX_PRODUCT_ID || '❌ NÃO configurado',
    APPMAX_ORDER_BUMP_1_ID: process.env.APPMAX_ORDER_BUMP_1_ID || '❌ NÃO configurado',
    APPMAX_ORDER_BUMP_2_ID: process.env.APPMAX_ORDER_BUMP_2_ID || '❌ NÃO configurado',
    APPMAX_ORDER_BUMP_3_ID: process.env.APPMAX_ORDER_BUMP_3_ID || '❌ NÃO configurado',
  })
}
