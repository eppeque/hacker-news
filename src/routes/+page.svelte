<script lang="ts">
  import Story from "../components/Story.svelte";
  import StoryList from "../components/StoryList.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.type === "new" ? "New" : "Top"} Stories - Hacker News</title>
</svelte:head>

<h1 class="py-2 text-5xl xl:text-6xl text-orange-600">
  {data.type == "new" ? "New" : "Top"} Stories
</h1>
<StoryList stories={data.stories} />
