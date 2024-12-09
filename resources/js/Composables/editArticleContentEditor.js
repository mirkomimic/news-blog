import StarterKit from '@tiptap/starter-kit'
import { Editor } from '@tiptap/vue-3'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import vueComponent from '@/Components/Editor/Extensions/testExtension'
import sourceNode from '@/Components/Editor/Nodes/sourceNode'
import galleryNode from '@/Components/Editor/Nodes/galleryNode'
import { GrayText } from '@/Components/Editor/Marks/grayTextMark'
import Youtube from '@tiptap/extension-youtube'
import tweetNode from '@/Components/Editor/Nodes/tweetNode'
import instagramNode from '@/Components/Editor/Nodes/instagramNode'
import { useTipTapHelpers } from '@/Composables/tiptapHelpers'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { all, createLowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml';
import { onMounted, ref, onBeforeUnmount } from 'vue'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { FontSize } from '@/Components/Editor/Marks/fontSizeMark'
import { CustomParagraph } from '@/Components/Editor/Extensions/customParagraph'

const lowlight = createLowlight(all)
lowlight.register('js', js)
lowlight.register('html', html)


export function useEditArticleContentEditor(emit, form, content) {

  const editor = ref(null)
  const { addRemoveImgsFromForm } = useTipTapHelpers()

  onMounted(() => {
    editor.value = new Editor({
      extensions: [
        StarterKit.configure({
          codeBlock: false,
          history: false,
          bulletList: {
            HTMLAttributes: {
              class: 'ms-3'
            }
          },
        }),
        CodeBlockLowlight.configure({
          lowlight,
          defaultLanguage: 'js',
          HTMLAttributes: {
            class: 'bg-white rounded pa-2',
          },
        }),
        GrayText,
        Table.configure({ resizable: true }),
        TableCell,
        TableHeader,
        TableRow,
        TextStyle,
        FontFamily,
        Image.configure({
          HTMLAttributes: {
            class: 'd-block mx-auto w-100',
          },
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
          defaultAlignment: 'justify',
        }),
        Youtube.configure({
          nocookie: true,
        }),
        vueComponent,
        sourceNode,
        galleryNode,
        tweetNode,
        instagramNode,
        FontSize,
        CustomParagraph,
      ],
      content: content.value,
      editorProps: {
        attributes: {
          class: 'border rounded tiptapHeight pa-3',
        },
      },
      onUpdate: ({ editor }) => {
        console.log(form);
        addRemoveImgsFromForm(form, editor);
        emit('update:modelValue', editor.getHTML())
      },
      onCreate: ({ editor }) => {
        editor.commands.setFontFamily('serif')
        editor.commands.setFontSize(24)
      }
    })
  })

  onBeforeUnmount(() => {
    editor.value?.destroy()
  })
  
  return { editor };

}
  