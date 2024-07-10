"use client";

import { redirectPrivate } from "./actions";

export default function RedirectButton() {
  return (
    <button
      onClick={() => {
        redirectPrivate();
      }}
    >
      Redirect to private
    </button>
  );
}
