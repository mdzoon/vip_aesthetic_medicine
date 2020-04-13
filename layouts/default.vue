<template>
  <div>
    <div class="container-fluid bg-light header-wrapper">
      <TheHeader />
    </div>
    <div class="content-wrapper">
      <nuxt />
    </div>
    <div class="container-fluid bg-light footer-wrapper">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'

export default {
  components: {
      TheHeader,
      TheFooter
  }
}
</script>

<style lang="scss">
.logo-icon {
  height: $icon-height;
}

</style>
