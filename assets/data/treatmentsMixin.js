export default {
    data () {
        return {
            treatments: [
                {   
                    id: 'df',
                    name: 'Dermal Filler',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed pellentesque nisl. Donec laoreet fringilla maximus. Donec felis nisl, consequat ut pharetra nec, accumsan sed lacus. Donec vehicula urna sit amet nisi dapibus, id placerat massa scelerisque. Donec sed sagittis metus. Vestibulum eget pharetra elit, vel iaculis arcu. Maecenas egestas sagittis suscipit. Pellentesque quam nibh, egestas ut congue in, facilisis et nisl. Suspendisse facilisis dolor eu lorem tristique, eu rhoncus enim congue. Fusce vel commodo eros. Etiam lacinia purus sed justo suscipit tincidunt. Aenean lacus nunc, tristique ac nulla et.',
                    image: 'dermal-filler-sample.jpg',
                    background: 'custom-background-1.svg'
                },
                {   
                    id: 'ai',
                    name: 'Antiwrinkle Injections',
                    description: 'Botulinum toxin type A products are prescription only medicines which work by temporarily blocking the release of a chemical substance called acetylcholine, which transmits information to the muscle causing it to contract and tighten. The role of the antiwrinkle product is to keep the muscle in a relaxed state by partially inactivating it so that the skin will not be tightened and pulled which causes the wrinkling. This will keep the skin looking smoother giving you the appearance of looking more refreshed and youthful. The procedure is quick, relatively pain free and little downtime. Top up is usually required between 3 and 5 months. However, over time and by having repeated treatments the muscle activity is weakened and the results can last a lot longer.',
                    areas: [
                        'Frown Lines between the eyebrows (glabella)',
                        'Lines around the eyes (crow’s feet)',
                        'Forehead lines (horizontal lines)',
                        'Bunny lines (side of the nose)',
                        'Treating the areas listed above will help prevent dynamic winkles caused by over activity of muscles.'
                    ],
                    contraindications: [
                        'Preganancy and breastfeeding',
                        'Under 18 years of age',
                        'Over 65 years of age',
                        'Allergy or hypersensitivity to botulinum toxin type A or any other ingredients in the product',
                        'Myasthenia gravis or Eaton Lambet Syndrome (chronic diseases affecting the muscles)',
                        'Infection at the proposed injection sites',
                        'History of dysphagia (difficulty swallowing) or impaired swallowing',
                        'Medications such as aminoglycoside antibiotics, spectinomycin or other medicines that interfere with neuromuscular transmission'
                    ],
                    beforeAdvices: [
                        'To help avoid bruising it is advisable not to take aspirin or anti-inflammatory medicines (unless being prescribed by a doctor) for one week prior to injection.'
                    ],
                    afterAdvices: [
                        'Immediate care - for at least 4 hours after treatment you must remain upright and do not bend excessively',
                        'Up to 12 hours you must avoid alcohol and wearing of make-up',
                        'For 2 days do not rub or massage the treated area and gently pat skin dry with a soft towel after washing',
                        'For 2 weeks after treatment avoid strong sunlight and saunas, do not have facials'
                    ],
                    sideEffects: [
                        'Most side effects are associated with the injection (redness, stinging sensation, rarely bruising) and will be very short lived maybe only hours. Some people may experience a mild headache for a few days following treatment yet this will be easily treatable.'
                    ],
                    procedureSteps: [
                        'Full medical and facial assessment and pre-photos taken',
                        'Skin disinfected and injection points marked with a marking pencil',
                        'Tiny disposable insulin needles used to inject into the targeted muscles'
                    ],
                    image: 'anti-wrinkle-treatment.jpg',
                    background: 'custom-background-2.svg'
                }
            ]
        }

    }
}