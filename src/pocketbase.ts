import { writable } from "svelte/store";
import PocketBase from "pocketbase";

export const pb = new PocketBase("http://127.0.0.1:8090");
export const user = writable(pb.authStore.model);

pb.authStore.onChange(() => user.set(pb.authStore.model));
