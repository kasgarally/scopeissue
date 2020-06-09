<template>
  <div>
    <h1>Entrypoint</h1>
    
    <p>I should have a blue background with white text. I have been set in the scss files.</p>

    <p class="style1">White text, blue background</p>

    <compocss/>

    <compocssscoped/>
    
  </div>
</template>

<script>
import CompoCSS from './CompoCSS.vue';
import CompoCSSScoped from './CompoCSSScoped.vue';

export default {
  components: {
    'compocss': CompoCSS,
    'compocssscoped': CompoCSSScoped
  }
}
</script>