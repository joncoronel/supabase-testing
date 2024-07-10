"use client";

// import { redirectPrivate } from "../actions";
import { useRouter } from "next/navigation";

export default function RedirectButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/private");
      }}
    >
      Redirect to private
    </button>
  );
}
