import { getSliders, storeData } from "./data.js";

class Slider {
  constructor(sliderSelector, sliderButtonsSelector, slidesSelector) {
    this.init(sliderSelector, sliderButtonsSelector, slidesSelector);
  }

  init(sliderIdAttribute, sliderButtonsIdAttribute, slidesSelector) {
    const slider = document.querySelector(`[${sliderIdAttribute}`);
    const slides = document.querySelectorAll(slidesSelector);
    const buttons = document.querySelectorAll(`[${sliderButtonsIdAttribute}`);
    buttons.forEach((button) => {
      const buttonId = button.getAttribute("data-button-id");
      if (button.getAttribute("data-direction") === "next") {
        button.addEventListener("click", () => {
          this.slideNext(slider, slides, buttonId);
        });
      } else if (button.getAttribute("data-direction") === "prev") {
        button.addEventListener("click", () => {
          this.slidePrev(slider, slides, buttonId);
        });
      }
    });
  }

  slideNext(slider, slides, buttonId) {
    const currentSlide = slider.getAttribute("data-slide-id");
    storeData(currentSlide, slides);
    if (buttonId === currentSlide) {
      if (Number(currentSlide) + 1 <= slides.length) {
        slider.style.transform = `translateX(${this.getTransform(slider) + slides[currentSlide - 1].clientWidth * -1}px)`;
        this.setSlideId(slider, Number(currentSlide) + 1);
      }
    }
  }

  slidePrev(slider, slides, buttonId) {
    const currentSlide = slider.getAttribute("data-slide-id");
    if (buttonId === currentSlide) {
      if (Number(currentSlide) > 1) {
        slider.style.transform = `translateX(${this.getTransform(slider) + slides[currentSlide - 1].clientWidth * 1}px)`;
        this.setSlideId(slider, Number(currentSlide) - 1);
      }
    }
  }

  setSlideId(slider, id) {
    slider.setAttribute("data-slide-id", id);
  }

  getTransform(slider) {
    const transformString = slider.style.transform;
    return Number(transformString.substring(transformString.indexOf("(") + 1, transformString.indexOf("p")));
  }
}

export default function renderSlides(calculateAction, resetAction) {
  const slidesArray = getSliders();
  const sliderContainer = document.querySelector(".container-slider");
  const width = sliderContainer.clientWidth;
  const height = sliderContainer.clientHeight;
  const sliderElement = document.querySelector(".slider");
  slidesArray.forEach((element, index, array) => {
    let slide;
    if (index === 0) {
      slide = `<div class="slide" style="width:${width}px; height:${height - 100}px;">${element}<button data-direction="next" data-button-id="${index + 1}" type="button">Rozpocznij</button>
          </div>
          </div>`;
    } else if (index === array.length - 2) {
      slide = `<div class="slide" style="width:${width}px; height:${height - 100}px;">${element}<button data-direction="prev" data-button-id="${index + 1}" type="button">Wstecz</button></div></div>`;
    } else if (index === array.length - 1) {
      slide = `<div class="slide" style="width:${width}px; height:${height - 100}px;">${element}</div></div>`;
    } else {
      slide = `<div class="slide" style="width:${width}px; height:${height - 100}px;">${element}<button data-direction="prev" data-button-id="${index + 1}" type="button">Wstecz</button>
          <button data-direction="next" data-button-id="${index + 1}" type="button">Dalej</button>
          </div>
          </div>`;
    }

    sliderElement.insertAdjacentHTML("beforeend", slide);
    if (index === array.length - 2) {
      const button = document.createElement("button");
      button.id = "submit";
      button.setAttribute("type", "button");
      button.setAttribute("data-direction", "next");
      button.textContent = "Przelicz";
      button.addEventListener("click", () => {
        calculateAction(`${index + 1}`);
      });
      let lastChild = sliderElement.lastChild.lastChild.previousSibling;
      if (lastChild.nodeType === 3) {
        lastChild = sliderElement.lastChild.lastChild;
      }
      lastChild.appendChild(button);
    } else if (index === array.length - 1) {
      const button = document.createElement("button");
      button.id = "reset";
      button.setAttribute("type", "button");
      button.textContent = "Resetuj";
      button.addEventListener("click", resetAction);
      let lastChild = sliderElement.lastChild.lastChild.previousSibling;
      if (lastChild.nodeType === 3) {
        lastChild = sliderElement.lastChild.lastChild;
      }
      lastChild.appendChild(button);
    }
  });
  return initSlider();
}

function initSlider() {
  return new Slider("data-slide-id", "data-button-id", ".slide");
}
