<script lang="ts">
  import { onMount } from "svelte";
  import Story from "./Story.svelte";
  import type { StoryType } from "../StoryType";

  let stories: StoryType[] = [];

  async function fetchIds(): Promise<number[]> {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    );

    if (res.ok) {
      return await res.json();
    }

    return [];
  }

  async function fetchStory(id: number): Promise<StoryType> {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    if (res.ok) {
      return await res.json();
    }

    throw Error("Error fetching story");
  }

  onMount(async () => {
    let ids = await fetchIds();
    ids = ids.slice(0, 20);

    stories = await Promise.all(ids.map(async (id) => await fetchStory(id)));
  });
</script>

<svelte:head>
  <title>Hacker News</title>
</svelte:head>

<h1 class="py-2 text-5xl text-orange-600">Top Stories</h1>
<ul class="py-2">
  {#each stories as story, i (story.id)}
    <Story {story} number={i + 1} />
  {:else}
    {#each { length: 20 } as _}
      <li
        class="animate-pulse my-5 p-10 bg-slate-200 rounded-lg flex gap-5 items-center"
      />
    {/each}
  {/each}
</ul>
