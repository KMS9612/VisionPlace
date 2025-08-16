import { NextRequest, NextResponse } from "next/server";
// import { getSheets } from "../google-sheet";
import { db } from "@/src/service/_api/fb";
import { addDoc, collection } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const { name, messanger, purposeDetail, grade } = await req.json();
    console.log(name, messanger, purposeDetail, grade);

    // 입력값 검증
    if (!name || !messanger || !purposeDetail || !grade) {
      return NextResponse.json(
        { status: 400, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const isSuccess = await CreateFormDoc(
      name,
      messanger,
      purposeDetail,
      grade
    );

    if (isSuccess) {
      return NextResponse.json(
        { message: "Form Submit Success" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Fire Base Server Error" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error Form Submit" }, { status: 500 });
  }
}

async function CreateFormDoc(
  name: string,
  messanger: string,
  purposeDetail: string,
  grade: string
) {
  try {
    const docRef = await addDoc(collection(db, "submited_form"), {
      name: name,
      messanger: messanger,
      purposeDetail: purposeDetail,
      grade: grade,
    });

    console.log(docRef.id + "가 등록되었습니다.");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
