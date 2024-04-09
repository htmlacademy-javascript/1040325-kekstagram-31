import { noUiSliderSettings } from './noUiSliderSettings.js';

function upscalePicture() {
  const scaleValues = [0.25, 0.5, 0.75, 1];
  let i = scaleValues.length - 1;
  return {
    upscale(){
      if(i < scaleValues.length - 1) {
        i += 1;
      }
      return scaleValues[i];
    },
    downscale() {
      if (i > 0) {
        i -= 1;
      }
      return scaleValues[i];
    },
  };
}

function picturePreviewEditing(form) {

  const scaleSmallerButton = form.querySelector('.scale__control--smaller');
  const scaleBiggerButton = form.querySelector('.scale__control--bigger');
  const scaleValueElement = form.querySelector('.scale__control--value');
  const previewPicture = form.querySelector('.img-upload__preview img');
  const sliderElement = form.querySelector('.effect-level__slider');
  const effectValueInput = form.querySelector('.effect-level__value');
  const effectsRadio = form.querySelectorAll('input[name = "effect"]');
  const sliderContainer = form.querySelector('.img-upload__effect-level');

  const scalePicture = upscalePicture();

  scaleSmallerButton.addEventListener('click', () => {
    const scaleValue = scalePicture.downscale();

    scaleValueElement.value = `${scaleValue * 100}%`;
    previewPicture.style.transform = `scale(${scaleValue})`;
  });

  scaleBiggerButton.addEventListener('click', () => {
    const scaleValue = scalePicture.upscale();

    scaleValueElement.value = `${scaleValue * 100}%`;
    previewPicture.style.transform = `scale(${scaleValue})`;
  });

  effectValueInput.value = 0;

  noUiSlider.create(sliderElement, noUiSliderSettings.default.sliderOptions);

  sliderElement.dataset.selectedFilter = 'none';
  sliderContainer.style.display = 'none';

  effectsRadio.forEach((elem) => {
    elem.addEventListener('change', (evt) => {
      const value = evt.currentTarget.value;

      sliderElement.dataset.selectedFilter = value;

      if(value === 'none') {
        sliderContainer.style.display = 'none';
        previewPicture.style.filter = 'none';
        effectValueInput.value = 0;
      } else {
        sliderContainer.style.display = 'block';
        sliderElement.noUiSlider.updateOptions(noUiSliderSettings[value].sliderOptions);
      }
    });

  });

  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();
    effectValueInput.value = value;
    previewPicture.style.filter = noUiSliderSettings[sliderElement.dataset.selectedFilter]?.getFilterValue(value);
  });

  function resetSlider() {
    sliderElement.noUiSlider.updateOptions(noUiSliderSettings.default.sliderOptions);
    previewPicture.style.filter = 'none';
    sliderElement.dataset.selectedFilter = 'none';
    sliderContainer.style.display = 'none';
  }

  return resetSlider;
}

export {picturePreviewEditing};
