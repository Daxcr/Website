const themes = {
    "dark": {
        "--bgColour": "#181818",
        "--bgStrength": "0.1",
        "--textColour": "#ffffff",
        "--subtextColour": "#bebebe",
        "--splashColour": "#777777",
        "--headingColour": "#ffffff",
        "--itemColour": "#303030",
        "--itemShineColour": "#4e4e4e",
        "--itemOutline": "#2b2b2b",
        "--itemShineOutline": "#272727",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#000000",
        "--contentShadow": "#0000003a",
        "--crosshatchStrength": "0.3",
        "--quoteBackground": "#0000009c",
        "--quoteOutline": "#ffffff2a",
        "--quoteColour": "#ffffff"
    },
    "light": {
        "--bgColour": "#b1b1b1",
        "--bgStrength": "1.0",
        "--textColour": "#111111",
        "--subtextColour": "#2e2e2e",
        "--splashColour": "#383838",
        "--headingColour": "#1b1b1b",
        "--itemColour": "#dddddd",
        "--itemShineColour": "#cccccc",
        "--itemOutline": "#bbbbbb",
        "--itemShineOutline": "#aaaaaa",
        "--iconImageBrightness": 0.0,
        "--titleShadow": "#0000006a",
        "--contentShadow": "#00000019",
        "--crosshatchStrength": "0.1",
        "--quoteBackground": "#ffffff9c",
        "--quoteOutline": "#0000002a",
        "--quoteColour": "#000000"
    },
    "midnight": {
        "--bgColour": "#04040e",
        "--bgStrength": "0.1",
        "--textColour": "#c0c8ff",
        "--subtextColour": "#8890cc",
        "--splashColour": "#555588",
        "--headingColour": "#ffffff",
        "--itemColour": "#1a1a3a",
        "--itemShineColour": "#2a2a5a",
        "--itemOutline": "#22224a",
        "--itemShineOutline": "#1a1a3a",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#000000",
        "--contentShadow": "#0000003a",
        "--crosshatchStrength": "0.6",
        "--quoteBackground": "#0000009c",
        "--quoteOutline": "#ffffff2a",
        "--quoteColour": "#ffffff"
    },
    "seaside": {
        "--bgColour": "#4d91a1",
        "--bgStrength": "0.3",
        "--textColour": "#ffdc7a",
        "--subtextColour": "#1b1b31",
        "--splashColour": "#f09851",
        "--headingColour": "#f09851",
        "--itemColour": "#f09851",
        "--itemShineColour": "#ffc38a",
        "--itemOutline": "#3a1010",
        "--itemShineOutline": "#752f13",
        "--iconImageBrightness": 0.0,
        "--titleShadow": "#000833",
        "--contentShadow": "#00000000",
        "--crosshatchStrength": "0.1",
        "--quoteBackground": "#4d91a1",
        "--quoteOutline": "#ffffff00",
        "--quoteColour": "#ffffff"
    },
    "gilded": {
        "--bgColour": "#0a0a0a",
        "--bgStrength": "0.06",
        "--textColour": "#ffae00",
        "--subtextColour": "#ffffff",
        "--splashColour": "#f09851",
        "--headingColour": "#f09851",
        "--itemColour": "#241810",
        "--itemShineColour": "#774c21",
        "--itemOutline": "#ffae00",
        "--itemShineOutline": "#ffcc5d",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#000000",
        "--contentShadow": "#00000083",
        "--crosshatchStrength": "0.3",
        "--quoteBackground": "#0000009c",
        "--quoteOutline": "#ffae00",
        "--quoteColour": "#c5a081"
    },
    "highcontrast": {
        "--bgColour": "#000000",
        "--bgStrength": "0",
        "--textColour": "#0000ff",
        "--subtextColour": "#ffffff",
        "--splashColour": "#ffffff",
        "--headingColour": "#ffff00",
        "--itemColour": "#000000",
        "--itemShineColour": "#000000",
        "--itemOutline": "#ffffff",
        "--itemShineOutline": "#ffffff",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#00000000",
        "--contentShadow": "#00000000",
        "--crosshatchStrength": "0",
        "--quoteBackground": "#000000ff",
        "--quoteOutline": "#aa00ff",
        "--quoteColour": "#ffffff"
    }
};

theme = localStorage.getItem("theme") ?? "dark"
const root = document.documentElement;
for (const [key, val] of Object.entries(themes[theme])) {
    root.style.setProperty(key, val);
}

const switcher = document.getElementById("themeSwitcher");
if (switcher) {
    switcher.value = theme;
    switcher.addEventListener("change", function() {
        const theme = themes[this.value];
        for (const [key, val] of Object.entries(theme)) {
            root.style.setProperty(key, val);
        }
        localStorage.setItem("theme", this.value);
    });
}