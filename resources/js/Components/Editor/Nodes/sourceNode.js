import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3' 
import sourceComponent from '../Components/sourceComponent.vue'

export default Node.create({
  name: 'sourceNode',

  group: 'block',

  content: 'inline*',

  addAttributes() {
    return {
      text: {
        default: 'This is default text', // Default text if no other text is provided
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'source-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['source-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(sourceComponent)
  },

  addCommands() {
    return {
      insertSourceNode:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [
              {
                type: 'text',
                text: 'Source: ',
              },
            ],
          })
        },
    }
  },
})