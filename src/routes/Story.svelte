<script>
  export let number;
  export let story;
</script>

<li class="my-5 p-10 bg-slate-100 rounded-lg flex gap-5 items-center">
  <span class="text-3xl text-orange-600">{number}. </span>
  <a href={story.url} class="transition hover:underline hover:text-orange-600"
    ><h2 class="text-xl md:text-2xl lg:text-3xl">{story.title}</h2></a
  >
</li>
