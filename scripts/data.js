import { setWalls } from "./walls.js";
import { setWindows } from "./windows.js";
import { setRoof } from "./roof.js";

export const MaterialMap = new Map([
	["Brak", 0],
	["Cegła silikatowa", 1.1],
	["Cegła ceramiczna", 0.77],
	["Bloczek z betonu komórkowego", 0.2],
	["Żelbet", 1.8],
	["Drewno", 0.2],
	["Wełna mineralna", 0.055],
	["Styropian", 0.04],
	["Tynk wapienny", 0.8],
	["Tynk cementowo-wapienny", 0.9],
	["Tynk cementowy", 1.2],
	["Płyty gipsowo-kartonowe", 0.29],
	["Okno", 1.1],
]);

export function getSliders() {
	const slidesArray = [];
	slidesArray.push(slideStart());
	slidesArray.push(slideDimensions());
	slidesArray.push(slideWindows());
	slidesArray.push(slideWalls());
	slidesArray.push(slideTemperatures());
	slidesArray.push(slideRoof());
	slidesArray.push(slideBefore());
	slidesArray.push(slideEnd());
	return slidesArray;
}

const slideBefore = () => {
	const slide = `<div class="info-container">
  <h2 style="text-align:center; margin-bottom: 2rem;">Podsumowanie</h2>
  <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXJlbVaaEfQvm-MNZ8QNV0tojMszoYVBGmg&usqp=CAU">
  <p style="text-align:center; margin-top: 2rem; font-style: italic;">
    Krótki skrót wprowadzonych danych
  </p>
</div>
<div class="input-container">
  <h2>Koniec</h2>
  <div id="summary-div"></div>`;
	return slide.trim();
};

const slideDimensions = () => {
	const slide = `<div class="info-container">
      <h2 style="text-align:center; margin-bottom: 2rem;">Ściany</h2>
      <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2904388.jpg">
      <p style="text-align:center; margin-top: 2rem; font-style: italic;">
        Aplikacja wspiera budynek w kształcie prostopadłościanu
      </p>
    </div>
    <div class="input-container">
      <h2>Wymiary budynku</h2>
      <div style="margin-left: 36px; margin-right: 36px;" class="input-group">
        <label for="BuildingWidthInput">Szerokość<span class="unit"> [m]</span></label>
        <input id="BuildingWidthInput" name="buildingWidth" type="number" step="0.1" value="3.0" min="1" max="100" required="true" />
      </div>
      <div style="margin-left: 36px; margin-right: 36px;" class="input-group">
        <label for="BuildingHeightInput">Wysokość<span class="unit"> [m]</span></label>
        <input id="BuildingHeightInput" name="buildingHeight" type="number" step="0.1" value="2.0" min="1" max="100" required="true" />
      </div>
      <div style="margin-left: 36px; margin-right: 36px;" class="input-group">
        <label for="BuildingLengthinput">Długość<span class="unit"> [m]</span></label>
        <input id="BuildingLengthinput" name="buildingLength" type="number" step="0.1" value="5.0" min="1" max="100" required="true" />
      </div>`;
	return slide.trim();
};

const slideStart = () => {
	const slide = `<div class="info-container">
        <h2 style="text-align:center; margin-bottom: 2rem;">Warm home</h2>
          <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXJlbVaaEfQvm-MNZ8QNV0tojMszoYVBGmg&usqp=CAU">
          <p style="text-align:center; margin-top: 2rem; font-style: italic;">Policz zapotrzebowanie na ogrzewanie</p>
      </div>
      <div class="input-container">
        <h2 style="margin-top: 1.5rem;">Zadanie aplikacji</h2>
        <p style="margin: 36px; line-height: 1.4; letter-spacing: 1.1px; color: #f4f3f3;">Aplikacja policzy sumaryczną stratę mocy w budynku, co pomoże określić minimalną moc pieca aby temperatura wewnątrz nie spadła poniżej założonej temperatury komfortu cieplnego.</p>
        `;
	return slide.trim();
};

// const slideEnd = () => {
//   const slide = `<div class="info-container">
//       <h2>Lorem ipsum dolor sit amet.</h2>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti consequatur magni reiciendis, repellendus sint corporis eligendi qui natus. Nesciunt, ex. Officiis, dolorum natus!
//         Repudiandae, a nemo corrupti eveniet cupiditate fugit voluptas voluptatem tempore omnis inventore magnam doloremque blanditiis reprehenderit ipsa totam molestiae nesciunt animi
//         repellendus maxime excepturi eaque minus sit.
//       </p>
//     </div>
//     <div class="input-container">
//       <h2>End</h2>`;
//   return slide.trim();
// };

const slideEnd = () => {
	const slide = `<div class="info-container">
        <h2 style="text-align:center; margin-bottom: 2rem;"></h2>
        <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://images.unsplash.com/photo-1517594422361-5eeb8ae275a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlyZXxlbnwwfHwwfHw%3D&w=1000&q=80">
        <p style="text-align:center; margin-top: 2rem; font-style: italic;">
        Programowanie aplikacji użytkowych <br> Przemysław Dylewski. 30054
        </p>
      </div>
      <div class="input-container">
        <h2>Wynik</h2><p style="text-align:center; font-size: 1.4rem; margin-top: 2rem; font-style: italic; margin-left:36px; margin-rigth: 36px;" id="result"></p>`;
	return slide.trim();
};

const slideWindows = () => {
	const slide = `<div class="info-container">
    <h2 style="text-align:center; margin-bottom: 2rem;">Okna</h2>
    <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxw9V1D9ceVNKSKir1jggoeHKiP4V8v5262A&usqp=CAU">
    <p style="text-align:center; margin-top: 2rem; font-style: italic;">
      Podaj ilość i wymiary okien
    </p>
  </div>
  <div class="input-container">
    <h2>Ilość i wymiary okien</h2>
    <div style="margin-left: 16px; margin-right: 16px;" class="input-group">
    <span>Ilość okien: <span id="windowCounter">0</span></span>
    <button id="addWindowBtn" type="button">Dodaj okno</button></div>
    <div id="windowsContainer"></div>`;
	return slide.trim();
};

const slideWalls = () => {
	const slide = ` <div class="info-container">
    <h2 style="text-align:center; margin-bottom: 2rem;">Technicznie: ściany</h2>
    <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://www.checkatrade.com/blog/wp-content/uploads/2020/08/Feature-cost-to-build-a-brick-wall.jpg">
    <p style="text-align:center; margin-top: 2rem; font-style: italic;">
    Z jakich materiałów są ściany?
    </p>
  </div>
  <div class="input-container">
    <h2>Ściany</h2>
    <div class="input-group">
      <label for="WallsMaterialInput">Materiał</label>
      <select id="WallsMaterialInput">
        <option value="Cegła ceramiczna">Cegła ceramiczna</option>
        <option value="Cegła silikatowa">Cegła silikatowa</option>
        <option value="Bloczek z betonu komórkowego">Bloczek z betonu komórkowego</option>
        <option value="Żelbet">Żelbet</option>
        <option value="Drewno">Drewno</option>
      </select>
    </div>
    <div class="input-group">
      <label for="WallsThincknessInput">Grubość<span class="unit"> [m]</span></label>
      <input id="WallsThincknessInput" type="number" value="0.35" step="0.05" min="0.1" max="5" required="true" />
    </div>
    <div class="input-group izol">
     <div class="input-group check">
      <label for="WallsInsulationCheckbox">Izolacja</label>
      <input id="WallsInsulationCheckbox" type="checkbox" required="true" />
     </div>
      <div class="wallInsulation-group">
        <div class="input-group">
        <label for="WallsInsulationInput">Materiał</label>
        <select id="WallsInsulationInput" disabled="true">
          <option value="Styropian">Styropian</option>
          <option value="Wełna mineralna">Wełna mineralna</option>
        </select></div>
       <div class="input-group">
       <label for="WallsInsulationThincknessInput">Grubość<span class="unit"> [m]</span></label>
       <input id="WallsInsulationThincknessInput" disabled="true" type="number" value="0.25" step="0.05" min="0.05" max="3" required="true" /></div>
      </div>
    </div>`;
	return slide.trim();
};

const slideRoof = () => {
	const slide = `<div class="info-container">
    <h2 style="text-align:center; margin-bottom: 2rem;">Dach</h2>
    <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://us.123rf.com/450wm/thefutureis/thefutureis1903/thefutureis190300164/120927222-modern-house-with-chimney-red-clay-tiled-roof-and-gable-and-valley-type-of-roof-construction-buildin.jpg?ver=6">
    <p style="text-align:center; margin-top: 2rem; font-style: italic;">
      Aplikacja nie liczy całej więźby i stropu, natomiast jego ocieplenie.
    </p>
  </div>
  <div class="input-container">
    <h2>Dach</h2>
    <div class="input-group roofgr">
      <div class="roofInsulation-group">
       <div class="input-group">
       <label for="RoofInsulationInput">Materiał izolacji</label>
       <select id="RoofInsulationInput">
         <option value="Styropian">Styropian</option>
         <option value="Wełna mineralna">Wełna mineralna</option>
       </select></div>
        <div class="input-group">
        <label for="RoofInsulationThincknessInput">Grubość<span class="unit"> [m]</span></label>
        <input id="RoofInsulationThincknessInput" type="number" value="0.30" step="0.05" min="0.05" max="3" required="true" />
        </div>
      </div>
    </div>`;
	return slide.trim();
};

const slideTemperatures = () => {
	const slide = `<div class="info-container">
    <h2 style="text-align:center; margin-bottom: 2rem;">Temperatury</h2>
    <img style="width:100%; border-radius: 8px; border: 3px solid rgba(0, 50, 89, 0.49); box-shadow: 0 0 20px 5px rgba(0, 50, 89, 0.69), inset 0 0 15px 2px rgba(0, 15, 35, 0.95);" src="https://buythermopro.com/wp-content/uploads/2019/09/where-to-place-outdoor-thermometer.jpg">
    <p style="text-align:center; margin-top: 2rem; font-style: italic;">
      Podaj temperaturę komfortu i temperaturę zewnętrzną
    </p>
  </div>
  <div class="input-container">
    <h2>Temperatury</h2>
    <div class="input-group temp">
      <div class="temperature-group">
        <label for="indoorTemperature">Temperatura wewnętrzna<span class="unit"> [°C]</span></label>
        <input id="indoorTemperature" type="number" value="18" step="1" min="16" max="35" required="true" />
      </div>
      <div class="temperature-group">
        <label for="outdoorTemperature">Temperatura zewnętrzna<span class="unit"> [°C]</span></label>
        <input id="outdoorTemperature" type="number" value="-15" step="1" min="-50" max="15" required="true" />
      </div>
    </div>`;
	return slide.trim();
};

export function storeData(currentSlideId, slides) {
	const current = slides[currentSlideId - 1];
	let lastChild = current.lastChild.previousSibling;
	if (lastChild.nodeType === 3) {
		lastChild = current.lastChild.lastChild;
	}
	if (lastChild.className.includes("input-container")) {
		const button = lastChild.lastChild.previousSibling;
		const id = Number(button.getAttribute("data-button-id"));
		// console.log(lastChild);
		// console.log(id);
		switch (id) {
			case 2:
				setDimesnsions();
				break;
			case 3:
				setWindows(userData);
				break;
			case 4:
				setWalls(userData);
				break;
			case 5:
				setTemperatures();
				break;
			case 6:
				setRoof(userData);
				displayDataSummary(userData);
				break;
			default:
				break;
		}
	}
}
export const userData = {};

function setDimesnsions() {
	const inputHeight = document.getElementById("BuildingHeightInput");
	const inputWidth = document.getElementById("BuildingWidthInput");
	const inputLength = document.getElementById("BuildingLengthinput");
	userData.dimesions = {
		height: inputHeight.value,
		width: inputWidth.value,
		length: inputLength.value,
	};
}

let inT = "";
let onT = "";

function setTemperatures() {
	const inputIndoor = document.getElementById("indoorTemperature");
	const inputOutdoor = document.getElementById("outdoorTemperature");
	const indoorTemperature = Number(inputIndoor.value);
	const outdoorTemperature = Number(inputOutdoor.value);
	inT = indoorTemperature;
	onT = outdoorTemperature;
	userData.deltaTemperature = indoorTemperature - outdoorTemperature;
}

function displayDataSummary(userData) {
	const summaryContainer = document.getElementById("summary-div");
	summaryContainer.replaceChildren("");
	const dimensions = createSummaryElement(`Wymiary budynku: ${userData.dimesions.width}m * ${userData.dimesions.length}m * ${userData.dimesions.height}m`);
	let wallsText = `Ściany: ${userData.wallsArea}m&#178;`;
	if (userData.windowInsulationChecked) {
		let wallsText = `Ściany: ${userData.wallsArea}m&#178;, izolacja: ${userData.inso}`;
	}
	const walls = createSummaryElement(wallsText);
	const temperatures = createSummaryElement(`Temperatury: zewnętrzna: ${onT}°C, wewnętrzna: ${inT}°C`);
	const roof = createSummaryElement(`Pole dachu: ${userData.roofArea}m&#178;, izolacja: ${userData.roofInso}`);

	summaryContainer.appendChild(dimensions);
	if (userData.windowArea && userData.windowArea > 0) {
		const windows = createSummaryElement(`Pole okien: ${userData.windowArea}m&#178;`);
		summaryContainer.appendChild(windows);
	}
	summaryContainer.appendChild(walls);
	summaryContainer.appendChild(temperatures);
	summaryContainer.appendChild(roof);
	console.log(userData);
}

function createSummaryElement(text) {
	const p = document.createElement("p");
	p.innerHTML = text;
	p.style = "line-height: 1.7;font-style: italic;padding: 4px 36px 4px 36px;";
	return p;
}
