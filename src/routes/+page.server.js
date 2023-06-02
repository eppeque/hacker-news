async function fetchIds() {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );

  if (res.ok) {
    return await res.json();
  }

  return [];
}

async function fetchStory(id) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );

  if (res.ok) {
    return await res.json();
  }
}

export async function load() {
  let ids = await fetchIds();
  ids = ids.slice(0, 20);

  return {
    stories: Promise.all(ids.map(async (id) => await fetchStory(id))),
  };
}
