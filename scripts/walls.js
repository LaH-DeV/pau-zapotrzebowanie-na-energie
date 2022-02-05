import { MaterialMap } from "./data.js";
import { findU } from "./building.js";

export default function wallsInit() {
	const wallInsulationCheckbox = document.querySelector("#WallsInsulationCheckbox");
	const wallInsulationList = document.querySelector("#WallsInsulationInput");
	const wallInsulationThicknessInput = document.querySelector("#WallsInsulationThincknessInput");

	wallInsulationCheckbox.addEventListener("change", () => {
		if (wallInsulationCheckbox.checked) {
			wallInsulationList.removeAttribute("disabled");
			wallInsulationThicknessInput.removeAttribute("disabled");
		} else {
			wallInsulationList.setAttribute("disabled", "true");
			wallInsulationThicknessInput.setAttribute("disabled", "true");
		}
	});
}

export function setWalls(userData) {
	const { windowArea, dimesions } = userData;
	const wallsArea = dimesions.height * dimesions.length * 2 + dimesions.height * dimesions.width * 2 - windowArea;
	userData.wallsArea = wallsArea;
	userData.windowInsulationChecked = false;

	const WallsMaterialInput = document.querySelector("#WallsMaterialInput");
	const WallsThicknessInput = document.querySelector("#WallsThincknessInput");
	const WallsInsulationCheckbox = document.querySelector("#WallsInsulationCheckbox");

	const wallsLambda = MaterialMap.get(WallsMaterialInput.value);
	const wallsThickness = Number(WallsThicknessInput.value);
	const wallU = findU(wallsLambda, wallsThickness);
	let U = 0;

	if (WallsInsulationCheckbox.checked) {
		userData.windowInsulationChecked = true;
		const WallsInsulationInput = document.querySelector("#WallsInsulationInput");
		const WallsInsulationThincknessInput = document.querySelector("#WallsInsulationThincknessInput");
		const insulationLambda = MaterialMap.get(WallsInsulationInput.value);
		const insulationThickness = Number(WallsInsulationThincknessInput.value);
		const insulationU = findU(insulationLambda, insulationThickness);

		userData.inso = WallsInsulationInput.value;
		U = findResultantU(wallU, insulationU);
		userData.wallsU = U;
	} else {
		U = wallU;
		userData.wallsU = U;
	}
}

function findResultantU(wallU, insulationU) {
	let Uw = 1 / wallU + 1 / insulationU;
	return Number((1 / Uw).toFixed(3));
}
