<template>
  <div>
    
    <TheHeader />

    <ScrollTo />

    <nuxt />

    <TheFooter />

  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
import ScrollTo from '@/components/utilities/ScrollTo.vue'
import TheFooter from '@/components/navigation/TheFooter.vue'

export default {
  components: {
      TheHeader,
      ScrollTo,
      TheFooter
  }
}
</script>

<style lang="scss">
body {
    font-family: $font-family-main;
    font-weight: $font-weight-main;
    font-style: normal;
    color: $font-colour;
    background-color: $colour-background;
}

h1 {
    font-family: $font-family-accent;
    font-weight: bold;
    margin-bottom: 3rem;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $font-colour-primary-faint;
    overflow-wrap: break-word;
}

a {
    color: $colour-primary;
    transition: $transition;
    &:hover, &:active, &:focus {
        text-decoration: none;
    }
}

*:focus {
    outline: none;
}

.gutter {
    @include gutter-size;
}

.btn {
    border-radius: unset;
    padding: .75rem 1.25rem;
    @include flex-elm;
    font-family: $font-family-accent;
}
.btn-danger {
    font-size: 20px;
}

.header-wrapper {
    background-color: $colour-background;
    border-bottom: 1px solid $colour-background-darker;
    a {
        color: $font-colour;
        &:hover, &:active, &:focus {
            color: $colour-primary;
        }
    }
    #navbar-menu li {
        display: flex;
        justify-content: unset;
        align-items: center;
        min-height: 4rem;
    }
}

.content-wrapper {
    margin-top: 5rem;
    margin-bottom: 5rem;
    h1 {
        margin-bottom: 5rem;
        letter-spacing: 10px;
    }
    h3 {
        margin-top: 3rem;
        margin-bottom: 2rem;
    }
}

.footer-wrapper {
    background-color: $colour-background-contrast;
    color: $font-colour-contrast;
    padding-top: 5rem;
    padding-bottom: 3rem;
    a {
        color: $font-colour-contrast;
        &:hover, &:active, &:focus {
            color: $colour-primary;
        }
    }
    .contact-wrapper {
        margin-bottom: 5rem;
    }
    hr {
        border-color: $font-colour-contrast;
    }
    .copywright-wrapper {
        margin-top: 3rem;
        font-size: small;
    }
}

</style>
