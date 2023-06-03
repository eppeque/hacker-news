import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    let error = "";

    if (!email || !password) {
      error = "Missing email and/or password";
      return { success: false, message: error };
    }

    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/users/auth-with-password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: email,
          password: password,
        }),
      }
    );

    const json = await res.json();

    if (res.ok) {
      cookies.set("token", json.token, { path: "/", secure: false });
      throw redirect(303, "/");
    } else {
      if (!error) error = json.message;
      return { success: false, message: error };
    }
  },
};
