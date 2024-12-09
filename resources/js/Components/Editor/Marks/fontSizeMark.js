import { Mark } from '@tiptap/core'

export const FontSize = Mark.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
    };
  },

  addAttributes() {
    return {
      fontSize: {
        default: null,
        renderHTML: (attributes) => {
          return {
            style: `font-size: ${attributes.fontSize}px`,
          }
        },
        parseHTML: (element) => element.style.fontSize,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0]
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ commands }) => {
          return commands.setMark(this.name, {fontSize})
        },
    }
  },
})