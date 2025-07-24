import { NextRequest, NextResponse } from "next/server";
import { getSheets } from "../google-sheet";

export async function POST(req: NextRequest) {
  try {
    const sheet = await getSheets();
    const { time } = await req.json();

    await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "form_data",
      valueInputOption: "FORM_DATA",
      requestBody: {
        values: [[time]],
      },
    });

    return NextResponse.json({ status: 200, message: "visit tracked" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, message: "Error visit Tracked" });
  }
}
