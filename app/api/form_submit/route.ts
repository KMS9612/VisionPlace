import { NextRequest, NextResponse } from "next/server";
import { getSheets } from "../google-sheet";

export async function POST(req: NextRequest) {
  try {
    const sheet = await getSheets();
    const { name, messanger, purposeDetail, grade } = await req.json();
    const time = new Date();

    await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "user_submit",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[time, name, messanger, purposeDetail, grade]],
      },
    });

    return NextResponse.json({ status: 200, message: "Form Submit Success" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, message: "Error Form Submit" });
  }
}
