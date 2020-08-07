<template>
    <article class="treatment-wrapper">
        <img :src="require(`@/assets/images/${treatment.background}`)" class="custom-background" :alt="treatment.background | imageAlt" />
        <h3>{{treatment.name}}</h3>
        <div class="row">
            <div class="col-md-6 image-wrapper">
                <img :src="require(`@/assets/images/${treatment.image}`)" class="img-fluid" :alt="treatment.image | imageAlt" />
            </div>
            <div class="col-md-6 description-wrapper">
                <div class="short-description-container">                    
                    {{treatment.shortDescription}}
                </div>
                <div class="treatment-detail-container">
                    <i class="material-icons-outlined">
                        info
                    </i>                    
                    Learn more about
                </div>                
                <div class="treatment-detail-container">
                    <i class="material-icons-outlined">
                        assignment
                    </i>                    
                    Pretreatment Documents: {{treatment.pretreatmentDocuments}} 
                    <span><i>fill in now</i></span>
                </div>
                <div class="treatment-detail-container">
                    <i class="material-icons-outlined">
                        av_timer
                    </i>                    
                    Treatment Time: {{treatment.treatmentTime}}
                </div>
                <BookingButton />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <!-- <TreatmentAccordion :treatment="treatment" />  -->
                <BookingButton />
            </div>
            <div class="col-md-6">
                <!-- {{treatment.treatmentDetails.description}} -->
            </div>            
        </div>
    </article>
</template>

<script>
import TreatmentAccordion from '@/components/utilities/TreatmentAccordion.vue'
import BookingButton from '@/components/utilities/BookingButton.vue'

export default {
    components: {
        BookingButton,
        TreatmentAccordion
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
        .short-description-container {
            text-align: justify;
            margin-bottom: 1rem;
        }
        .treatment-detail-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: .75rem 1.25rem;
            font-family: $font-family-accent;
            font-size: 1rem;
            i {
                margin-right: 1rem;
            }
        }
        button {
            justify-content: flex-start;
        }
    }
}
</style>