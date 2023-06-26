<script lang="ts">
  import type { StoryType } from "../../types/StoryType";
  import { stars } from "../../pocketbase";
  import { get } from "svelte/store";
  import StoryList from "../../components/StoryList.svelte";

  let stories: StoryType[] = [];

  async function fetchStory(id: number) {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );

    if (res.ok) {
      return await res.json();
    }

    throw new Error("Couldn't fetch story");
  }

  stars.subscribe(async (value) => {
    if (value === null) {
      stories = [];
    } else {
      stories = await Promise.all(
        get(stars)!.map(async (star) => await fetchStory(star.storyId))
      );
    }
  });
</script>

<svelte:head>
  <title>Your Stars - Hacker News</title>
</svelte:head>

<h1 class="py-2 text-5xl xl:text-6xl text-orange-600">Your Stars</h1>
<StoryList {stories} />
