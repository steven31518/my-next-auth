import SignInForm from "@/components/SignInForm";
import { Button } from "@/components/ui/button";
import SocialButtonGroup from "@/components/SocialButtonGroup";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center flex-col pt-6 ">
      <div className="bg-muted p-8 rounded">
        <SignInForm />
        <SocialButtonGroup />
      </div>
      <Link href={"/auth/forgotPassword"}>
        <Button variant={"link"}>Forget Your Password?</Button>
      </Link>
    </div>
  );
}
