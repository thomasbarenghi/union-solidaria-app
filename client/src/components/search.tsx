import Image from "next/image";

export default function Search() {
  return (
    <div className="flex items-center justify-center w-full px-6">
      <div className="flex px-5 py-4  gap-2 w-full bg-green-50 rounded-full">
        <Image
          src="/icon/sidebar/search.svg"
          alt="Vercel Logo"
          width={18}
          height={18}
        />
        <input
          className="w-full text-green-800 placeholder:text-green-800 h-full bg-transparent focus:outline-none"
          placeholder="Buscar iniciativas"
        />
      </div>
    </div>
  );
}
