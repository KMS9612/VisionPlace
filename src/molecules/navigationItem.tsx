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
      innerText: "Main",
    },
    {
      href: "why",
      innerText: "About",
    },
    {
      href: "process",
      innerText: "Process",
    },
    {
      href: "performance",
      innerText: "Performance",
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
        className={`hidden sm:flex justify-center items-center gap-2 sm:gap-4 duration-300 text-xs md:text-base ${
          props.isScrolled ? "" : "text-gray-100"
        }`}
      >
        {NAVI_ITEM.map((el) => (
          <li key={el.href}>
            <span
              className="cursor-pointer"
              onClick={() => scrollToSection(el.href)}
            >
              {el.innerText}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
