"use client";
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function ComingSoonComponent() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked submit");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      console.log("Email submitted");
      setHasError(false);
    } else {
      console.log("Form is invalid");
      setHasError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center pb-[96px] sm:flex-row sm:justify-between sm:w-full sm:pb-0 sm:text-left sm:col-start-1 sm:row-start-2 sm:col-span-1 sm:backdrop-blur sm:rounded-xl">
      <section className="px-8 sm:pt-2">
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:w-[444px] sm:mx-auto">
          <h1 className="mt-[64px] leading-[1.05] text-[40px] uppercase text-ba-dark-grayish-red tracking-[0.25em] font-bold sm:text-[64px] sm:leading-[1.06] sm:tracking-[0.275em]">
            <span className="text-ba-desaturated-red font-normal block">We&apos;re</span> coming soon
          </h1>
          <p className="text-ba-desaturated-red text-sm mt-4 leading-[1.5em] sm:text-base sm:mt-6 sm:leading-[1.65em]">
            Hello fellow shoppers! We&apos;re currently building our new fashion store.
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>

          <form
            className={cn("sm:w-full mt-9 border border-ba-desaturated-red/30 rounded-full flex items-center justify-between h-12 sm:h-14 sm:mt-10 flex-nowrap transition-color duration-300", hasError && "border-ba-soft-red")}
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="text"
              autoComplete="off"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-label="Email Address"
              className={cn("placeholder:tracking-wider placeholder:text-ba-desaturated-red/70 h-full placeholder:text-[14px] w-full bg-transparent pl-6 pr-12 focus:outline-none text-ba-desaturated-red focus:bg-transparent rounded-full mr-6 sm:pl-8", hasError ? "error-bg" : "")} />
            <motion.button
              type="submit"
              className="rounded-full h-full w-20 flex items-center justify-center shadow-xl shadow-ba-desaturated-red/60 sm:w-36 hover:scale-[1.05] transition-all duration-300"
              aria-label="Submit email"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: {
                  backgroundImage: 'linear-gradient(to bottom right, hsl(0,80%,86%), hsl(0,74%,74%))',
                },
                hover: {
                  backgroundImage: 'linear-gradient(to bottom right, hsl(0,74%,74%), hsl(0,80%,86%))',
                  scale: 1.075,
                },
              }}
            >
              <span className="sr-only">Submit email</span>
              <div className="bg-[url(/fm-base-apparel-coming-soon/images/icon-arrow.svg)] bg-center bg-no-repeat size-6 " />
            </motion.button>
          </form>
          <AnimatePresence>
            {hasError && <motion.p
              key="error-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-ba-soft-red mt-2 text-left pl-6">Please enter a valid email</motion.p>}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
