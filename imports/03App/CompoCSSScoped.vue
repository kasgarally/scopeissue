<template>
  <div>
    <p>I should have green background with white text. I was set in a scoped css inside a component.</p>

    <p class="style3">White text, green background</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .style3 {
    background-color: green;
    color: white;
    padding: 1rem;
  }
</style>