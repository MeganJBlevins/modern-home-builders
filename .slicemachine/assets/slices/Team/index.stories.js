import MyComponent from '../../../../slices/Team';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Team'
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
      mock: {"variation":"default","name":"Default","slice_type":"team","items":[{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"teamName":"incentivize visionary eyeballs","teamTitle":"morph efficient initiatives"},{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"teamName":"orchestrate transparent e-tailers","teamTitle":"enable web-enabled web-readiness"}],"primary":{"teamTitle":[{"type":"heading1","text":"Syndicate 24/7 applications","spans":[]}],"teamDescription":[{"type":"paragraph","text":"Eu in elit mollit duis consectetur ut commodo. Do ipsum ex et amet incididunt sunt magna laborum quis labore consectetur consectetur culpa exercitation occaecat. Amet sit proident proident officia do excepteur enim exercitation nulla non velit excepteur anim consectetur.","spans":[]}],"titleBackground":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
