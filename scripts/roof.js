import { MaterialMap } from "./data.js";
import { findU } from "./building.js";

export default function roofInit() {}

export function setRoof(userData) {
	const { dimesions } = userData;
	const roofArea = dimesions.length * dimesions.width;
	userData.roofArea = roofArea;

	const RoofInsulationInput = document.querySelector("#RoofInsulationInput");
	const RoofInsulationThincknessInput = document.querySelector("#RoofInsulationThincknessInput");
	const insulationThickness = Number(RoofInsulationThincknessInput.value);
	const roofLambda = MaterialMap.get(RoofInsulationInput.value);

	userData.roofInso = RoofInsulationInput.value;
	const U = findU(roofLambda, insulationThickness);
	userData.roofU = U;
}
