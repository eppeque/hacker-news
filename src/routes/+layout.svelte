<script>
  import Navbar from "../Navbar.svelte";
  import "../app.css";
</script>

<div
  class="px-10 md:px-20 lg:px-40 min-h-screen font-lexend bg-white relative overflow-x-hidden"
>
  <Navbar />
  <slot />
</div>
