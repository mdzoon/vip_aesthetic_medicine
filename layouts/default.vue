<template>
  <div>
    <div class="header-wrapper">
      <TheHeader />
    </div>
    <div class="content-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
export default {
  components: {
      TheHeader
  }
}
</script>

<style>

</style>
