export default function ComingSoonComponent() {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-[96px]">
      <div 
      role="img"
      aria-label="Hero Image"
      className="bg-[url(/images/hero-mobile.jpg)] bg-no-repeat h-[250px] w-full bg-cover" />
      <section className="px-8">
        <h1 className="mt-[64px] leading-[1.05] text-[40px] uppercase text-ba-dark-grayish-red tracking-[0.25em] font-bold">
          <span className="text-ba-desaturated-red font-normal">We&apos;re</span> coming soon
        </h1>
        <p className="text-ba-desaturated-red text-sm mt-4 leading-[1.5em]">
          Hello fellow shoppers! We&apos;re currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>

        <form action="" className="mt-9 border border-ba-desaturated-red/30 rounded-full flex items-center justify-between h-12 flex-nowrap">
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            required
            aria-required="true"
            aria-label="Email Address"
            className="placeholder:text-ba-desaturated-red/70 h-full placeholder:text-[14px] w-full bg-transparent pl-6 focus:outline-none text-ba-desaturated-red" />
          <button
            className="bg-gradient-to-br from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] bg-no-repeat rounded-full h-full w-20 flex items-center justify-center shadow-xl shadow-ba-desaturated-red/60"
            aria-label="Submit email"
          >
            <span className="sr-only">Submit email</span>
            <div className="bg-[url(/images/icon-arrow.svg)] bg-center bg-no-repeat h-6 w-6" />
          </button>
        </form>
      </section>
    </div>
  );
}
