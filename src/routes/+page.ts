import type { StoryType } from "../types/StoryType.js";

export async function load({ fetch, url }) {
  const type = url.searchParams.get("type") || "top";
  const ids = (await fetchIds(fetch, type)).slice(0, 20);

  return {
    type: type,
    stories: await Promise.all(
      ids.map(async (id) => await fetchStory(id, fetch))
    ),
  };
}

async function fetchIds(
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>,
  type: string
): Promise<number[]> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/${
      type === "new" ? "newstories" : "topstories"
    }.json`
  );

  if (res.ok) {
    return await res.json();
  }

  return [];
}

async function fetchStory(
  id: number,
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>
): Promise<StoryType> {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  if (res.ok) {
    return await res.json();
  }

  throw new Error("Couldn't fetch story");
}
