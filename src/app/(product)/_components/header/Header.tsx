"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Header() {

  const {isLoaded,isSignedIn} = useUser()


  return (
    <div className="flex items-center justify-between font-medium ">
      <div>Projectly</div>
      <ul className="flex items-center gap-4">
      <li>
          {!isLoaded ? (
            <Spinner/> 
          ) : isSignedIn ? (
           <div className=" flex items-center">
             <UserButton />  
           </div>
          ) : (
            <SignInButton mode="modal" />  
          )}
        </li>
        <li>
          <Button  className="text-xs" size={"sm"} variant={"custom_btn"}>
            Get Projectly free
          </Button>{" "}
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
