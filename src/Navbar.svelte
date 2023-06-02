<script>
  let show = false;
</script>

<nav class="py-10 md:flex md:justify-between md:items-center">
  <div class="flex justify-between items-center">
    <h2 class="text-lg lg:text-xl">Hacker News</h2>

    <button class="md:hidden material-icons" on:click={() => (show = !show)}
      >menu</button
    >
  </div>

  <ul
    class={`transition duration-300 absolute md:static top-20 right-0 w-3/4 md:w-min p-5 md:p-0 flex flex-col md:flex-row gap-6 md:gap-10 shadow-xl md:shadow-none h-screen md:h-min backdrop-blur-lg md:backdrop-blur-none md:translate-x-0 ${
      show ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <li class="w-min transition hover:-translate-y-1 hover:text-orange-600">
      <a href="/">Home</a>
    </li>
    <li>
      <a
        href="/auth/login"
        class="transition py-2 px-4 border border-orange-400 rounded-full text-orange-600 hover:bg-orange-500 hover:border-transparent hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >Login</a
      >
    </li>
    <li>
      <a
        href="/auth/register"
        class="transition py-2 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:from-orange-600 hover:to-yellow-600"
        >Register</a
      >
    </li>
  </ul>
</nav>
