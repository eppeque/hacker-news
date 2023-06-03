import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  if (!cookies.get("token")) {
    throw redirect(304, "/");
  }
}
