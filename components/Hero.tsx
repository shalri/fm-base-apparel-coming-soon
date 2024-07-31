import SaturateImage from "./SaturateImage";

export default function Hero() {
  return (
    <SaturateImage
      className="sm:absolute sm:right-0 h-[250px] w-full bg-cover bg-top sm:bg-center bg-no-repeat bg-[url(/images/hero-mobile.jpg)] sm:bg-[url(/images/hero-desktop.jpg)] sm:min-h-dvh sm:max-w-[42dvw] sm:w-full"
      alt="Hero Image"
    />
  )
}
