<template>
    <section class="showcase" ID="projects">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="section-title text-center pb-10">
                        <h3 class="title">{{ projects.primary.projectsTitle[0] ? projects.primary.projectsTitle[0].text : 'Our Projects' }}</h3>
                          <template v-if="projects.primary.projectsDescription">
                              <PrismicRichText :field="projects.primary.projectsDescription" />
                          </template>
                    </div> <!-- row -->
                </div>
            </div> <!-- row -->
        </div>
        <div v-for="(project, index) in projects.items" :key="index" class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-lg-6 text-white showcase-img" :class="{'order-lg-2': Boolean(index % 2)}" :style="{backgroundImage: `url(${project.projectHero.url}`}"></div>
                <div class="col-lg-6 my-auto showcase-text" :class="{'order-lg-1': Boolean(index % 2)}">
                    <h2 class="mb-2">{{project.projectTitle}}</h2>
                    <div class="lead">
                        <PrismicRichText :field="project.projectSubTitle" />
                    </div>
                    <PrismicRichText :field="project.projectDescription" />
                    <button v-if="hasGallery(project.projectSlug)" @click="setModal(project.projectSlug)" class="main-btn rounded-one light-rounded-buttons light-rounded-two">See More</button>
                </div>
            </div>
        </div>
        <ProjectsModal :galleries="galleries" :project="project" v-show="showModal && project !== null" @close-modal="closeModal()"/>
    </section>
</template>

<script>
import ProjectsModal from '~/components/ProjectsModal.vue'

export default {
  components: { ProjectsModal },
  props: {
        projects: Object,
        galleries: Array
    },
  data() {
    return {
      showModal: false,
      project: this.projects.items[0].projectSlug
    }
  },
  methods: {
      setModal(project) {
          this.project = project
          this.showModal = true
      },
      closeModal() {
          this.showModal = false
      },
      hasGallery(project) {
          const galls = this.galleries
          const thisGallery = galls.find(g => g.primary.projectSlug === project)
          if(typeof thisGallery !== 'undefined'){
            return thisGallery.items.length > 0
          }
          return false
      }
  }
}
</script>