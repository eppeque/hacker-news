<script lang="ts">
  import { get, type Writable } from "svelte/store";
  import { pb, user } from "../pocketbase";

  let showLinks = false;
  export let darkTheme: Writable<boolean>;

  function toggleLinks() {
    showLinks = !showLinks;
  }

  function signOut() {
    pb.authStore.clear();
    toggleLinks();
  }
</script>

<nav class="py-10 xl:flex xl:justify-between xl:items-center">
  <div class="flex justify-between items-center xl:block">
    <h2 class="text-xl xl:text-xl">Hacker News</h2>

    <button class="material-icons xl:hidden" on:click={toggleLinks}>menu</button
    >
  </div>

  <div
    class="fixed inset-0 backdrop-blur-sm xl:hidden"
    class:hidden={!showLinks}
  />

  <ul
    class={`xl:static xl:flex xl:items-center xl:gap-10 xl:shadow-none xl:bg-transparent xl:rounded-none xl:max-w-fit xl:p-0 ${
      showLinks
        ? "fixed top-4 right-4 p-5 shadow-2xl rounded-md bg-white dark:bg-slate-900 w-full max-w-xs"
        : "hidden"
    }`}
  >
    <li class="text-right">
      <button
        class="fixed top-10 right-10 material-icons xl:hidden"
        on:click={toggleLinks}>close</button
      >
    </li>
    <li class="py-2 xl:py-0">
      <a
        href="/"
        class="hover:text-orange-600 hover:underline"
        on:click={toggleLinks}>Top Stories</a
      >
    </li>
    <li class="py-2 xl:py-0">
      <a
        href="/?type=new"
        class="hover:text-orange-600 hover:underline"
        on:click={toggleLinks}>New Stories</a
      >
    </li>
    <li class="py-2 xl:py-0">
      <button
        class="text-gray-600 dark:text-white material-icons"
        on:click={() => darkTheme.set(!get(darkTheme))}
        >{$darkTheme ? "light_mode" : "dark_mode"}</button
      >
    </li>
    {#if $user}
      <li class="py-2 xl:py-0">
        <a
          href="/stars"
          class="hover:text-orange-600 hover:underline"
          on:click={toggleLinks}>Your Stars</a
        >
      </li>
      <li class="py-2 mt-1 xl:py-0 xl:mt-0">
        <button
          class="py-2 px-4 bg-orange-500 text-white rounded-md"
          on:click={signOut}>Sign out</button
        >
      </li>
    {:else}
      <li class="py-2 mt-2 xl:mt-0 xl:py-0 xl:ml-6">
        <a
          href="/auth/sign-in"
          class="hover:text-orange-600 hover:underline"
          on:click={toggleLinks}>Sign In</a
        >
      </li>
      <li class="py-2 xl:py-0">
        <a
          href="/auth/sign-up"
          class="py-2 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-md"
          on:click={toggleLinks}>Sign Up</a
        >
      </li>
    {/if}
  </ul>
</nav>
