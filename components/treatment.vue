<template>
    <article class="treatment-wrapper">
        <img :src="require(`@/assets/images/${treatment.background}`)" class="custom-background" :alt="treatment.background | imageAlt" />
        <h3>{{treatment.name}}</h3>
        <div class="row">
            <div class="col-md-6 image-column">
                <div class="image-wrapper">
                    <img :src="require(`@/assets/images/${treatment.image}`)" class="img-fluid" :alt="treatment.image | imageAlt" />
                </div>
            </div>
            <div class="col-md-6 description-column">
                <div class="short-description-container">                    
                    {{treatment.shortDescription}}
                </div>
                <div class="treatment-detail-container">
                    <div class="treatment-detail-header">
                        <i class="material-icons-outlined">info</i>                    
                        Learn more about
                    </div>
                </div>
                <div class="treatment-detail-container">                
                    <div class="treatment-detail-header">
                        <i class="material-icons-outlined">assignment</i>                    
                        Pretreatment Documents:
                    </div>
                    <div class="treatment-detail-body">
                        <ul>
                            <li v-for="(pretreatmentDocument, index) in treatment.pretreatmentDocuments" :key="index">
                                {{pretreatmentDocument}}
                                <a href="#"><i>fill in the form now</i></a>
                            </li>                            
                        </ul>                          
                    </div>
                </div>
                <div class="treatment-detail-container">              
                    <div class="treatment-detail-header">
                        <i class="material-icons-outlined">av_timer</i>                    
                        Treatment Time: {{treatment.treatmentTime}}
                    </div>
                </div>
                <BookingButton />
            </div>
        </div>
    </article>
</template>

<script>
// import TreatmentAccordion from '@/components/utilities/TreatmentAccordion.vue'
import BookingButton from '@/components/utilities/BookingButton.vue'

export default {
    components: {
        BookingButton,
        // TreatmentAccordion
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
    .image-column {
        display: flex;
        justify-content: center;
        align-items: center;
        .image-wrapper {
            padding: 1rem;
            border: 1px solid $colour-background-darker;
        }
    }
    .description-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .short-description-container {
            text-align: justify;
            margin-bottom: 1rem;
        }
        .treatment-detail-container {
            font-family: $font-family-accent;
            font-size: 1rem;
            i {
                margin-right: 1rem;
            }
            .treatment-detail-header {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                padding: .75rem 1.25rem;

            }
            .treatment-detail-body ul {
                margin-left: 4rem;
                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
        button {
            justify-content: flex-start;
        }
    }
}
</style>