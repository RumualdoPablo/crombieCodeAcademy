import Link from "next/link";

const Navbar = () => {
  const categoryArray = [
    { name: "women" },
    { name: "men" },
    { name: "kids" },
    { name: "outlet" },
  ];
  return (
    <div>
      <ul className="flex gap-10 justify-center font-bold text-white h-20 items-center font-[family-name:var(--din-black)] ">
        
        
        <Link className="hover:bg-white hover:text-black rounded-sm transition-all p-2" href="/">home</Link>

        <Link href="/login" className="hover:bg-white hover:text-black rounded-sm transition-all p-2">login</Link>

        {categoryArray.map((category) => (
          <Link className="hover:bg-white hover:text-black rounded-sm transition-all p-2" href={`/categorias/${category.name}`}>{category.name}</Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
