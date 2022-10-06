<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{ name: 'Home' }"
        >My Todo</RouterLink
      >
      <RouterLink class="nav-link" :to="{ name: 'Todos' }">Todos</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'Create' }"
        >TodoCreate</RouterLink
      >
      <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
      <RouterLink class="nav-link" :to="{ name: 'Profile' }"
        >Profile</RouterLink
      >
      <a
        class="nav-link"
        href="http://github.com/dkssudgktpd/todorest"
        target="_blank"
        >Github</a
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
