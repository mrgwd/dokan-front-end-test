"use client";
import { useState } from "react";
import Logo from "@/components/ui/logo";
import NavItems from "./items";
import { Button } from "@/components/ui/button";
import { ArrowRight, MenuIcon, X } from "lucide-react";
import Menu from "@/components/ui/menu";

const items = [
  { title: "About us", href: "/" },
  { title: "Team", href: "/" },
  { title: "Solutions", href: "/" },
  { title: "Blog", href: "/" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-solid border-b-neutral-200 bg-white px-2">
      <nav className="layout flex w-full items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <Logo />
          TEST
        </div>
        <NavItems className="hidden md:flex" items={items} />
        <Button
          size="lg"
          variant="outline"
          className="hover:bg-primary border-secondary group hidden cursor-pointer rounded-full px-10 py-5 font-normal shadow-none hover:border-transparent hover:text-white sm:flex"
        >
          Dashboard
          <ArrowRight />
        </Button>
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <MenuIcon />}
        </div>
      </nav>

      <Menu isMenuOpen={isMenuOpen} items={items} />
    </header>
  );
}
