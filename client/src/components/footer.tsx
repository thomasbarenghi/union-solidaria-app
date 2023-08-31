import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-auto border-t bg-white py-14">
      <Image
        src="/icon/logo-dark.svg"
        alt="Vercel Logo"
        width={185}
        height={35}
      />
    </footer>
  );
}
