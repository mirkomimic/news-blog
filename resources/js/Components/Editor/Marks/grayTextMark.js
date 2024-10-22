import { Mark } from '@tiptap/core'

export const GrayText = Mark.create({
  name: 'grayText',

  addAttributes() {
    return {
      class: {
        default: 'text-grey',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[class="text-grey"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, class: 'text-grey' }, 0]
  },

  addCommands() {
    return {
      toggleGrayText:
        () =>
        ({ commands }) => {
          return commands.toggleMark(this.name)
        },
    }
  },
})