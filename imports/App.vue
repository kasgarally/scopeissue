<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
// Setting default layout to default
const default_layout = 'default';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  }
}
</script>