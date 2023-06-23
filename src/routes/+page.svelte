<script lang="ts">
  import Story from "../components/Story.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.type === "new" ? "New" : "Top"} Stories - Hacker News</title>
</svelte:head>

<h1 class="py-2 text-5xl xl:text-6xl text-orange-600">
  {data.type == "new" ? "New" : "Top"} Stories
</h1>
<ul class="py-4 flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-5">
  {#each data.stories as story, i (story.id)}
    <Story {story} number={i + 1} />
  {/each}
</ul>
