<script>
  export let form;
</script>

<h1 class="py-2 text-5xl text-orange-600">Register</h1>
<form class="py-2 flex flex-col" method="POST">
  <p class="text-red-700">{form?.message ?? ""}</p>
  <label for="email" class="py-2">Email address</label>
  <input
    type="email"
    name="email"
    id="email"
    autocomplete="off"
    placeholder="john.doe@example.com"
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <label for="password" class="mt-2 py-2">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <label for="confirmPassword" class="mt-2 py-2">Confirm password</label>
  <input
    type="password"
    name="confirmPassword"
    id="confirmPassword"
    required
    class="outline-none p-3 border-2 border-gray-300 rounded-md focus:border-orange-500"
  />

  <input
    type="submit"
    value="Create account"
    class="transition py-2 px-4 my-4 border-2 border-orange-200 rounded-full cursor-pointer text-orange-600 hover:bg-orange-500 hover:border-transparent hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
  />
</form>
