<template>
  <div>
    <Navbar :logos="document.data.logos[0]"/>
    <Hero :options="document.data.hero[0]" />
    <!-- <IconSection :icons="this.document.data.icons[0]" /> -->
    <Services :services="this.document.data.services[0]" />
    <Projects :projects="this.document.data.projects[0]" :galleries="this.document.data.galleries" />
   <!--  <Team :team="this.document.data.team[0]" /> -->
    <!-- <Contact :contactInfo="document.data.contactInfo[0]" /> -->
    <!-- <Footer :contactInfo="document.data.contactInfo[0]" :footerLogo="document.data.logos[0].whiteLogo"/> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      document: {},
    }
  },
  async fetch() {
    this.document = await this.$prismic.api.getSingle('homepage')
  },
  computed: {
    team() {
      const slices = this.document.data.slices
      return slices.find(s => s.slice_type == 'team')
    }

  },
  methods: {
  }
}
</script>
