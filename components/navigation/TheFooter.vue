<template>
    <div class="container-fluid footer-wrapper">
        <div class="row">
            <div class="container">
                <div class="row contact-wrapper">
                    <div class="col-md-6">
                        <nav class="nav flex-column text-center text-md-left">
                            <a class="nav-link" href="/">Home</a>
                            <a class="nav-link" href="/cookies-policy">Cookies Policy</a>
                            <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
                        </nav>
                    </div>
                    <div class="col-md-6 text-center text-md-right">
                        <!-- <div class="contact-details-wrapper">
                            <div>
                                <i class="material-icons md-18">location_on</i>
                                <div>VIP Aesthetic Medicine, Royal Bolton Hospital area, Bolton, BL4</div>
                            </div>
                            <div>
                                <i class="material-icons md-18">phone</i>
                                <div>Tel:</div>
                            </div>
                            <div>
                                <i class="material-icons md-18">mail_outline</i>
                                <div>E-mail:</div><a href="mailto:vipaesmed@gmail.com">vipaesmed@gmail.com</a>
                            </div>
                        </div> -->
                        <div class="social-links-wrapper">
                            <a href="https://www.facebook.com/BarbaraMedicalAesthetician/?eid=ARDBrRL7qP10xQP4AQaYxeiJUYM_orqCI6Jonj1txA7gK30IYeWbhXDvErR46H5rtaSuzdShL9XTS6qb" target="_blank">
                                <img class="logo-icon" src="~assets/icons/facebook-logo.svg" alt="Facebook Logo">
                            </a>
                            <a href="https://www.picuki.com/profile/barbara_medical_aesthetician" target="_blank">
                                <img class="logo-icon" src="~assets/icons/instagram-logo.svg" alt="Instagram Logo">
                            </a>
                            <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F101018481472076%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink" target="_blank">
                                <img class="logo-icon" src="~assets/icons/messenger-logo.svg" alt="Messenger Logo">
                            </a>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row copywright-wrapper">
                    <div class="col-md-6 text-center text-md-left">Copyright &copy; {{ currentYear }} VIP Aesthetic Medicine</div>
                    <div class="col-md-6 text-center text-md-right">Created by <a href="https://www.michaeldyczkowski.co.uk">Michael Dyczkowski</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentYear: new Date().getFullYear()
        }
    }  
}
</script>

<style lang="scss" scoped>
.social-links-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-icon {
        max-height: 5rem;
        background-color: $colour-background; 
    }
}

</style>