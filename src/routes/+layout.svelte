<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<div class="px-5 md:px-20 xl:px-40 bg-white min-h-screen font-lexend">
  <Navbar />
  <slot />
  <Footer />
</div>
