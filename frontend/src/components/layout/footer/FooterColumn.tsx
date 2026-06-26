import Link from "next/link";

interface FooterColumnProps {
  title: string;

  links: {
    title: string;
    href: string;
  }[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="
                text-gray-400
                transition
                duration-300
                hover:text-rose-400
              "
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}