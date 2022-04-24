<template>
     <section id="contact" class="contact-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 col-md-10">
                    <div class="section-title text-center pb-30">
                        <h3 class="title">{{ contactInfo.contactIntro }}</h3>
                        <PrismicRichText class="text" :field="contactInfo.contactIntroDescription" />
                    </div> <!-- section title -->
                </div>
            </div> <!-- row -->
            <div class="contact-info pt-30">
                <div class="row justify-content-center align-self-center">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-contact-info contact-color-1 mt-30 d-flex ">
                            <div class="contact-info-icon">
                                <i class="lni lni-map-marker"></i>
                            </div>
                            <div class="contact-info-content media-body">
                                <PrismicRichText class="text" :field="contactInfo.address" />
                            </div>
                        </div> <!-- single contact info -->
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-contact-info contact-color-3 mt-30 d-flex ">
                            <div class="contact-info-icon">
                                <i class="lni lni-phone"></i>
                            </div>
                            <div class="contact-info-content media-body">
                                <p class="text"><a :href="phone">{{ contactInfo.phone }}</a></p>
                            </div>
                        </div> <!-- single contact info -->
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-contact-info contact-color-2 mt-30 d-flex ">
                            <div class="contact-info-icon">
                                <i class="lni lni-envelope"></i>
                            </div>
                            <div class="contact-info-content media-body">
                                <p class="text"><a :href="`mailto:${contactInfo.email}`">{{ contactInfo.email }}</a></p>
                            </div>
                        </div> <!-- single contact info -->
                    </div>
                    
                </div> <!-- row -->
            </div> <!-- contact info -->
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        contactInfo: Object,
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
.single-contact-info {
    align-items: center;
}
</style>