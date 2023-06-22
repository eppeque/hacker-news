<script lang="ts">
  import type { StoryType } from "../types/StoryType";

  export let story: StoryType;
  export let number: number;
  export let isStarred: boolean | null;

  const date = new Date(story.time * 1000);
  const now = new Date(Date.now());
  const difference = Math.round((now.getTime() - date.getTime()) / 1000);
  let time = "";

  if (difference < 60) {
    time = `${difference} second(s) ago`;
  } else if (difference < 3600) {
    time = `${Math.round(difference / 60)} minute(s) ago`;
  } else if (difference < 86400) {
    time = `${Math.round(difference / 3600)} hour(s) ago`;
  } else {
    time = `${Math.round(difference / 86400)} day(s) ago`;
  }
</script>

<li class="p-5 md:p-10 bg-slate-100 rounded-xl">
  <div class="flex gap-5 items-center">
    <span class="text-3xl md:text-4xl text-orange-600">{number}.</span>
    <a href={story.url} class="hover:text-orange-600 hover:underline"
      ><h3 class="text-xl md:text-3xl">
        {story.title}
      </h3></a
    >
    {#if isStarred !== null}
      <button
        class={`${isStarred ? "text-yellow-500" : ""} material-icons`}
        on:click>{isStarred ? "star" : "star_outline"}</button
      >
    {/if}
  </div>
  <h5 class="pt-4">
    By {story.by} - {story.score} point(s) | {time}
  </h5>
</li>
