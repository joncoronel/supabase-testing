import { cookies } from "next/headers";

export default function SuspenseCookies() {
  const allCookies = cookies().getAll();
  return (
    <p>
      Hello, this is the private page with cookies within a suspense boundary.
      The second type of error should have been triggered now.
    </p>
  );
}
