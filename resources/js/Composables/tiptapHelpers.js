import { ref } from "vue";

export function useTipTapHelpers() {

  const previousImages = ref([]);
  const removedImages = ref([])
  const currentImages = ref([])
  const currentImagesFromGallery = ref([])

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

  const addRemoveImgsFromForm = (form, editor) => {
    currentImages.value = getImagesFromContent(editor.getHTML());
    console.log(editor.getHTML());
    currentImagesFromGallery.value = getImagesFromGallery(editor.getHTML())

    currentImages.value = currentImages.value.concat(currentImagesFromGallery.value);

    removedImages.value = previousImages.value.filter(url => !currentImages.value.includes(url));

    const filteredImages = form.images.filter(image => !removedImages.value.includes(image.url));
    form.images.length = 0; 
    form.images.push(...filteredImages);
    // The splice method modifies the contents of the array directly without changing the array’s reference.
    // form.images.splice(0, form.images.length, ...form.images.filter(image => !removedImages.value.includes(image.url)));

    previousImages.value = currentImages.value;
  }

  const replaceTempUrls = (path, article) => {
    const div = document.createElement('div');
    div.innerHTML = article.content;
    div.querySelectorAll('img').forEach((img) => {
      article.images.forEach((aImg) => {
        if (img.src == aImg.image_blob) {
          img.src = `/storage/images/${path}/${article.id}/${aImg.image}`
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

  const replaceBlobsWithUrls = (path, article) => {
    const div = document.createElement('div');
    div.innerHTML = article.content;
    div.querySelectorAll('img').forEach((img) => {
      article.images.forEach((aImg) => {
        if (img.src == aImg.image_blob) {
          img.src = `/storage/images/${path}/${article.id}/${aImg.image}`
        }
      })
    })  

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

  return { addRemoveImgsFromForm, replaceTempUrls, replaceTempUrlsFromGallery, replaceBlobsWithUrls };
}