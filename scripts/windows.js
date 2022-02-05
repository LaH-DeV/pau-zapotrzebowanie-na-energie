export default function windowsInit() {
  let index = 0;
  const addWindowBtn = document.getElementById("addWindowBtn");
  const windowsContainer = document.getElementById("windowsContainer");
  const windowCounter = document.getElementById("windowCounter");
  addWindowBtn.addEventListener("click", () => {
    index += 1;

    const inputData = `<div class="input-group">
                  <label for="WindowWidthInput_${index}">Szerokość<span class="unit"> [m]</span></label>
                  <input id="WindowWidthInput_${index}" type="number" step="0.1" value="1.0" min="0.1" max="100" required="true" />
              </div>
              <div class="input-group">
                  <label for="WindowHeightInput_${index}">Wysokość<span class="unit"> [m]</span></label>
                  <input id="WindowHeightInput_${index}" type="number" step="0.1" value="1.0" min="0.1" max="100" required="true" />
              </div>`;

    const windowElement = document.createElement("div");
    windowElement.className = "window";
    windowElement.setAttribute("data-window-id", `${index}`);

    const deleteButton = document.createElement("div");
    deleteButton.textContent = "x";
    deleteButton.className = "window-delete";
    deleteButton.setAttribute("data-delete-id", `${index}`);
    deleteButton.addEventListener("click", deleteWindow);

    windowElement.insertAdjacentHTML("beforeend", inputData);

    windowElement.appendChild(deleteButton);

    windowsContainer.appendChild(windowElement);
    const windows = document.querySelectorAll(".window");
    let windowsCount = windows.length;
    windowCounter.textContent = windowsCount;
  });
}

export function setWindows(userData) {
  const windows = document.querySelectorAll(".window input");
  let sum = 0;
  let widths = [];
  let heights = [];
  if (windows.length > 0) {
    for (let i = 0; i < windows.length; i++) {
      const windowElement = windows[i];
      if (windowElement.id.includes("Width")) {
        widths.push(Number(windowElement.value));
      } else if (windowElement.id.includes("Height")) {
        heights.push(Number(windowElement.value));
      }
    }
    for (let i = 0; i < widths.length; i++) {
      const width = widths[i];
      const height = heights[i];
      sum += width * height;
    }
  }
  userData.windowArea = sum;

  const U = 1.1;
  userData.windowsU = U;
}

function deleteWindow(e) {
  const button = e.target;
  const id = button.getAttribute("data-delete-id");
  const elementWindow = button.parentElement;
  if (elementWindow.getAttribute("data-window-id") === id) {
    const container = elementWindow.parentElement;
    container.removeChild(elementWindow);
    const windowCounter = document.getElementById("windowCounter");
    let windowsCount = Number(windowCounter.textContent);
    windowCounter.textContent = windowsCount - 1;
  }
}
