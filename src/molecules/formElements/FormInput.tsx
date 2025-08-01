import { Input } from "@/components/ui/input";
import { BaseInputUIPropsType } from "@/src/type/components/cta/formField.type";

export default function InputUI(props: BaseInputUIPropsType) {
  const { id, placeholder } = props;
  return <Input id={id} name={id} placeholder={placeholder} />;
}
