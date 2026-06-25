import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="mt-16 flex flex-col items-center">

      <Mouse
        className="text-gray-700 <motion.div
  animate={{
    y: [0, 12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
>"
        size={34}
      />

      <p className="mt-3 text-sm text-gray-700">
        Scroll to Explore
      </p>

    </div>
  );
}