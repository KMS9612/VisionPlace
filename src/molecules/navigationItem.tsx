import Link from "next/link";

type NavigationPropsType = {
  isScrolled: boolean;
};

export default function Navigation(props: NavigationPropsType) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const NAVI_ITEM = [
    {
      href: "hero",
      innerText: "Home",
    },
    {
      href: "about",
      innerText: "About",
    },
    {
      href: "grade",
      innerText: "Grade",
    },
    {
      href: "contact",
      innerText: "Contact",
    },
  ];
  return (
    <nav>
      <ul
        className={`flex justify-center items-center gap-4 duration-300 ${
          props.isScrolled ? "" : "text-gray-100"
        }`}
      >
        {NAVI_ITEM.map((el) => (
          <li key={el.href}>
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection(el.href)}
              href={el.href}
            >
              {el.innerText}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
