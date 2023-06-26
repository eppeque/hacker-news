<script>
  import { writable } from "svelte/store";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";

  let darkTheme = writable(false);
</script>

<div class:dark={$darkTheme}>
  <div
    class="px-5 md:px-20 xl:px-40 bg-white min-h-screen font-lexend dark:bg-slate-900 dark:text-white"
  >
    <Navbar {darkTheme} />
    <slot />
    <Footer />
  </div>
</div>
