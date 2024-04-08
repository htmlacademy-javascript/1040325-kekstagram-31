const noUiSliderSettings = {
  default: {
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
  },
  chrome: {
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterValue: (value) => `grayscale(${value})`,
  },
  sepia: {
    sliderOptions: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterValue: (value) => `sepia(${value})`,
  },
  marvin: {
    sliderOptions: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    getFilterValue: (value) => `invert(${value}%)`,
  },
  phobos: {
    sliderOptions: {
      range: {
        min: 0,
        max: 3, //px
      },
      start: 3,
      step: 0.1,
    },
    getFilterValue: (value) => `blur(${value}px)`,
  },
  heat: {
    sliderOptions: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    getFilterValue: (value) => `brightness(${value})`,
  },
};

export {noUiSliderSettings};
