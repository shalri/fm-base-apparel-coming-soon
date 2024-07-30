import Image from "next/image";

export default function Header() {
  return (
    <header className="px-8 py-8">
      <div className="">
        <Image src="/images/logo.svg" alt="Base App Logo" width={100} height={50} />
      </div>
    </header>
  );
}
