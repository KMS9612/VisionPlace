import { create } from "zustand";

// 스토어가 가질 상태와 액션의 타입 정의.
interface FormButtonState {
  isButtonDisable: boolean;
  setIsButtonDisable: (checked: boolean) => void;
}

/**
 * create 함수를 사용하여 스토어를 생성합니다.
 * set 함수를 통해 상태를 업데이트할 수 있습니다.
 */
export const useFormButtonStore = create<FormButtonState>((set) => ({
  // 초기 상태
  isButtonDisable: true,
  // 상태를 변경하는 액션
  setIsButtonDisable: (checked) => set({ isButtonDisable: checked }),
}));
