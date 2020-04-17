<template>
    <div class="container-fluid header-wrapper sticky-top">
        <div class="row">
            <div class="container">
                <nav class="navbar navbar-expand-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="navbar-toggler-icon burger burger-squeeze" :class="{ open: isOpen }" @click="isOpen = !isOpen">
                            <div class="burger-lines"></div>
                        </div>
                    </button>
                    <a class="navbar-brand mr-0 mr-lg-3" href="/" > 
                        <div class="logo-container">
                            <img class="d-none d-sm-block" src="~assets/images/vipaesmed-logo.svg" />
                            <span>VIP Aesthetic Medicine</span>
                        </div>        
                    </a>

                    <div id="navbar-menu" class="collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/about-us">About Us</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle"
                                    href="/tratments" id="navbarTeatments"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                Treatments
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarTeatments">
                                    <a class="dropdown-item" href="#">Treatment</a>
                                    <a class="dropdown-item" href="#">Another Treatment</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Treatment2</a>
                                    <a class="dropdown-item" href="#">Treatment3</a>
                                    <a class="dropdown-item" href="#">Treatment4</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isOpen: false
        }
    },
    methods: {
                
    }
}
</script>


<style lang="scss" scoped>
.navbar {
    padding-left: 0;
    padding-right: 0;
    .navbar-toggler {
        height: 50px;
        width: 50px;
        padding: 0.25rem;
        border: none;
    }
    .nav-item{
        background-color: $background-colour;
    }
}

.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        height: 5rem;
    }
}

.dropdown-menu {
    border: none;
    background-color: inherit;
}
</style>