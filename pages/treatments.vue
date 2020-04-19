<template>
    <div class="container content-wrapper">
        <h1>Treatments</h1>
        <treatment v-for="treatment in treatments" :key="treatment.name" :treatment="treatment" />
    </div>
</template>

<script>
import treatmentsMixin from '@/assets/data/treatmentsMixin.js'
import treatment from '@/components/treatment.vue'

export default {
    components: {
        treatment
    },
    mixins: [treatmentsMixin]
}
</script>