import { ref } from "vue";

export function useTipTapHelpers() {

  const previousImages = ref([]);

  const getImagesFromGallery = (content) => {
    let array = [];
    const div = document.createElement('div');
    div.innerHTML = content;
    let elements = div.querySelectorAll('gallery-component')

    elements.forEach((element) => {
      array.push(element.getAttribute('src').split(","))
    })

    return array.flat().map(url => url);

  }

  const getImagesFromContent = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    return [...div.querySelectorAll('img')].map((img) => img.src);
  };

  const addRemoveImgsFromForm = (images, editor) => {
    let currentImages = getImagesFromContent(editor.getHTML());
    const currentImagesFromGallery = getImagesFromGallery(editor.getHTML())

    currentImages = currentImages.concat(currentImagesFromGallery);

    const removedImages = previousImages.value.filter(url => !currentImages.includes(url));

    images.value = images.value.filter(image => !removedImages.includes(image.url));

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

  const replaceTempUrlsFromGallery = (path, article) => {
    const div = document.createElement('div');
    div.innerHTML = article.content;
    let elements = div.querySelectorAll('gallery-component')

    elements.forEach((component) => {
      let blobs = component.getAttribute('src').split(',')
      let imagesUrls = article.images.map((img) => {
        if (blobs.includes(img.image_blob)) {
          return `/storage/images/${path}/${article.id}/${img.image}`
        }
      })
      component.setAttribute('src', imagesUrls);
    })
    return div.innerHTML;
  }

  return { addRemoveImgsFromForm, replaceTempUrls, replaceTempUrlsFromGallery };
}