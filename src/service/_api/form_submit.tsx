import { FormValueType } from "@/src/type/components/cta/formField.type";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "./fb";

// firebase에서 자동으로 Header를 추가해주는데 Next.js API를 사용해서 서버를 한번 거치게 되면 해당 기능을 사용하지 못해 Next.js API는 사용하지 않을 예정
// export const FormSubmitService = async (formValue: FormValueType) => {
//   try {
//     await fetch("/api/form_submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // "X-Firebase-AppCheck": appCheckToken,
//       },
//       body: JSON.stringify(formValue),
//     });
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// };

/* 정보삭제 기간인 3년뒤의 날짜 구하기 */
const getExpiredDate = () => {
  const expiredDate = new Date();
  expiredDate.setFullYear(expiredDate.getFullYear() + 3);

  return Timestamp.fromDate(expiredDate);
};

// Form Value를 FireStore에 저장하는 함수
export const FormSubmitService = async (formValue: FormValueType) => {
  try {
    const expiredAt = getExpiredDate();

    const docRef = await addDoc(collection(db, "submited_form"), {
      createdAt: serverTimestamp(),
      expiredAt: expiredAt,
      name: formValue.name,
      messanger: formValue.messanger,
      phoneNumber: formValue.phoneNumber,
      purposeDetail: formValue.purposeDetail,
      grade: formValue.grade,
      status: "pending",
    });

    console.log(docRef.id + "가 등록되었습니다.");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
