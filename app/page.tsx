import { SignIn, Signout } from "@/components/sign-in";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p>Signed in as {session.user?.email}</p>
        <Signout />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
