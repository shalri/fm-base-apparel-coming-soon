export default function SandBox() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="bg-[url(/images/hero-mobile.jpg)] bg-no-repeat h-[100px] w-full" />
      <h1 className="text-3xl font-bold text-zinc-500">
        We&apos;re coming soon
      </h1>
      <p className="">
        Hello fellow shoppers! We&apos;re currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our launch deals.
      </p>

      <form action="">
        <input type="text" placeholder="Email Address" />
        <button className="bg-[url(/images/icon-arrow.svg)] bg-ba-desaturated-red bg-no-repeat size-10">hello</button>
      </form>
    </div>
  );
}
