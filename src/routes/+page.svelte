<script>
  import Story from "./Story.svelte";

  export let data;
</script>

<h1 class="py-2 text-5xl text-orange-600">Top Stories</h1>
{#await data.stories then stories}
  <ul class="py-2">
    {#each stories as story, i (story.id)}
      <Story {story} number={i + 1} />
    {/each}
  </ul>
{/await}
