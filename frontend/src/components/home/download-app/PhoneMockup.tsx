import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-rose-300/20 blur-[100px]" />

      {/* Phone */}
      <div className="relative overflow-hidden rounded-[40px] border-[10px] border-gray-900 bg-black shadow-[0_30px_80px_rgba(0,0,0,.25)]">
        <div className="absolute left-1/2 top-3 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />

        <Image
        //   src="/images/app-preview.jpg"
        src="/images/app-preview1.jpg"
          alt="Wedding Planner App"
          width={400}
          height={800}
          className="h-[560px] w-full object-cover"
        />
      </div>
    </div>
  );
}