import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAButton() {
  return (
    <Link href="/register">
      <Button className="group rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-6 text-white shadow-lg shadow-rose-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        Start Planning

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>
    </Link>
  );
}