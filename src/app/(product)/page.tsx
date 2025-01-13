"use client";
import { Spinner } from "@/components";
import { Button } from "@/components/ui";
import { SignInButton, useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  return (
    <div
      suppressHydrationWarning
      className="flex flex-col gap-4 items-center justify-center sm:max-w-2xl max-w-lg m-auto text-center  sm:pt-8"
    >
      <h1 className="font-bold sm:text-6xl text-4xl">
        The happier workspace for developers
      </h1>
      <h3 className="sm:text-lg text-sm font-normal mt-2">
        Write. Plan. Collaborate. Boost your productivity with AI-powered tools
        that help you create, organize, and execute effortlessly. Experience a
        smarter way to work and achieve more every day.
      </h3>
      <Button suppressHydrationWarning className="min-w-[100px] flex ">
        {!isLoaded ? (
          <Spinner />
        ) : isSignedIn ? (
          <Link href={"/home"}>Start Projectly </Link>
        ) : (
          <SignInButton mode="modal">Get Projectly free </SignInButton>
        )}
        <ArrowRight />
      </Button>
      <Image
        className="dark:hidden object-contain "
        alt="engineer"
        height={450}
        width={450}
        src={"/engineer.svg"}
      />
      <Image
        className="dark:block hidden  object-contain"
        alt="engineer"
        height={450}
        width={450}
        src={"/engineer-dark.svg"}
      />
    </div>
  );
}
