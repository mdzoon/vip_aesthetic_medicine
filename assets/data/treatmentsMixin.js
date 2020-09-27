export default {
    data () {
        return {
            treatments: [
                {   
                    id: 'df',
                    name: 'Dermal fillers - Face',
                    shortDescription: 'Restore the youthful look of your face and hands. Add the lost volume to your lips, eliminate wrinkles, and smooth deep-set lines around your mouth, eyes, nose and forehead.',
                    image: 'dermal-filler-sample.jpg',
                    background: 'custom-background-1.svg',
                    pretreatmentDocuments: [
                        'Health Assessment',
                    ],
                    treatmentTime: '1h',
                    treatmentDetails:
                    {
                        description: 'Hyaluronic Acid based dermal filler has become the most commonly used type of filler. Hyaluronic acid is a naturally occurring molecule that is found in our skin and other body tissues but its quantity decreases with age. It is a moisture-binding ingredient that keeps our skin hydrated and youthful. HA filler is a sterile gel like substance injected beneath the surface of the skin, to fill lines and wrinkles and to add fullness to areas which lost volume due to ageing.',
                        treatment_benefits: 'HA fillers are popular and versatile anti-ageing injectable treatment that plumps, volumizes and lifts the skin leaving it smooth, contoured and youthful.',
                        areas_treated: 'Lips, nasolabial fold (smile lines), marionette lines, cheek, jawline, chin, smoker’s lines around lips, tear through & mid-face area, nose.',
                        products_used: 'Temporary soft tissue dermal fillers such as Juvaderm, Restylane, Revolax and other Hyaluronic Acid based fillers depending on the area. Skin disinfection - ????',
                        procedure: [
                            'Full medical and facial assessment.',
                            'Pre-photos and/or videos taken of the treatment area.',
                            'Skin disinfected and treatment area marked with a marking pencil.',
                            'Disposable sterile needles and/or blunt cannula used to inject into the area and gently massaged.',
                            'Post- photos and/or videos taken of the treatment area.',
                            'Aftercare advice given.'
                        ],
                        contraindications: '',
                        before_treatment_advice: 'To help avoid bruising it is advisable not to take aspirin or anti-inflammatory medicines (unless being prescribed by a doctor) for one week prior to injection.',
                        after_treatment_advice: [
                            {
                                first_6_hours: [
                                    'Do not touch the area',
                                    'Do not apply make up',
                                    'Do not massage the area'
                                ]
                            },
                            {
                                first_2_days: [
                                    'Do not rub or massage the treated area and gently pat skin dry with a soft towel after washing.',
                                    'Do not sleep directly onto the treated area'
                                ]
                            },
                            {
                                first_2_weeks: [
                                    'Avoid strong sunlight, sunbeds, any other exposure to UV, saunas or steam rooms.',
                                    'Avoid extreme cold; this includes ice packs that are directly applied to the skin.',
                                    'If you experience any lumpiness in the treated area it can be gently massaged to help smooth this out.',
                                    'Avoid any facial massages or skin resurfacing until the area has healed fully. It takes about 2 weeks for hyaluronic acid based dermal fillers to integrate fully within the skin.'
                                ]
                            }
                        ],
                        side_effects: 'Most side effects are associated with the injection (redness, stinging sensation, sensitivity to touch, swelling, rarely bruising) and will be very short lived and temporary.',
                        recommended_frequency: 'How long they last depend on the type of filler, facial area and individual metabolism. A top up treatment to maintain results is usually required between 4 to 9 months.',
                        price: 'Starting from £130 per 1ml depending on the brand and type of a filler.'
                    }
                },
                {   
                    id: 'nla',
                    name: 'Non-surgical lip augmentation (dermal fillers)',
                    shortDescription: '',
                    image: 'anti-wrinkle-treatment.jpg',
                    background: 'custom-background-2.svg',
                    treatmentDetails: 
                    {
                        description: '',
                        treatment_benefits: '',
                        areas_treated: 'Top and bottom lip.',
                        products_used: 'Temporary soft tissue dermal fillers such as Juvaderm, Restylane, Revolax and other Hyaluronic Acid based fillers depending on the area. Skin disinfectant immediately prior and during the treatment.',
                        procedure: [
                            'Full medical and facial assessment.',
                            'Pre-photos and/or videos taken of the treatment area.',
                            'Skin disinfected and treatment area marked with a marking pencil.',
                            'Disposable sterile needles and/or blunt cannula used to inject into the area and gently massaged.',
                            'Post- photos and/or videos taken of the treatment area.',
                            'Aftercare advice given.'
                        ],
                        contraindications: '',
                        before_treatment_advice: 'To help avoid bruising it is advisable not to take aspirin or anti-inflammatory medicines (unless being prescribed by a doctor) for one week prior to injection. If you have had cold sores in the past, any facial injections may become a trigger and you may get them again post treatment. Coles sores do not normally affect the treatment results if you get them post treatment even if they appear directly on the treatment area.',
                        after_treatment_advice: [
                            {
                                first_6_hours: [
                                    'Do not touch the area',
                                    'Do not apply make up',
                                    'Do not massage the area',
                                    'Do not drink hot liquids as the temperature of the mug may cause increased breakdown of the filler in your lips. For this reason do not smoke too as dermal fillers are heat-sensitive post injection.',
                                    'Do not drink anything that is very cold too unless your sensation after numbing cream has returned to normal.',
                                    'Be careful while the sensation after numbing cream has not returned to normal so that you do not bite your lip when you eat.'
                                ]
                            },
                            {
                                first_2_days: [
                                    'Do not rub or massage the treated area and gently pat skin dry with a soft towel after washing'
                                ]
                            },
                            {
                                first_2_weeks: [
                                    'Avoid strong sunlight, sunbeds, any other exposure to UV, saunas or steam rooms.',
                                    'Avoid extreme cold; this includes ice packs that are directly applied to the skin',
                                    'If you experience any lumpiness in the treated area it can be gently massaged to help smooth this out',
                                    'Avoid any facial massages or skin resurfacing until the area has healed fully. It takes about 2 weeks for hyaluronic acid based dermal fillers to integrate fully within the skin.'
                                ]
                            }
                        ],
                        side_effects: 'Most side effects are associated with the injection (redness, stinging sensation, sensitivity to touch, swelling, rarely bruising) and will be very short lived and temporary.',
                        recommended_frequency: 'Depending on the facial area a top up treatment to maintain results is usually required between 4 to 9 months.',
                        price: 'Starting from £130 per 1ml depending on the brand, type of a filler and amount used.'
                    }
                }
            ]
        }

    }
}