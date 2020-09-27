<template>
    <div :id="'treatment-accordion-' + treatment.id">

        <TreatmentCard :listName="treatmentLists[0]" :id="treatment.id">
            <template v-slot:header>
                Areas Treated
            </template>
            <template v-slot:body>
                <li v-for="(area, index) in treatment.areas" :key="index">  
                    {{area}}
                </li>
            </template>
        </TreatmentCard>

        <TreatmentCard :listName="treatmentLists[1]" :id="treatment.id">
            <template v-slot:header>
                Contraindications
            </template>
            <template v-slot:body>
                <li v-for="(contraindication, index) in treatment.contraindications" :key="index">
                    {{contraindication}}
                </li>
            </template>
        </TreatmentCard>

        <TreatmentCard :listName="treatmentLists[2]" :id="treatment.id">
            <template v-slot:header>
                Before injection advice
            </template>
            <template v-slot:body>
                <li v-for="(beforeAdvice, index) in treatment.beforeAdvices" :key="index">
                    {{beforeAdvice}}
                </li>
            </template>            
        </TreatmentCard>


        <TreatmentCard :listName="treatmentLists[3]" :id="treatment.id">
            <template v-slot:header>
                After care advice
            </template>
            <template v-slot:body>
                <li v-for="(afterAdvice, index) in treatment.afterAdvices" :key="index">
                    {{afterAdvice}}
                </li>
            </template>                        
        </TreatmentCard>


        <TreatmentCard :listName="treatmentLists[4]" :id="treatment.id">
            <template v-slot:header>
                Side effects
            </template>
            <template v-slot:body>
                <li v-for="(sideEffect, index) in treatment.sideEffects" :key="index">
                    {{sideEffect}}
                </li>
            </template>                        
        </TreatmentCard>


        <TreatmentCard :listName="treatmentLists[5]" :id="treatment.id">
            <template v-slot:header>
                What does the procedure involve?
            </template>
            <template v-slot:body>
                <li v-for="(procedureStep, index) in treatment.procedureSteps" :key="index">
                    {{procedureStep}}
                </li>
            </template>                        
        </TreatmentCard>                
    </div>
</template>

<script>
import TreatmentCard from '@/components/utilities/TreatmentCard.vue'

export default {
    components: {
        TreatmentCard
    },    
    props: {
        treatment: Object
    },
    data () {
        return {
            treatmentLists: [
                'treatment-areas-list-',
                'contraindications-list-',
                'before-list-',
                'after-list-',
                'side-effects-list-',
                'procedure-list-'
            ]
        }
    }
}
</script>
 
<style lang="scss">
.description-wrapper .card {
    border: none;
    border-radius: unset;
    background-color: transparent;
    .card-header {
        background-color: inherit;
        border: none;
        padding: 0;
        button {
            background-color: transparent;
        }
        button:before {
            font-family: 'Material Icons';  
            content: "\e15b";
        }
        button.collapsed:before {
            content: "\e145";
        }        
    }
}
</style>