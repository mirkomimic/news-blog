export function useTipTapHelpers() {
  const getImagesFromContent = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    return [...div.querySelectorAll('img')].map((img) => img.src);
  };

  const addRemoveImgsFromForm = (images, previousImages, editor) => {
    const currentImages = getImagesFromContent(editor.getHTML());

    const removedImages = previousImages.value.filter(url => !currentImages.includes(url));

    removedImages.forEach((removedImage) => {
      images.value = images.value.filter(image => image.url !== removedImage);
    });

    previousImages.value = currentImages;
  }

  return { addRemoveImgsFromForm };
}