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
      mock: {"variation":"default","name":"Default","slice_type":"team","items":[{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"teamName":"engage user-centric vortals","teamTitle":"benchmark interactive e-commerce"},{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"teamName":"e-enable sexy users","teamTitle":"incubate cross-platform e-tailers"},{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"teamName":"iterate impactful methodologies","teamTitle":"engage transparent web-readiness"},{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"teamName":"enable granular models","teamTitle":"embrace compelling functionalities"},{"teamImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"teamName":"redefine out-of-the-box infrastructures","teamTitle":"strategize innovative architectures"}],"primary":{"teamTitle":[{"type":"heading1","text":"Syndicate efficient mindshare","spans":[]}],"teamDescription":[{"type":"paragraph","text":"Occaecat dolore occaecat culpa ullamco dolor cupidatat consequat. Commodo fugiat laboris qui non.","spans":[]}],"titleBackground":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
