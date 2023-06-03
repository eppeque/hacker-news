<script>
  import { getContext } from "svelte";

  const user = getContext("user");
  let show = false;

  function toggleNav() {
    show = !show;
  }
</script>

<nav class="py-10 md:flex md:justify-between md:items-center">
  <div class="flex justify-between items-center">
    <h2 class="text-lg lg:text-xl">Hacker News</h2>

    <button class="md:hidden material-icons" on:click={toggleNav}>menu</button>
  </div>

  <ul
    class={`transition duration-300 absolute md:static top-20 right-0 w-3/4 md:w-auto p-5 md:p-0 flex flex-col md:flex-row gap-6 md:gap-10 drop-shadow-xl md:shadow-none h-screen md:h-min bg-white md:bg-transparent md:translate-x-0 ${
      show ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <li>
      <a
        href="/"
        on:click={toggleNav}
        class="hover:text-orange-600 hover:underline">Home</a
      >
    </li>
    {#if !user}
      <li>
        <a
          href="/auth/login"
          on:click={toggleNav}
          class="hover:text-orange-600 hover:underline">Login</a
        >
      </li>
      <li>
        <a
          href="/auth/register"
          on:click={toggleNav}
          class="transition py-2 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:from-orange-600 hover:to-yellow-600"
          >Register</a
        >
      </li>
    {:else}
      <li>
        <a href="/stars" class="hover:text-orange-600 hover:underline"
          >My stars</a
        >
      </li>
    {/if}
  </ul>
</nav>
