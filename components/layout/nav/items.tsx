import { cn } from "@/lib/utils";
import Link from "next/link";

export interface NavItem {
  title: string;
  href: string;
}
interface Props {
  items: NavItem[];
  className?: string;
}
export default function NavItems({ items, className = "" }: Props) {
  return (
    <ul className={cn("flex gap-4", className)}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            className="hover:text-secondary transition-colors"
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
