<template>
    <div class="container">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/">
                <div class="logo-container">
                    <img src="~assets/icons/vipam-logo.svg" />
                    <span>VIP Aesthetic Medicine</span>
                </div>        
            </a>

            <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="navbar-nav mr-auto">
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
                <a class="cta-container" href="#">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Book</button>
                </a>
            </div>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
.logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        height: 5rem;
    }
}
</style>