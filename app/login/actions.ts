"use server";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  redirect("/private");
}

export async function redirectPrivate() {
  redirect("/private");
}
