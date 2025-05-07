import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}
export default function Spinner({ className = "" }: Props) {
  return (
    <div
      className={cn(
        "size-4 animate-spin rounded-full border-2 border-white border-b-transparent",
        className,
      )}
    ></div>
  );
}
