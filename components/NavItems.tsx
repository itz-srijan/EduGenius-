import Link from "next/link";

type NavItemsProps = {
  label: string;
  href: string;
  classname?: string;
};

const NavItems = ({ label, href, classname }: NavItemsProps) => {
  return <Link className={classname} href={href}>{label}</Link>;
};

export default NavItems;
