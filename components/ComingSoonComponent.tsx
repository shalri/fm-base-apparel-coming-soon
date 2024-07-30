"use client";
import { useState } from 'react';
import SaturateImage from './SaturateImage';
import { cn } from '@/lib/utils';
import { AnimatePresence, m, motion } from 'framer-motion';

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
    <div className="flex flex-col items-center justify-center text-center pb-[96px]">
      <SaturateImage
        className="h-[250px] w-full bg-cover bg-center bg-no-repeat bg-[url(/images/hero-mobile.jpg)]"
        alt="Hero Image"
      />
      <section className="px-8">
        <h1 className="mt-[64px] leading-[1.05] text-[40px] uppercase text-ba-dark-grayish-red tracking-[0.25em] font-bold">
          <span className="text-ba-desaturated-red font-normal">We&apos;re</span> coming soon
        </h1>
        <p className="text-ba-desaturated-red text-sm mt-4 leading-[1.5em]">
          Hello fellow shoppers! We&apos;re currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>

        <form
          className={cn("mt-9 border border-ba-desaturated-red/30 rounded-full flex items-center justify-between h-12 flex-nowrap transition-color duration-300", hasError && "border-ba-soft-red")}
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
            // className={cn("placeholder:text-ba-desaturated-red/70 h-full placeholder:text-[14px] w-full bg-transparent pl-6 pr-12 focus:outline-none text-ba-desaturated-red focus:bg-transparent rounded-full mr-6", hasError ? "bg-[url(/images/icon-error.svg)] bg-no-repeat bg-right" : "")} />
            className={cn("placeholder:text-ba-desaturated-red/70 h-full placeholder:text-[14px] w-full bg-transparent pl-6 pr-12 focus:outline-none text-ba-desaturated-red focus:bg-transparent rounded-full mr-6", hasError ? "error-bg" : "")} />
          <button
            type="submit"
            className="bg-gradient-to-br from-[hsl(0,80%,86%)] to-[hsl(0,74%,74%)] bg-no-repeat rounded-full h-full w-20 flex items-center justify-center shadow-xl shadow-ba-desaturated-red/60"
            aria-label="Submit email"
          >
            <span className="sr-only">Submit email</span>
            <div className="bg-[url(/images/icon-arrow.svg)] bg-center bg-no-repeat h-6 w-6" />
          </button>
        </form>
        <AnimatePresence>
          {hasError && <motion.p
            key="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-ba-soft-red mt-2 text-left pl-6">Please enter a valid email</motion.p>}
        </AnimatePresence>
      </section>
    </div>
  );
}
