<template>
  <div class="d-flex flex-wrap align-center ga-3 py-3">

    <FontFamilySelect :editor="props.editor" style="width: 170px;"/>
    <FontSizeSelect :editor="props.editor" style="width: 50px;"/>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <Heading1 :editor="props.editor"/>
      <Heading2 :editor="props.editor"/>
      <Heading3 :editor="props.editor"/>
      <!-- <ParagraphBtn :editor="props.editor"/> -->
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <BoldBtn :editor="props.editor"/>
      <ItalicBtn :editor="props.editor"/>
      <UnderlineBtn :editor="props.editor"/>
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <TextAlignLeftBtn :editor="props.editor"/>
      <TextAlignCenterBtn :editor="props.editor"/>
      <TextAlignJustifyBtn :editor="props.editor"/>
      <TextAlignRightBtn :editor="props.editor"/>
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <BulletListBtn :editor="props.editor"/>
      <CodeBlockBtn :editor="props.editor"/>
      <HorizontalRuleBtn :editor="props.editor"/>
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <InsertEditorTableDialog :editor="props.editor"/>
      <MergeOrSplitBtn :editor="props.editor"/>
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <InsertImageBtn :editor="props.editor" :images="props.images"/>
      <InsertGalleryBtn :editor="props.editor" :images="props.images"/>
      <SourceBtn :editor="props.editor"/>
    </v-btn-group>

    <v-btn-group variant="tonal" density="comfortable" divided>
      <EmbedYouTubeBtn :editor="props.editor"/>
      <EmbedTweetBtn :editor="props.editor"/>
      <EmbedInstagramBtn :editor="props.editor"/>
    </v-btn-group>

  </div>
</template>

<script setup>
import EmbedYouTubeBtn from '@/Components/Buttons/EmbedYouTubeBtn.vue';
import EmbedTweetBtn from '@/Components/Buttons/EmbedTweetBtn.vue';
import BulletListBtn from '@/Components/Buttons/BulletListBtn.vue';
import CodeBlockBtn from '@/Components/Buttons/CodeBlockBtn.vue';
import HorizontalRuleBtn from '@/Components/Buttons/HorizontalRuleBtn.vue';
import EmbedInstagramBtn from '@/Components/Buttons/EmbedInstagramBtn.vue';
import Heading1 from '@/Components/Buttons/Heading1.vue';
import Heading2 from '@/Components/Buttons/Heading2.vue';
import Heading3 from '@/Components/Buttons/Heading3.vue';
import ParagraphBtn from '@/Components/Buttons/ParagraphBtn.vue';
import TextAlignLeftBtn from '@/Components/Buttons/TextAlignLeftBtn.vue';
import TextAlignCenterBtn from '@/Components/Buttons/TextAlignCenterBtn.vue';
import TextAlignJustifyBtn from '@/Components/Buttons/TextAlignJustifyBtn.vue';
import TextAlignRightBtn from '@/Components/Buttons/TextAlignRightBtn.vue';
import InsertImageBtn from '@/Components/Buttons/InsertImageBtn.vue';
import InsertGalleryBtn from '@/Components/Buttons/InsertGalleryBtn.vue';
import SourceBtn from '../Buttons/SourceBtn.vue';
import BoldBtn from '../Buttons/BoldBtn.vue';
import ItalicBtn from '../Buttons/ItalicBtn.vue';
import UnderlineBtn from '../Buttons/UnderlineBtn.vue';
import InsertEditorTableDialog from '../Dialogs/InsertEditorTableDialog.vue';
import MergeOrSplitBtn from '../Buttons/MergeOrSplitBtn.vue';
import FontFamilySelect from '../Selects/FontFamilySelect.vue';
import FontSizeSelect from '../Selects/FontSizeSelect.vue';

const props = defineProps(['editor', 'images'])
</script>