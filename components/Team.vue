<template>
    <section id="team" class="team-area pb-130">
        <div class="mb-4 team-heading" :style="{'backgroundImage': `url(${team.primary.titleBackground.url})`}">
            <div class="section-title text-center">
                 <h3 class="title">{{ team ? team.primary.teamTitle[0].text : 'Section Title' }}</h3>
                <PrismicRichText class="text" style="color:white" :field="team.primary.teamDescription" />
            </div> <!-- section title -->
        </div>
        <div class="container">  
            <div class="row justify-content-center mb-3">
                <div v-for="(team, index) in haveImages" :key="index" class="col-lg-3 col-sm-6">
                    <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-image">
                            <img :src="team.teamImage.url" :alt="team.teamName">
                        </div>
                        <div class="team-content">
                            <h4 class="team-name">{{ team.teamName }}</h4>
                            <span class="sub-title">{{ team.teamTitle }}</span>
                        </div>
                    </div> <!-- single team -->
                </div>
            </div><!-- end row -->
            <div v-if="noImages.length > 0" class="row justify-content-center mb-3 no-pics">
                 <div v-for="(team, index) in noImages" :key="index" class="col-lg-3 col-sm-6">
                   <div class="team-style-eleven text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                        <div class="team-content">
                           <h4 class="team-name">{{ team.teamName }}</h4>
                            <span class="sub-title">{{ team.teamTitle }}</span>
                        </div>
                    </div> <!-- single team -->
                </div>
            </div>
        </div> <!-- container -->
    </section>
</template>
<script>
export default {
    props: {
        team: Object,
    },
    computed: {
        haveImages() {
            return this.team.items.filter(i => i.teamImage.url)
        },
        noImages() {
            return this.team.items.filter(i => !i.teamImage.url)
        }
    }
}
</script>

<style scoped>
.no-pics {
    margin-top: 130px;
}
.team-heading {
    background-size: cover;
    background-position: center;
    min-height: 550px;
    padding-top: 350px;
    padding-bottom: 50px;
}

.section-title {
    background-color: rgba(0,0,0,.6);
    padding: 30px;
}

@media screen and (max-width: 500px) {
    .no-pics .team-content {
        position: relative
    }
    .no-pics {
        margin-top: 0;
    }
}
@media screen and (min-width: 1500px) {
    .team-heading {
        background-position: center -100px;
    }
}
@media screen and (min-width: 2000px) {
    .team-heading{
        background-position: center -280px;
    }
}
@media screen and (min-width: 3000px) {
    .team-heading{
        background-position: center -350px;
    }
}
</style>