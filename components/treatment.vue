<template>
    <div class="treatment-wrapper">
        <img :src="require(`@/assets/images/${treatment.background}`)" class="custom-background" :alt="treatment.background | imageAlt" />
        <h3>{{treatment.name}}</h3>
        <div class="row">
            <div class="col-md-6 image-wrapper">
                <img :src="require(`@/assets/images/${treatment.image}`)" class="img-fluid" :alt="treatment.image | imageAlt" />
            </div>
            <div class="col-md-6 description-wrapper">
                <div class="description-container">{{treatment.description}}</div>
                <treatmentAccordion :treatment="treatment" />
                <button class="btn btn-danger my-2 my-sm-0" type="submit">
                    <i class="material-icons md-24">event_available</i>
                    <div class="gutter"></div>
                    Book Your Consultation
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import treatmentAccordion from '@/components/segments/treatmentAccordion.vue'

export default {
    components: {
        treatmentAccordion
    },
    props: {
        treatment: Object
    },
    filters: {
        imageAlt(value) {
          return value.split('.').shift().replace(/-/g, ' ');
        }
    }
}
</script>

<style lang="scss" scoped>
.treatment-wrapper {
    padding: 2rem 0;
    position: relative;
    .custom-background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: -1;
    }
    h3 {
        font-family: 'ITC Avant Garde Std XLt';
        font-weight: $font-weight-light;
        font-style: normal;
        letter-spacing: 10px;
    }
    .description-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .description-container {
            font-size: smaller;
            text-align: justify;
        }
    }
}
</style>