const uploadFileInput = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__preview');

uploadFileInput.addEventListener('change', () => {
  const file = uploadFileInput.files[0];
  preview.src = URL.createObjectURL(file);
  previewEffects.forEach((picture) => {
    picture.style.backgroundImage = `url(${URL.createObjectURL(file)}`;
  });
});
