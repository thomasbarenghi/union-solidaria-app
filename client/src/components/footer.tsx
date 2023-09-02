import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full  bg-green-800 section-padding-1">
      <Image
        src="/icon/logo-light.svg"
        alt="Vercel Logo"
        width={185}
        height={35}
      />
    </footer>
  );
}
