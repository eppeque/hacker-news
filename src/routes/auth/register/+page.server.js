import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    let error = "";

    if (!email || !password || !confirmPassword) {
      error = "Please fill all fields";
      return { success: false, message: error };
    }

    if (password !== confirmPassword) {
      error = "The password is different than its confirmation";
      return { success: false, message: error };
    }

    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/users/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          passwordConfirm: confirmPassword,
        }),
      }
    );

    const json = await res.json();

    if (res.ok) {
      cookies.set("token", await getUserToken(email, password), { path: "/" });
      throw redirect(303, "/");
    } else if (res.status === 400) {
      if (!error) error = json.message;
      return { success: false, message: error };
    }
  },
};

async function getUserToken(email, password) {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/users/auth-with-password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identity: email,
        password: password,
      }),
    }
  );

  if (res.ok) {
    const json = await res.json();
    return json.token;
  }
}
