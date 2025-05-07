import Logo from "@/components/ui/logo";
import envelope from "@/public/envelope.svg";
import phone from "@/public/phone.svg";
import location from "@/public/location.svg";
import Link from "next/link";
import Image from "next/image";
import TextWithIcon from "./text-with-icon";
import { getYear } from "@/utils/getYear";
interface ContactItem {
  title: string;
  href: string;
  icon: string;
  alt: string;
}
const contactItems: ContactItem[] = [
  { title: "dokan@test.sa", href: "/", icon: envelope, alt: "envelope" },
  { title: "+966 123456789", href: "/", icon: phone, alt: "phone" },
  { title: "Saudi Arabia, Jeddah", href: "/", icon: location, alt: "location" },
];
const year = getYear(new Date());
export default function Footer() {
  return (
    <footer className="bg-footer-background text-content-primary-foreground py-12">
      <div className="layout space-y-16">
        <div className="grid grid-cols-2 gap-4 space-y-16 md:grid-cols-3 xl:grid-cols-5">
          <div className="text-content-muted max-sm:col-span-2">
            <div className="space-y-2 text-sm">
              <Logo />
              <p className="">Dokan Front End Test</p>
            </div>
            <div className="mt-6 flex gap-4 *:hover:brightness-125">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={15}
                height={15}
              />
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={15}
                height={15}
              />
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={15}
                height={15}
              />
              <Image src="/x.svg" alt="x" width={15} height={15} />
            </div>
          </div>
          <ul className="footer-list">
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Integrations</li>
            <li>FAQs</li>
          </ul>
          <ul className="footer-list">
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Terms & Policies</li>
          </ul>
          <div className="footer-list">
            <p>Our Contact</p>
            <ul>
              {contactItems.map((item, index) => (
                <TextWithIcon key={index}>
                  <>
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      className="text-secondary h-4 w-4"
                      width={16}
                      height={16}
                    />
                    <Link href={item.href}>{item.title}</Link>
                  </>
                </TextWithIcon>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground flex flex-wrap justify-between">
          <p>© {year} Dokan Inc. All rights reserved.</p>
          <div className="space-x-4">
            <Link className="hover:underline" href="/">
              Privacy policy
            </Link>
            <Link className="hover:underline" href="/">
              GDPR
            </Link>
            <Link className="hover:underline" href="/">
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
