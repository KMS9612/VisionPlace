import { Textarea } from "@/components/ui/textarea";
import { BaseInputUIPropsType } from "@/src/type/components/cta/formField.type";

export default function TextAreaUI(props: BaseInputUIPropsType) {
  const { id, placeholder } = props;
  return <Textarea id={id} name={id} placeholder={placeholder} />;
}
