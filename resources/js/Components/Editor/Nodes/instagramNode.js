import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3' 
import InstagramComponent from '../Components/instagramComponent.vue'


export default Node.create({
  name: 'instagramNode',

  group: 'block',

  content: 'inline*',

  addAttributes() {
    return {
      blockquote: {
        default: null,
        // https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#attributes
        parseHTML: (element) => element.getAttribute('blockquote'),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'instagram-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['instagram-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(InstagramComponent)
  },

  addCommands() {
    return {
      insertInstagramNode:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              blockquote: options.blockquote,
            },
          })
        },
    }
  },
})