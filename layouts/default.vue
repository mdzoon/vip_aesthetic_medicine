<template>
  <div>
    
    <TheHeader />

    <nuxt />

    <TheFooter />

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
