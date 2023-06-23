<script lang="ts">
  import { goto } from "$app/navigation";
  import { pb, user } from "../../../pocketbase";

  $: if ($user) {
    goto("/");
  }

  let email = "";
  let password = "";
  let error = "";

  async function login() {
    try {
      await pb.collection("users").authWithPassword(email, password);
      error = "";
    } catch (_) {
      error = "Invalid credentials";
    }
  }
</script>

<svelte:head>
  <title>Sign In - Hacker News</title>
</svelte:head>

<div class="p-10 shadow-xl rounded-xl">
  <h1 class="py-2 text-5xl xl:text-6xl text-orange-600">Sign In</h1>

  <form class="py-4 flex flex-col" on:submit|preventDefault={login}>
    {#if error}
      <p class="py-2 text-red-700 text-xl">
        <span class="inline-flex align-middle material-icons">error</span>
        {error}
      </p>
    {/if}

    <label for="email" class="py-2">Email address</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      bind:value={email}
      class="outline-none border-2 p-3 rounded-md focus:border-orange-500"
    />

    <label for="password" class="py-2 mt-2">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      required
      bind:value={password}
      class="outline-none border-2 p-3 rounded-md focus:border-orange-500"
    />

    <input
      type="submit"
      value="Sign in"
      class="my-4 py-2 px-4 bg-orange-500 text-white rounded-md cursor-pointer"
    />
  </form>
</div>
