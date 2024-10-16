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

  const replaceTempUrls = (path, article) => {
    const div = document.createElement('div');
    div.innerHTML = article.content;
    div.querySelectorAll('img').forEach((img) => {
      article.images.forEach((aImg) => {
        if (img.src == aImg.image_blob) {
          img.src = `/${path}/${article.id}/${aImg.image}`
        }
      })
    })  
    return div.outerHTML;
  }

  return { addRemoveImgsFromForm, replaceTempUrls };
}