<script lang="ts">
  import type { StoryType } from "../types/StoryType";
  import Story from "./Story.svelte";

  export let stories: StoryType[];
</script>

<ul class="py-4 flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-5">
  {#each stories as story, i (story.id)}
    <Story {story} number={i + 1} />
  {:else}
    <p>No story yet...</p>
  {/each}
</ul>
