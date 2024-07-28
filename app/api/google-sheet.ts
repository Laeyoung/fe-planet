// import 'dotenv/config'
// require('dotenv').config()

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { NextResponse } from 'next/server';

const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function getRows() {
  const doc = new GoogleSpreadsheet('1iErjwRDwq-ruQuLY9fNMz_xGTKlPO_fwAvD2RkrYUys', serviceAccountAuth);
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByTitle['시트1']; 
  const rows = await sheet.getRows(); 

  const formattedRows = rows.map((row) => row._clearRowData); // 데이터 형식 변환 (필요에 따라 수정)

  return NextResponse.json(formattedRows);
}
