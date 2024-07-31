import Image from "next/image";

export default function Header() {
  return (
    <header className="relative px-8 py-8 sm:max-w-[1175px] sm:mx-auto sm:w-full sm:py-14 sm:col-start-1 sm:col-span-1 sm:row-start-1">
      <div className="w-[100px] h-[50px] relative sm:w-[160px] sm:h-[50px]">
        <Image src="/fm-base-apparel-coming-soon/images/logo.svg" alt="Base App Logo" fill className="object-contain" />
      </div>
    </header>
  );
}
