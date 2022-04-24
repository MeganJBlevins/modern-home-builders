<template>
    <section class="footer-area footer-dark">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="footer-logo text-center">
                        <a class="mt-30" href="index.html"><img :src="footerLogo.url" alt="Logo"></a>
                    </div> <!-- footer logo -->
                   
                    <div class="footer-support text-center">
                        <span class="number"><a :href="`tel:${phone}`">{{ contactInfo.phone }}</a></span>
                        <span class="mail"><a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a></span>
                    </div>
                     <ul class="social text-center mt-5">
                        <li><a :href="contactInfo.facebookLink.url" target="_blank">Follow us on <i class="lni lni-facebook-filled"></i></a></li>
                        <!-- <li><a href="https://twitter.com/uideckHQ"><i class="lni lni-twitter-original"></i></a></li>
                        <li><a href="https://instagram.com/uideckHQ"><i class="lni lni-instagram-original"></i></a></li>
                        <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li> -->
                    </ul>
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        contactInfo: Object,
        footerLogo: Object
    },
    computed: {
         phone() {
            const number = this.contactInfo.phone.replace(/\D/g,'');
            return 'tel:' + number
        },
    }
}
</script>
<style scoped>
.footer-area .social li a {
    font-size: 16px;
}
</style>
