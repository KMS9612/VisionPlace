import Link from "next/link";

export default function Navigation() {
  const NAVI_ITEM = [
    {
      href: "#home",
      innerText: "Home",
    },
    {
      href: "#about",
      innerText: "About",
    },
    {
      href: "#contack",
      innerText: "Contact",
    },
  ];
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4">
        {NAVI_ITEM.map((el) => (
          <li key={el.href}>
            <Link href={el.href}>{el.innerText}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
