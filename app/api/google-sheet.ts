import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextResponse } from 'next/server';

export async function getRows() {
  const doc = new GoogleSpreadsheet('스프레드시트 ID');
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByTitle['시트 이름']; 
  const rows = await sheet.getRows(); 

  const formattedRows = rows.map((row) => row._rawData); // 데이터 형식 변환 (필요에 따라 수정)

  return NextResponse.json(formattedRows);
}
