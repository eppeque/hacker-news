<script lang="ts">
  import { pb, stars, user } from "../pocketbase";
  import type { StarType } from "../types/StarType";
  import type { StoryType } from "../types/StoryType";

  export let story: StoryType;
  export let number: number;
  $: isStarred = $stars?.map((star) => star.storyId).includes(story.id);

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

  async function updateStar() {
    const newStars = $stars!;
    if (isStarred) {
      const id = newStars.find((star) => star.storyId === story.id)!.id;
      await pb.collection("stars").delete(id);
      newStars.forEach((star, index) => {
        if (star.id === id) {
          newStars.splice(index, 1);
          stars.set(newStars);
        }
      });
    } else {
      const data = {
        storyId: story.id,
        user: $user!.id,
      };
      const newStar = await pb.collection("stars").create<StarType>(data);
      newStars.push(newStar);
      stars.set(newStars);
    }
  }
</script>

<li class="p-5 md:p-10 bg-slate-100 rounded-xl dark:bg-slate-800">
  <div class="flex gap-5 items-center">
    <span class="text-3xl md:text-4xl text-orange-600">{number}.</span>
    <a href={story.url} class="hover:text-orange-600 hover:underline"
      ><h3 class="text-xl md:text-3xl">
        {story.title}
      </h3></a
    >
    {#if $stars !== null}
      <button
        class={`${isStarred ? "text-yellow-500" : ""} material-icons`}
        on:click={updateStar}>{isStarred ? "star" : "star_outline"}</button
      >
    {/if}
  </div>
  <h5 class="pt-4">
    By {story.by} - {story.score} point(s) | {time}
  </h5>
</li>
