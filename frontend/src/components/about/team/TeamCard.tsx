import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function TeamCard({
  name,
  role,
  image,
  bio,
}: TeamCardProps) {
  const socialIcons = [FaLinkedinIn, FaInstagram, FaXTwitter];

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200
        bg-white
        p-8
        text-center
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-rose-300
        hover:shadow-2xl
      "
    >
      {/* Profile Image */}
      <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
           width={144}
    height={144}
          
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Role */}
      <p className="mt-2 font-medium text-rose-500">
        {role}
      </p>

      {/* Bio */}
      <p className="mt-5 leading-8 text-gray-600">
        {bio}
      </p>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-4">
        {socialIcons.map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-rose-50
              text-rose-500
              transition-all
              duration-300
              hover:bg-rose-500
              hover:text-white
              hover:scale-110
            "
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}