import Image from "next/image";

export default function Header() {
  return (
    <header className="relative px-8 py-8 sm:max-w-[1175px] mx-auto sm:w-full sm:py-14">
      <div className="w-[100px] h-[50px] relative sm:w-[160px] sm:h-[50px]">
        {/* <Image src="/images/logo.svg" alt="Base App Logo" width={100} height={50} /> */}
        <Image src="/images/logo.svg" alt="Base App Logo" fill className="object-contain" />
      </div>
    </header>
  );
}
