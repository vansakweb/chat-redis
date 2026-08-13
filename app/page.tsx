import { SignIn, SignOut } from "@/components/sign-in";
import { TestDisplay } from "@/components/test-display";
import { TestForm } from "@/components/test-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendMessages } from "@/lib/action";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();
  console.log("session", session);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      {!session?.user ? <SignIn /> : <SignOut />}
      <div className="flex w-full max-w-3xl items-center justify-center gap-10 px-4 py-8">
        <TestForm userId="user-1" />
        <TestForm userId="user-2" />
      </div>
      <form action={sendMessages} className="flex flex-col gap-4">
        <Input
          className="sr-only"
          name="message"
          placeholder="Enter your message..."
          defaultValue={"Sent to all"}
        />
        <Button type="submit">Send Message to All Users</Button>
      </form>
      <div className="flex w-full max-w-3xl items-center justify-center gap-10 px-4 py-8">
        <TestDisplay userId="user-1" />
        <TestDisplay userId="user-2" />
      </div>
    </div>
  );
}
