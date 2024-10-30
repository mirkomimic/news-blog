import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3' 
import galleryComponent from '../Components/galleryComponent.vue'

export default Node.create({
  name: 'galleryNode',

  group: 'block',

  content: 'inline*',

  addAttributes() {
    return {
      src: {
        default: [],
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'gallery-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['gallery-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(galleryComponent)
  },

  addCommands() {
    return {
      insertGalleryNode:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              src: options.tempImages || [],
            },
          })
        },
    }
  },
})