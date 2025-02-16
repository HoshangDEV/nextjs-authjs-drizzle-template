import { auth, signIn, signOut } from "@/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Signin with GitHub
      </button>
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
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md">
          Signout
        </button>
      </form>
    );
  }
}
