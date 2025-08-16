import { FormValueType } from "@/src/type/components/cta/formField.type";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./fb";

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

export const FormSubmitService = async (formValue: FormValueType) => {
  try {
    const docRef = await addDoc(collection(db, "submited_form"), {
      name: formValue.name,
      messanger: formValue.messanger,
      purposeDetail: formValue.purposeDetail,
      grade: formValue.grade,
    });

    console.log(docRef.id + "가 등록되었습니다.");
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
