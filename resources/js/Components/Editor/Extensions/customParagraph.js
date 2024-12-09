import Paragraph from "@tiptap/extension-paragraph"

export const CustomParagraph = Paragraph.extend({
  name: 'customParagraph',

  addAttributes() {
    // Return an object with attribute configuration
    return {
      color: {
        default: 'pink',
        renderHTML: (attributes) => {
          return {
            style: `color: ${attributes.color}`,
          }
        },
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0]
  },

  parseHTML() {
    return [
      {
        tag: 'p',
      },
    ]
  },

  addCommands() {
    return {
      setCustomParagraph:
        (color) =>
        ({ commands }) => {
          return commands.setNode(this.name, {color})
        },
    }
  },
})