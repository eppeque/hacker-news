<script>
  import { pb, user } from "../pocketbase";

  let showLinks = false;

  function toggleLinks() {
    showLinks = !showLinks;
  }

  function signOut() {
    pb.authStore.clear();
  }
</script>

<nav class="py-10 lg:flex lg:justify-between lg:items-center">
  <div class="flex justify-between">
    <h2 class="text-lg lg:text-xl">Hacker News</h2>

    <button class="lg:hidden material-icons" on:click={toggleLinks}>menu</button
    >
  </div>

  <ul
    class={`lg:flex lg:flex-row lg:items-center lg:gap-10 ${
      showLinks ? "py-4 flex flex-col gap-3" : "hidden"
    }`}
  >
    <li>
      <a href="/" class="hover:text-orange-600 hover:underline">Top Stories</a>
    </li>
    <li>
      <a href="/?type=new" class="hover:text-orange-600 hover:underline"
        >New Stories</a
      >
    </li>
    {#if $user}
      <button
        class="py-2 px-4 bg-orange-500 text-white rounded-md"
        on:click={signOut}>Sign out</button
      >
    {:else}
      <div class="lg:w-1" />
      <li>
        <a href="/auth/sign-in" class="hover:text-orange-600 hover:underline"
          >Sign In</a
        >
      </li>
      <li class="my-2 lg:my-0">
        <a
          href="/auth/sign-up"
          class="py-2 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-md text-white hover:from-orange-600 hover:to-yellow-600"
          >Sign Up</a
        >
      </li>
    {/if}
  </ul>
</nav>
