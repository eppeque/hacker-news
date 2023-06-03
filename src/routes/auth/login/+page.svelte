<script>
  import { goto } from "$app/navigation";
  import { pb } from "../../../pocketbase";

  let email = "";
  let password = "";
  let error = "";

  async function login() {
    try {
      await pb.collection("users").authWithPassword(email, password);
      goto("/");
    } catch (err) {
      console.error(err);
      error = "Failed to login, try again.";
    }
  }
</script>

<div class="p-10 shadow-xl rounded-lg">
  <h1 class="py-2 text-5xl text-orange-600">Login</h1>

  <form class="py-2 flex flex-col" on:submit|preventDefault={login}>
    <p class="text-red-700">{error}</p>
    <label for="email" class="py-2">Email address</label>
    <input
      type="email"
      name="email"
      id="email"
      autocomplete="off"
      bind:value={email}
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

    <input
      type="submit"
      value="Login"
      class="my-4 py-2 px-4 rounded-md bg-orange-500 text-white cursor-pointer"
    />
  </form>
</div>
