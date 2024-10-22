import Text from '@tiptap/extension-text'

export function useCustomNodes() {

  const Caption = Text.extend({
    renderHTML({ HTMLAttributes }) {
      // Apply the 'text-gray' class to the text node
      return ['span', { ...HTMLAttributes, class: 'text-darken-red-3' }, 0]
    }
  })

  return { Caption };
}