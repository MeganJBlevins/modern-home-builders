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
      mock: {"variation":"default","name":"Default","slice_type":"services","items":[{"service":"mesh front-end solutions","serviceList":[{"type":"paragraph","text":"Et commodo est ut deserunt esse irure Lorem ad ex commodo ex do. Nostrud exercitation quis ex irure proident aliqua commodo est consectetur veniam. Exercitation deserunt magna eiusmod esse.","spans":[]}],"icon":"construction"},{"service":"engineer seamless communities","serviceList":[{"type":"paragraph","text":"In mollit duis eiusmod irure eiusmod occaecat anim ex ullamco est.","spans":[]}],"icon":"pie-chart"}],"primary":{"servicesTitle":[{"type":"heading1","text":"Repurpose bleeding-edge solutions","spans":[]}],"servicesDescription":[{"type":"paragraph","text":"Ad aute qui enim. Quis do reprehenderit ipsum incididunt id id labore magna exercitation aliqua enim dolor amet.","spans":[]}],"embedVideoUrl":"productize strategic markets"},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
