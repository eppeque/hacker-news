<script>
  import { page } from "$app/stores";
</script>

<main
  class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
>
  <div class="text-center">
    <p class="text-base font-semibold text-orange-600">{$page.status}</p>
    <h1
      class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
    >
      {$page.error?.message}
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">
      Sorry, an error occured. Please try again...
    </p>
    <div class="mt-10">
      <a
        href="/"
        class="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >Go back home</a
      >
    </div>
  </div>
</main>
