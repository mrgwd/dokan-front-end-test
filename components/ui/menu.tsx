import Link from "next/link";
import NavItems, { NavItem } from "../layout/nav/items";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";

interface Props {
  isMenuOpen: boolean;
  items: NavItem[];
}
export default function Menu({ isMenuOpen, items }: Props) {
  return (
    <div
      className={cn(
        "absolute left-0 z-10 w-full bg-white shadow-md transition-all duration-300 ease-in-out md:hidden",
        isMenuOpen ? "top-full opacity-100" : "-top-[400px] opacity-0",
      )}
    >
      <div className="layout py-4">
        <NavItems className="flex flex-col space-y-4 pb-4" items={items} />
        <Link href="/dashboard">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-primary border-secondary w-full cursor-pointer rounded-full px-10 py-5 font-normal shadow-none hover:border-transparent hover:text-white"
          >
            Dashboard
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
