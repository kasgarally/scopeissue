<template>
  <div>
    <p>I should have yellow background with red text. I was set in a css inside a component.</p>

    <p class="style2">Red text, yellow background</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .style2 {
    background-color: yellow;
    color: red;
    padding: 1rem;
  }
</style>