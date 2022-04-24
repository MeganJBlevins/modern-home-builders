import MyComponent from '../../../../slices/Services';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Services'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"services","items":[{"service":"redefine extensible e-commerce","serviceList":[{"type":"paragraph","text":"Mollit qui nostrud sint officia laborum sint elit.","spans":[]}],"icon":"ruler-alt"},{"service":"implement web-enabled e-markets","serviceList":[{"type":"paragraph","text":"Non consequat cillum veniam eu ut elit amet velit ut. Officia laborum consectetur officia reprehenderit elit Lorem tempor. Ex dolor esse est non.","spans":[]}],"icon":"paint-bucket"},{"service":"exploit sexy content","serviceList":[{"type":"paragraph","text":"Ullamco dolore enim do exercitation tempor proident labore sunt aute eiusmod ullamco ea ullamco ut deserunt. Tempor eiusmod esse ut ut Lorem ut tempor ipsum sunt id aliqua magna. Et adipisicing reprehenderit laborum adipisicing nisi.","spans":[]}],"icon":"calculator"},{"service":"visualize next-generation vortals","serviceList":[{"type":"paragraph","text":"Do ea deserunt magna duis non proident sint tempor irure ipsum aute.","spans":[]}],"icon":"helmet"},{"service":"aggregate rich e-services","serviceList":[{"type":"paragraph","text":"Fugiat est adipisicing excepteur.","spans":[]}],"icon":"pie-chart"},{"service":"reintermediate 24/365 synergies","serviceList":[{"type":"paragraph","text":"Sit elit sit incididunt incididunt veniam velit voluptate nulla minim.","spans":[]}],"icon":"target"}],"primary":{"servicesTitle":[{"type":"heading1","text":"Facilitate virtual e-services","spans":[]}],"servicesDescription":[{"type":"paragraph","text":"Sunt commodo deserunt commodo in nisi ad voluptate nostrud tempor. Exercitation consectetur fugiat officia ad aute dolor voluptate dolor adipisicing.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
