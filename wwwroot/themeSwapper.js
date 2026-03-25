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
        "--crosshatchStrength": "0.075",
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
        "--crosshatchStrength": "0.025",
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
        "--crosshatchStrength": "0.15",
        "--quoteBackground": "#0000009c",
        "--quoteOutline": "#ffffff2a",
        "--quoteColour": "#ffffff"
    },
    "ultradark": {
        "--bgColour": "#000000",
        "--bgStrength": "0.24",
        "--textColour": "#ffffff",
        "--subtextColour": "#999999",
        "--splashColour": "#e08383",
        "--headingColour": "#ffffff",
        "--itemColour": "#000000",
        "--itemShineColour": "#1a1a1d",
        "--itemOutline": "#000000",
        "--itemShineOutline": "#4b4b4b",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#000000",
        "--contentShadow": "#0000003a",
        "--crosshatchStrength": "0.15",
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
        "--crosshatchStrength": "0.025",
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
        "--crosshatchStrength": "0.075",
        "--quoteBackground": "#0000009c",
        "--quoteOutline": "#ffae00",
        "--quoteColour": "#c5a081"
    },
    "simulation": {
        "--bgColour": "#c3d4d4",
        "--bgStrength": "0.76",
        "--textColour": "#1281c2",
        "--subtextColour": "#000000",
        "--splashColour": "#214992",
        "--headingColour": "#5196f0",
        "--itemColour": "#e6ffff",
        "--itemShineColour": "#9affff",
        "--itemOutline": "#00ffff",
        "--itemShineOutline": "#00a2ff",
        "--iconImageBrightness": 0.2,
        "--titleShadow": "#0000004a",
        "--contentShadow": "#00000023",
        "--crosshatchStrength": "0.0125",
        "--quoteBackground": "#a3cfe0",
        "--quoteOutline": "#00000000",
        "--quoteColour": "#000000"
    },
    "simulation-dark": {
        "--bgColour": "#101111",
        "--bgStrength": "0.1",
        "--textColour": "#c7f2ff",
        "--subtextColour": "#ffffff",
        "--splashColour": "#bcefff",
        "--headingColour": "#5196f0",
        "--itemColour": "#141d1d",
        "--itemShineColour": "#134242",
        "--itemOutline": "#00ffff",
        "--itemShineOutline": "#00a2ff",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#0000004a",
        "--contentShadow": "#00000023",
        "--crosshatchStrength": "0.0125",
        "--quoteBackground": "#0000004a",
        "--quoteOutline": "#a3cfe0",
        "--quoteColour": "#ffffff"
    },
    "ocean": {
        "--bgColour": "#163655",
        "--bgStrength": "0.12",
        "--textColour": "#ffffff",
        "--subtextColour": "#ffffff",
        "--splashColour": "#bcefff",
        "--headingColour": "#5196f0",
        "--itemColour": "#317a9c",
        "--itemShineColour": "#4396bd",
        "--itemOutline": "#00000000",
        "--itemShineOutline": "#00000000",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#00000031",
        "--contentShadow": "#00000000",
        "--crosshatchStrength": "0.0125",
        "--quoteBackground": "#142a52",
        "--quoteOutline": "#00000000",
        "--quoteColour": "#ffffff"
    },
    "ember": {
        "--bgColour": "#160c0c",
        "--bgStrength": "0.07",
        "--textColour": "#e69346",
        "--subtextColour": "#fff0c5",
        "--splashColour": "#ffd993",
        "--headingColour": "#e97426",
        "--itemColour": "#2e100e",
        "--itemShineColour": "#85382e",
        "--itemOutline": "#e2953c",
        "--itemShineOutline": "#ec5b17",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#00000031",
        "--contentShadow": "#00000000",
        "--crosshatchStrength": "0.05",
        "--quoteBackground": "#2e100e",
        "--quoteOutline": "#e2953c",
        "--quoteColour": "#ffffff"
    },
    "soft": {
        "--bgColour": "#2d2841",
        "--bgStrength": "0.08",
        "--textColour": "#d8a497",
        "--subtextColour": "#ffddd4",
        "--splashColour": "#ffb293",
        "--headingColour": "#ffcf69",
        "--itemColour": "#693f6d",
        "--itemShineColour": "#87508b",
        "--itemOutline": "#00000000",
        "--itemShineOutline": "#00000000",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#00000000",
        "--contentShadow": "#00000000",
        "--crosshatchStrength": "0.0",
        "--quoteBackground": "#693f6d",
        "--quoteOutline": "#00000000",
        "--quoteColour": "#ffffff"
    },
    "bloodmoon": {
        "--bgColour": "#330000",
        "--bgStrength": "0.065",
        "--textColour": "#ca3d3d",
        "--subtextColour": "#ffc0c0",
        "--splashColour": "#f37d7d",
        "--headingColour": "#f37d7d",
        "--itemColour": "#851d1d",
        "--itemShineColour": "#b14141",
        "--itemOutline": "#851d1d00",
        "--itemShineOutline": "#851d1d00",
        "--iconImageBrightness": 1.0,
        "--titleShadow": "#000000",
        "--contentShadow": "#00000083",
        "--crosshatchStrength": "0.2",
        "--quoteBackground": "#0000004c",
        "--quoteOutline": "#000000",
        "--quoteColour": "#ee9494"
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

const root = document.documentElement;
const mframe = document.getElementById("frame");

function applyTheme(themeName) {
    const theme = themes[themeName];
    for (const [key, val] of Object.entries(theme)) {
        root.style.setProperty(key, val);
    }
    mframe?.contentWindow?.postMessage({
        type: "theme", theme: theme
    }, "*");
    localStorage.setItem("theme", themeName);
}

let themeName = localStorage.getItem("theme") ?? "dark";
applyTheme(themeName);

mframe?.addEventListener("load", function() {
    mframe.contentWindow?.postMessage({
        type: "theme", theme: themes[themeName]
    }, "*");
});

const switcher = document.getElementById("themeSwitcher");
if (switcher) {
    switcher.value = themeName;
    switcher.addEventListener("change", function() {
        themeName = this.value;
        applyTheme(themeName);
    });
}