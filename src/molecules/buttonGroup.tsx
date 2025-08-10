import { Button } from "@/components/ui/button";

const ButtonGroup = () => {
  type ButtonItemType = {
    variant:
      | "link"
      | "outline"
      | "default"
      | "destructive"
      | "secondary"
      | "ghost"
      | null
      | undefined;
    innerText: string;
  };
  const BUTTON_ITEM: ButtonItemType[] = [
    { variant: "default", innerText: "상담하기" },
    { variant: "outline", innerText: "포트폴리오" },
  ];
  const scrollToSection = (innerText: string) => {
    if (innerText === "상담하기") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div id="button-wrap" className="flex gap-2">
      {BUTTON_ITEM.map((el) => (
        <Button
          onClick={() => scrollToSection(el.innerText)}
          key={el.innerText}
          variant={el.variant}
        >
          {el.innerText}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
