<script>
  import { goto } from "$app/navigation";
  import { pb, user } from "../../../pocketbase";

  $: if ($user) {
    goto("/");
  }

  let email = "";
  let username = "";
  let password = "";
  let passwordConfirm = "";
  let error = "";

  $: if (
    password !== "" &&
    passwordConfirm !== "" &&
    password !== passwordConfirm
  ) {
    error = "The password is different than its confirmation";
  } else if (
    email !== "" &&
    username !== "" &&
    password !== "" &&
    passwordConfirm !== ""
  ) {
    error = "";
  } else {
    error = "";
  }

  async function submit() {
    if (error) {
      return;
    }

    if (
      email === "" ||
      username === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      error = "Please fill every field";
      return;
    }

    const data = {
      email: email,
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    await pb.collection("users").create(data);
    await login();
  }

  async function login() {
    await pb.collection("users").authWithPassword(email, password);
  }
</script>

<svelte:head>
  <title>Sign Up - Hacker News</title>
</svelte:head>

<h1 class="py-2 text-5xl xl:text-6xl text-orange-600">Sign Up</h1>

<form class="py-2 flex flex-col" on:submit|preventDefault={submit}>
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
    class="outline-none border-2 p-3 rounded-md focus:border-orange-500 dark:bg-slate-900"
  />

  <label for="username" class="py-2 mt-2">Username</label>
  <input
    type="text"
    name="username"
    id="username"
    required
    bind:value={username}
    class="outline-none border-2 p-3 rounded-md focus:border-orange-500 dark:bg-slate-900"
  />

  <label for="password" class="py-2 mt-2">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    required
    bind:value={password}
    class="outline-none border-2 p-3 rounded-md focus:border-orange-500 dark:bg-slate-900"
  />

  <label for="password-confirm" class="py-2">Confirm password</label>
  <input
    type="password"
    name="password-confirm"
    id="password-confirm"
    required
    bind:value={passwordConfirm}
    class="outline-none border-2 p-3 rounded-md focus:border-orange-500 dark:bg-slate-900"
  />

  <input
    type="submit"
    value="Create account"
    class="my-4 py-2 px-4 bg-orange-500 text-white rounded-md cursor-pointer"
  />
</form>
