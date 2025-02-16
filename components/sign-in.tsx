import { auth, signIn, signOut } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}>
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}

export async function Signout() {
  const session = await auth();
  if (session) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}>
        <button type="submit">Signout</button>
      </form>
    );
  }
}
