import MyComponent from '../../../../slices/Projects';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Projects'
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
      mock: {"variation":"default","name":"Default","slice_type":"projects","items":[{"projectSlug":"integrate efficient models","projectHero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"},"projectTitle":"matrix 24/7 technologies","projectSubTitle":[{"type":"paragraph","text":"Nulla consequat in ullamco. Occaecat amet cupidatat esse deserunt. Lorem consequat in aute Lorem.","spans":[]}],"projectDescription":[{"type":"paragraph","text":"Anim veniam tempor eu aliquip et exercitation nisi veniam eiusmod.","spans":[]}]},{"projectSlug":"empower cross-media initiatives","projectHero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"projectTitle":"architect holistic e-tailers","projectSubTitle":[{"type":"paragraph","text":"Officia ad officia amet.","spans":[]}],"projectDescription":[{"type":"paragraph","text":"Ipsum et magna ex elit voluptate nulla dolore fugiat anim mollit aliqua.","spans":[]}]},{"projectSlug":"engage world-class bandwidth","projectHero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"projectTitle":"seize cutting-edge action-items","projectSubTitle":[{"type":"paragraph","text":"Consectetur fugiat ut est est.","spans":[]}],"projectDescription":[{"type":"paragraph","text":"Occaecat consequat consequat ad velit eu laborum excepteur. Quis incididunt ad laborum et amet excepteur exercitation. Deserunt mollit amet consectetur occaecat eu incididunt dolor qui nisi reprehenderit do est aute.","spans":[]}]},{"projectSlug":"scale B2C action-items","projectHero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"projectTitle":"scale viral e-business","projectSubTitle":[{"type":"paragraph","text":"Fugiat sunt enim mollit officia laborum sit consequat commodo. Non ad esse dolore dolor quis adipisicing cupidatat tempor dolor.","spans":[]}],"projectDescription":[{"type":"paragraph","text":"Dolore eu dolore voluptate veniam cupidatat ad sit ut laborum proident occaecat ea mollit cillum sit. Excepteur cupidatat sunt excepteur minim commodo. Esse elit exercitation quis non ipsum dolor duis laborum aliquip officia.","spans":[]}]},{"projectSlug":"seize granular interfaces","projectHero":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"projectTitle":"incubate plug-and-play blockchains","projectSubTitle":[{"type":"paragraph","text":"Deserunt laborum voluptate exercitation culpa ipsum.","spans":[]}],"projectDescription":[{"type":"paragraph","text":"Occaecat nulla sunt ut non commodo cillum cillum aliquip excepteur eiusmod ad. Qui adipisicing amet dolor id tempor enim cillum deserunt. Magna duis sint anim sint mollit culpa incididunt voluptate.","spans":[]}]}],"primary":{"projectsTitle":[{"type":"heading1","text":"E-enable extensible partnerships","spans":[]}],"projectsDescription":[{"type":"paragraph","text":"Commodo esse sit exercitation aliquip qui exercitation id adipisicing fugiat irure consectetur. Ea eu ut mollit adipisicing labore cillum. Elit duis irure aliqua.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
