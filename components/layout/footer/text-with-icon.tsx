import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function TextWithIcon({ children, className = "" }: Props) {
  return (
    <li
      className={cn(
        "text-muted-foreground flex items-center gap-2 transition-colors hover:text-white/80 hover:underline",
        className,
      )}
    >
      {children}
    </li>
  );
}
