<script lang="ts">
  import type { Record } from "pocketbase";
  import type { StoryType } from "../types/StoryType";
  import Story from "./Story.svelte";
  import { pb, user } from "../pocketbase";

  export let stories: StoryType[];
  let stars: Record[] | null = null;

  user.subscribe(async (value) => {
    if (value) {
      stars = await getStars();
    } else {
      stars = null;
    }
  });

  async function getStars(): Promise<Record[]> {
    const resultList = await pb.collection("stars").getList(1, 50, {
      filter: `user = "${$user!.id}"`,
    });
    return resultList.items;
  }

  function isStarred(storyId: number) {
    return stars!.map((star) => star.storyId).includes(storyId);
  }

  async function updateStar(storyId: number) {
    if (isStarred(storyId)) {
      const starId = stars!.find((star) => star.storyId === storyId)!.id;
      await unstarStory(starId);
    } else {
      await starStory(storyId);
    }
  }

  async function unstarStory(starId: string) {
    await pb.collection("stars").delete(starId);
    stars!.forEach((star, i) => {
      if (star.id === starId) {
        stars!.splice(i, 1);
        stars = stars;
      }
    });
  }

  async function starStory(storyId: number) {
    const data = {
      storyId: storyId,
      user: $user!.id,
    };
    const newStar = await pb.collection("stars").create(data);
    stars!.push(newStar);
    stars = stars;
  }
</script>

<ul class="py-4 flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-5">
  {#each stories as story, i (story.id)}
    {#if stars === null}
      <Story {story} number={i + 1} isStarred={null} />
    {:else}
      <Story
        {story}
        number={i + 1}
        isStarred={stars.map((star) => star.storyId).includes(story.id)}
        on:click={async () => await updateStar(story.id)}
      />
    {/if}
  {/each}
</ul>
