import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <div className="">
        <Image src="/images/logo.svg" alt="Base App Logo" width={150} height={50} />
      </div>
    </header>
  );
}
