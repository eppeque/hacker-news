export async function load({ cookies }) {
  const token = cookies.get("token");

  if (!token) {
    return { success: false };
  }

  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/users/auth-refresh",
    { method: "POST", headers: { Authorization: token } }
  );

  if (res.ok) {
    const json = await res.json();
    cookies.set("token", json.token, { path: "/", secure: false });
    return { success: true, user: json.record };
  }
}
