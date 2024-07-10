"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  // revalidatePath("/private", "layout");
  redirect("/private");
}
