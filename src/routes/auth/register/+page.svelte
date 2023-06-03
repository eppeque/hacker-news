<script>
  import { goto } from "$app/navigation";
  import { pb, user } from "../../../pocketbase";

  let email = "";
  let username = "";
  let password = "";
  let passwordConfirm = "";
  let error = "";

  async function login() {
    await pb.collection("users").authWithPassword(email, password);
  }

  async function register() {
    if (!email || !username || !password || !passwordConfirm) {
      error = "Please fill every field";
      return;
    }

    if (password !== passwordConfirm) {
      error = "The password is different than its confirmation";
      return;
    }

    try {
      const data = {
        email: email,
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      };
      await pb.collection("users").create(data);
      await login();
      goto("/");
    } catch (err) {
      console.error(err);
    }
  }
</script>

<h1 class="py-2 text-5xl text-orange-600">Register</h1>
<p>{$user?.email ?? ""}</p>
<form class="py-2 flex flex-col" on:submit|preventDefault={register}>
  <p class="text-red-700">{error}</p>
  <label for="email" class="py-2">Email address</label>
  <input
    type="email"
    name="email"
    id="email"
    autocomplete="off"
    placeholder="john.doe@example.com"
    bind:value={email}
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <label for="username" class="mt-2 py-2">Username</label>
  <input
    type="text"
    name="username"
    id="username"
    autocomplete="off"
    placeholder="SuperJohn"
    bind:value={username}
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <label for="password" class="mt-2 py-2">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    bind:value={password}
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <label for="passwordConfirm" class="mt-2 py-2">Confirm password</label>
  <input
    type="password"
    name="passwordConfirm"
    id="passwordConfirm"
    bind:value={passwordConfirm}
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <input
    type="submit"
    value="Create account"
    class="my-4 py-2 px-4 rounded-md bg-orange-500 text-white cursor-pointer"
  />
</form>
