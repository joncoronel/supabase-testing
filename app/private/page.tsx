import { cookies } from "next/headers";

export default function PrivatePage() {
  const allCookies = cookies().getAll();

  return (
    <p>
      Hello, this is the private page. The error should have been triggered now.
    </p>
  );
}
