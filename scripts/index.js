import renderSlides from "./slider.js";
import buildingInit, { calculateAll } from "./building.js";

const slider = renderSlides(calculate, reset);
if (slider) {
  buildingInit();
}

function calculate(id) {
  calculateAll(showNext, id);
}

function showNext(id) {
  slider.slideNext(document.querySelector(`[data-slide-id`), document.querySelectorAll(".slide"), id);
}

function reset() {
  window.location.reload(true);
}
