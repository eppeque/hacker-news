import PocketBase, { Record } from "pocketbase";
import { writable } from "svelte/store";
import type { StarType } from "./types/StarType";

export const pb = new PocketBase("http://127.0.0.1:8090");

export const user = writable(pb.authStore.model);
export const stars = writable<StarType[] | null>(null);

pb.authStore.onChange(async (_, model) => {
  user.set(model);
});

user.subscribe(async (data) => {
  if (data !== null) {
    const resultList = await pb.collection("stars").getList<StarType>(1, 50, {
      filter: `user = "${data.id}"`,
    });
    stars.set(resultList.items);
  } else {
    stars.set(null);
  }
});
