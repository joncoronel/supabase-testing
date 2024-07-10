import { cookies } from "next/headers";

export default async function PrivatePage() {
  const allCookies = cookies().getAll();

  return <p>Hello</p>;
}
