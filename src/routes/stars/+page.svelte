<script>
  import { getContext } from "svelte";

  const user = getContext("user");
</script>

<h1>My stars ({user.id})</h1>
