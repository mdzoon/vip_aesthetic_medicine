<template>
    <CookieControl>
            <template v-slot:modal>
                <h3 class="modal-title">Set your preferences</h3>
            </template>
    </CookieControl>
</template>

<style lang="scss">
.cookieControl {
    .cookieControl__Bar {
        background-color: rgba(0, 0, 0, .7);
        -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
        @media only screen and (max-width: 767px) {
            border-radius: unset;
        }
        h3 {
            font-size: 1rem;
        }
        p {
            font-size: .75rem;
        }
    }
    .cookieControl__BarButtons,
    .cookieControl__ModalButtons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media only screen and (max-width: 400px) {
            flex-direction: column;
        }
    }
    button {
        padding: .5rem;
        font-size: .75rem;
        min-width: 10rem;
        &:hover, &:active, &:focus {
            background-color: $colour-primary-darker;
        }
        @media only screen and (max-width: 400px) {
            margin: .5rem 0 !important;
        }
    }
    .cookieControl__ModalContent {
        border-radius: $border-radius;
        @media only screen and (max-width: 767px) {
            border-radius: unset;
        } 
        .modal-title {
            font-size: xx-large;
            margin-top: 3rem;
        }
        input:checked + label {
            background-color: $colour-primary-darker;
        }
        button.cookieControl__ModalClose {
            top: 40px;
            right: 40px;
            color: #000;
            background-color: transparent;
            border-bottom: 1px solid #000;
            &:hover, &:active, &:focus {
                color: $colour-primary-darker;
                border-color: $colour-primary-darker;
            }
        }

    }
    .cookieControl__ControlButton {
        left: 2rem;
        bottom: 2rem;
        width: 40px;
        min-width: unset;
        background-color: rgba(255, 255, 255, .5);
        color: rgba(0, 0, 0, .5);
        border: 1px solid;
        border-color:rgba(0, 0, 0, .5);
    }
}
</style>