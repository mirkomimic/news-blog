import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3' 
import TweetComponent from '../Components/tweetComponent.vue'

export default Node.create({
  name: 'tweetNode',

  group: 'block',

  content: 'inline*',

  addAttributes() {
    return {
      tweetID: {
        default: null,
        // https://tiptap.dev/docs/editor/extensions/custom-extensions/extend-existing#attributes
        parseHTML: (element) => element.getAttribute('tweetid'),
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'tweet-component',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['tweet-component', mergeAttributes(HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(TweetComponent)
  },

  addCommands() {
    return {
      insertTweetNode:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              tweetID: options.tweetID,
            },
          })
        },
    }
  },
})