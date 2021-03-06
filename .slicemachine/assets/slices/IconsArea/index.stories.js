import MyComponent from '../../../../slices/IconsArea';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/IconsArea'
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
      mock: {"variation":"default","name":"Default","slice_type":"icons_area","items":[{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"iconLink":{"link_type":"Web","url":"http://twitter.com"}},{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"iconLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"iconLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"iconLink":{"link_type":"Web","url":"http://twitter.com"}},{"icon":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"iconLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Drive ubiquitous synergies","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat qui quis eiusmod commodo ad excepteur aute veniam tempor cillum exercitation nisi amet velit. Et aliqua veniam quis dolore dolore ut eu nostrud ex aliqua eiusmod deserunt velit amet.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
