<template>
  <main>
    <nav>
      <inertia-link :href="$route('home')">Home</inertia-link>
      <inertia-link :href="$route('frontpage')">Front-Page</inertia-link>
    </nav>

    <article>
      <slot />
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>