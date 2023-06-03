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

export function load() {
  return {
    streamed: {
      stories: new Promise((res, rej) => {
        fetchIds()
          .then((ids) =>
            Promise.all(ids.slice(0, 20).map((id) => fetchStory(id)))
          )
          .then((stories) => res(stories));
      }),
    },
  };
}
