<template>
    <div class="container">
        <div class="row bottom-wrapper">
            <div class="col-md-6">
                <nav class="nav flex-column">
                    <a class="nav-link" href="/">Home</a>
                    <a class="nav-link" href="/cookies-policy">Cookies Policy</a>
                    <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
                </nav>
            </div>
            <div class="col-md-6 text-right">
                <div class="contact-details-wrapper">
                    <div>
                        <i class="material-icons md-18">location_on</i>
                        <b>VIP Aesthetic Medicine, 35 Bradshawgate, Bolton, BL1 1, UK</b>
                    </div>
                    <div>
                        <i class="material-icons md-18">phone</i>
                        <b>Tel: </b>
                    </div>
                    <div>
                        <i class="material-icons md-18">phonelink_ring</i>
                        <b>Mob: </b>
                    </div>
                    <div>
                        <i class="material-icons md-18">mail_outline</i>
                        <b>E-mail: </b><a href="mailto:vipaesmed@gmail.com">vipaesmed@gmail.com</a>
                    </div>
                </div>
                <div>
                    Find us on: 
                    <a href="https://www.facebook.com/BarbaraMedicalAesthetician/?eid=ARDBrRL7qP10xQP4AQaYxeiJUYM_orqCI6Jonj1txA7gK30IYeWbhXDvErR46H5rtaSuzdShL9XTS6qb" target="_blank">
                        <img class="logo-icon" src="~assets/icons/facebook-logo.svg" alt="Facebook Logo">
                    </a>
                    <a href="#" target="_blank">
                        <img class="logo-icon" src="~assets/icons/instagram-logo.svg" alt="Instagram Logo">
                    </a>
                    <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F101018481472076%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink" target="_blank">
                        <img class="logo-icon" src="~assets/icons/messenger-logo.svg" alt="Messenger Logo">
                    </a>
                </div>
            </div>
        </div>
        <div class="row bottom-wrapper">
            <div class="col-md-6">Copyright &copy; {{ currentYear }} VIP Aesthetic Medicine</div>
            <div class="col-md-6 text-right">Created by <a href="https://www.michaeldyczkowski.co.uk">Michael Dyczkowski</a></div>
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
.contact-details-wrapper div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

</style>