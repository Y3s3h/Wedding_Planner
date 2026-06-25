

interface CategoryCardProps {
  title: string;
  count: string;
  icon: React.ElementType;
}

export default function CategoryCard({
  title,
  count,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <button
      className="
      group
      flex
      flex-col
      items-center
      rounded-3xl
      bg-white
      p-8
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-2
      hover:bg-gradient-to-br
      hover:from-rose-500
      hover:to-pink-500
      hover:shadow-2xl
      "
    >
      <div
        className="
        mb-5
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-full
        bg-rose-100
        transition-all
        duration-300
        group-hover:bg-white/20
        "
      >
        <Icon
          size={38}
          className="
          text-rose-500
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-white
          "
        />
      </div>

      <h3
        className="
        text-xl
        font-semibold
        text-gray-900
        transition
        group-hover:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-2
        text-sm
        text-gray-500
        transition
        group-hover:text-white/90
        "
      >
        {count}
      </p>
    </button>
  );
}