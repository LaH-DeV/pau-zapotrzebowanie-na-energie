import windowsInit from "./windows.js";
import wallsInit from "./walls.js";
import roofInit from "./roof.js";
import { userData } from "./data.js";

export default function buildingInit() {
	windowsInit();
	wallsInit();
	roofInit();
}

export function calculateAll(showNext, id) {
	const resultParagraph = document.getElementById("result");
	const wallsQ = Number((userData.wallsU * userData.wallsArea * userData.deltaTemperature).toFixed(2));
	const roofQ = Number((userData.roofU * userData.roofArea * userData.deltaTemperature).toFixed(2));
	const windowsQ = Number((userData.windowsU * userData.windowArea * userData.deltaTemperature).toFixed(2));
	const sumQ = Number((wallsQ + roofQ + windowsQ).toFixed(1));
	resultParagraph.textContent = `Kocioł zasilający ten dom w ciepło powinien generować nie mniej niż ${sumQ}W.`;
	showNext(id);
}

export function findU(Lambda, thickness) {
	return thickness > 0 ? Number((Lambda / thickness).toFixed(3)) : 0;
}
