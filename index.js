var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$reactrouter = require("react-router");
var $ltMAx$react = require("react");
var $ltMAx$muimaterialContainer = require("@mui/material/Container");
var $ltMAx$framermotion = require("framer-motion");
var $ltMAx$muimaterial = require("@mui/material");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










const $3c26fc901e676a2f$export$6d08773d2e66f8f2 = ({ item: item, displayColor: displayColor, width: width, key: key })=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.Reorder).Item, {
        value: item,
        id: item.position,
        className: "color-swatch",
        style: {
            backgroundColor: displayColor,
            width: width
        }
    }, key);
};


function $61d56a60d2084ee1$var$hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function $61d56a60d2084ee1$export$4c15bd42559b811d({ h: h, s: s, L: L }) {
    var r, g, b;
    if (s == 0) r = g = b = L; // achromatic
    else {
        var q = L < 0.5 ? L * (1 + s) : L + s - L * s;
        var p = 2 * L - q;
        r = $61d56a60d2084ee1$var$hue2rgb(p, q, h + 1 / 3) * 255;
        g = $61d56a60d2084ee1$var$hue2rgb(p, q, h) * 255;
        b = $61d56a60d2084ee1$var$hue2rgb(p, q, h - 1 / 3) * 255;
    }
    return {
        r: r,
        g: g,
        b: b
    };
}
function $61d56a60d2084ee1$export$7ec12c2a6122905c(lab) {
    let y = (lab.L + 16) / 116;
    let x = lab.a / 500 + y;
    let z = y - lab.b / 200;
    let r, g, b;
    x = 0.95047 * (x * x * x > 0.008856 ? x * x * x : (x - 16 / 116) / 7.787);
    y = 1.0 * (y * y * y > 0.008856 ? y * y * y : (y - 16 / 116) / 7.787);
    z = 1.08883 * (z * z * z > 0.008856 ? z * z * z : (z - 16 / 116) / 7.787);
    r = x * 3.2406 + y * -1.5372 + z * -0.4986;
    g = x * -0.9689 + y * 1.8758 + z * 0.0415;
    b = x * 0.0557 + y * -0.204 + z * 1.057;
    r = r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r;
    g = g > 0.0031308 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : 12.92 * g;
    b = b > 0.0031308 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : 12.92 * b;
    return {
        r: Math.max(0, Math.min(1, r)) * 255,
        g: Math.max(0, Math.min(1, g)) * 255,
        b: Math.max(0, Math.min(1, b)) * 255
    };
}
function $61d56a60d2084ee1$export$b5ba70b240f8f7f({ r: r, g: g, b: b }) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) h = s = 0; // achromatic
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return {
        h: h,
        s: s,
        L: l
    };
}
function $61d56a60d2084ee1$export$1cd42a60c721c525({ r: r, g: g, b: b }) {
    var r = r / 255, g = g / 255, b = b / 255, x, y, z;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    return {
        L: 116 * y - 16,
        a: 500 * (x - y),
        b: 200 * (y - z)
    };
}





function $9deb429f9baba069$export$f2f87d30efbb36b1({ config: config, onChange: onChange }) {
    const marks = [
        0,
        50,
        100
    ].map((v)=>({
            label: v,
            value: v
        }));
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Box), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
            container: true,
            spacing: 4,
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "h-range-slider",
                            gutterBottom: true,
                            children: "Etendue de luminance"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.lRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    lRange: value
                                }),
                            min: 0,
                            max: 100,
                            marks: marks
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "h-range-slider",
                            gutterBottom: true,
                            children: "Etendue des teintes"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.hRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    hRange: value
                                }),
                            min: 0,
                            max: 100,
                            marks: marks
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "h-range-slider",
                            gutterBottom: true,
                            children: "Etendue de saturation"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.sRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    sRange: value
                                }),
                            min: 0,
                            max: 100,
                            marks: marks
                        })
                    ]
                })
            ]
        })
    });
}





const $432dbfce2a2bf872$var$marks = [
    -127,
    0,
    128
].map((v)=>({
        value: v,
        label: v
    }));
function $432dbfce2a2bf872$export$cc80a09539610414({ config: config, onChange: onChange }) {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Box), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
            container: true,
            spacing: 4,
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "l-range-slider",
                            gutterBottom: true,
                            children: "Luminosity Range"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.lRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    lRange: value
                                }),
                            min: 0,
                            max: 100
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "a-range-slider",
                            gutterBottom: true,
                            children: "Green-red Range"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.aRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    aRange: value
                                }),
                            min: -127,
                            max: 128,
                            marks: $432dbfce2a2bf872$var$marks
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    size: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                            id: "b-range-slider",
                            gutterBottom: true,
                            children: "Blue-Yellow Range"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
                            value: config.bRange,
                            onChange: (_, value)=>onChange({
                                    ...config,
                                    bRange: value
                                }),
                            min: -127,
                            max: 128,
                            marks: $432dbfce2a2bf872$var$marks
                        })
                    ]
                })
            ]
        })
    });
}





function $5bde4d6b2722367f$export$8edddc2fb2fcfb3a({ config: config, onChange: onChange, onShuffle: onShuffle, onSort: onSort, reset: reset }) {
    const bwSwitch = /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Switch), {
        checked: config.displayBW,
        onChange: ()=>onChange({
                ...config,
                displayBW: !config.displayBW
            })
    });
    const hslSwitch = /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Switch), {
        checked: config.useHSL,
        onChange: ()=>onChange({
                ...config,
                useHSL: !config.useHSL
            }),
        label: config.useHSL ? "Use HSL Colorspace" : "Use LAB Colorspace"
    });
    const nItemsSlider = /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Slider), {
        value: config.nItems,
        onChange: (_, value)=>onChange({
                ...config,
                nItems: value
            }),
        min: 5,
        max: 30,
        valueLabelDisplay: "on"
    });
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Box), {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Stack), {
            children: [
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                    container: true,
                    spacing: 4,
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Grid2), {
                            size: 4,
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.FormGroup), {
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.FormControlLabel), {
                                        control: bwSwitch,
                                        label: config.displayBW ? "Switch to color" : "Switch to BW"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.FormControlLabel), {
                                        control: hslSwitch,
                                        label: config.useHSL ? "Switch to LAB Colorspace" : "Switch to HSL Colorspace"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Grid2), {
                            size: 8,
                            children: [
                                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                                    gutterBottom: true,
                                    children: "Number of color swatches"
                                }),
                                nItemsSlider
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Stack), {
                    spacing: 2,
                    direction: "row",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Button), {
                            variant: "contained",
                            onClick: onSort,
                            children: "Reorder"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Button), {
                            variant: "contained",
                            onClick: onShuffle,
                            children: "Shuffle"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Button), {
                            variant: "contained",
                            onClick: reset,
                            children: "Reset"
                        })
                    ]
                })
            ]
        })
    });
}



function $01e6b6346b49dc39$var$randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function $01e6b6346b49dc39$var$initialItemsLAB(n, config) {
    const lRange = config.lRange;
    const stepSize = (lRange[1] - lRange[0]) / n;
    const LABs = Array.from({
        length: n
    }, (_, i)=>({
            L: $01e6b6346b49dc39$var$randomBetween(i * stepSize + lRange[0], i * stepSize + stepSize + lRange[0]),
            a: $01e6b6346b49dc39$var$randomBetween(config.aRange[0], config.aRange[1]),
            b: $01e6b6346b49dc39$var$randomBetween(config.bRange[0], config.bRange[1])
        }));
    const colors = LABs.map((LAB, index)=>{
        const rgb = (0, $61d56a60d2084ee1$export$7ec12c2a6122905c)(LAB);
        const hsl = (0, $61d56a60d2084ee1$export$b5ba70b240f8f7f)(rgb);
        return {
            lab: LAB,
            rgb: (0, $61d56a60d2084ee1$export$7ec12c2a6122905c)(LAB),
            position: index,
            hsl: hsl,
            key: index
        };
    });
    return $01e6b6346b49dc39$var$shuffle(colors);
}
function $01e6b6346b49dc39$var$initialItemsHSL(n, config) {
    const lRange = config.lRange;
    const stepSize = (lRange[1] - lRange[0]) / n;
    const hRange = config.hRange.map((v)=>v / 100);
    const sRange = config.sRange.map((v)=>v / 100);
    const HSLs = Array.from({
        length: n
    }, (_, i)=>({
            L: $01e6b6346b49dc39$var$randomBetween(i * stepSize + lRange[0], i * stepSize + stepSize + lRange[0]) / 100,
            s: $01e6b6346b49dc39$var$randomBetween(sRange[0], sRange[1]),
            h: $01e6b6346b49dc39$var$randomBetween(hRange[0], hRange[1])
        }));
    const colors = HSLs.map((hsl, index)=>{
        const rgb = (0, $61d56a60d2084ee1$export$4c15bd42559b811d)(hsl);
        const lab = (0, $61d56a60d2084ee1$export$1cd42a60c721c525)(rgb);
        return {
            lab: lab,
            rgb: rgb,
            position: index,
            hsl: hsl,
            key: index
        };
    });
    return $01e6b6346b49dc39$var$shuffle(colors);
}
function $01e6b6346b49dc39$var$shuffle(a) {
    const array = [
        ...a
    ];
    let currentIndex = array.length;
    // While there remain elements to shuffle...
    while(currentIndex != 0){
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return [
        ...array
    ];
}
const $01e6b6346b49dc39$var$levenshteinDistance = (s, t)=>{
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for(let i = 0; i <= t.length; i++){
        arr[i] = [
            i
        ];
        for(let j = 1; j <= s.length; j++)arr[i][j] = i === 0 ? j : Math.min(arr[i - 1][j] + 1, arr[i][j - 1] + 1, arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1));
    }
    return arr[t.length][s.length];
};
function $01e6b6346b49dc39$export$86fbec116b87613f() {
    const [score, setScore] = (0, $ltMAx$react.useState)(0);
    const [items, setItems] = (0, $ltMAx$react.useState)([]);
    const [hslConfig, setHSLConfig] = (0, $ltMAx$react.useState)({
        hRange: [
            0,
            100
        ],
        sRange: [
            0,
            100
        ],
        lRange: [
            0,
            100
        ]
    });
    const [labConfig, setLABConfig] = (0, $ltMAx$react.useState)({
        lRange: [
            0,
            100
        ],
        aRange: [
            -127,
            128
        ],
        bRange: [
            -127,
            128
        ]
    });
    const [globalConfig, setGlobalConfig] = (0, $ltMAx$react.useState)({
        useHSL: false,
        displayBW: false,
        nItems: 10
    });
    (0, $ltMAx$react.useEffect)(()=>{
        reset();
    }, [
        globalConfig.nItems,
        hslConfig,
        labConfig
    ]);
    (0, $ltMAx$react.useEffect)(()=>{
        const currentPositions = items.map((item)=>item.position);
        const rightPositions = [
            ...Array(globalConfig.nItems).keys()
        ];
        const distance = $01e6b6346b49dc39$var$levenshteinDistance(currentPositions, rightPositions);
        setScore(globalConfig.nItems - distance);
    }, [
        items
    ]);
    (0, $ltMAx$react.useEffect)(()=>{
        const colorKey = globalConfig.useHSL ? "hsl" : "lab";
        const itemsCopy = items.toSorted((a, b)=>a[colorKey].L > b[colorKey].L);
        const newPositions = Array(globalConfig.nItems);
        if (!itemsCopy.length) return;
        for(let i = 0; i < globalConfig.nItems; i++)newPositions[itemsCopy[i].key] = i;
        setItems(items.map((item)=>({
                ...item,
                position: newPositions[item.key]
            })));
    }, [
        globalConfig.useHSL
    ]);
    const reset = ()=>{
        globalConfig.useHSL ? setItems($01e6b6346b49dc39$var$initialItemsHSL(globalConfig.nItems, hslConfig)) : setItems($01e6b6346b49dc39$var$initialItemsLAB(globalConfig.nItems, labConfig));
    };
    const onReorder = (items)=>{
        setItems(items);
    };
    const sort = ()=>{
        const sorted = items.toSorted((a, b)=>a.position < b.position ? -1 : 1);
        console.log(sorted);
        setItems(sorted);
    };
    const onShuffle = ()=>{
        setItems([
            ...$01e6b6346b49dc39$var$shuffle(items)
        ]);
    };
    const computeDisplayColor = (color)=>{
        const rgb = color.rgb;
        const L = globalConfig.useHSL ? color.hsl.L * 255 : Math.floor(color.lab.L * 2.55);
        return globalConfig.displayBW ? `rgb(${L},${L},${L})` : `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
    };
    const theme = (0, $ltMAx$muimaterial.createTheme)({
        typography: {
            htmlFontSize: 12
        }
    });
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.ThemeProvider), {
        theme: theme,
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.CssBaseline), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($ltMAx$muimaterialContainer))), {
                maxWidth: "xl",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                        children: "D\xe9mo de perception des luminances"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$muimaterial.Typography), {
                        children: "D\xe9placer les blocs de couleurs afin de les trier par ordre de luminances croissantes. Les diff\xe9rents r\xe9glages permettent de faire varier l'\xe9tendue de variation des param\xe8tres des espaces colorim\xe9triques."
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$framermotion.Reorder).Group, {
                        axis: "x",
                        onReorder: onReorder,
                        values: items,
                        children: items.map((item)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $3c26fc901e676a2f$export$6d08773d2e66f8f2), {
                                item: item,
                                displayColor: computeDisplayColor(item),
                                width: `${100 / globalConfig.nItems}%`
                            }, item.key))
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$muimaterial.Stack), {
                        spacing: 2,
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("h2", {
                                children: [
                                    "Configuration de l'espace colorim\xe9trique",
                                    " ",
                                    globalConfig.useHSL ? "HSL" : "LAB"
                                ]
                            }),
                            globalConfig.useHSL && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $9deb429f9baba069$export$f2f87d30efbb36b1), {
                                onChange: setHSLConfig,
                                config: hslConfig
                            }),
                            !globalConfig.useHSL && /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $432dbfce2a2bf872$export$cc80a09539610414), {
                                onChange: setLABConfig,
                                config: labConfig
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                                children: "Autres param\xe8tres"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $5bde4d6b2722367f$export$8edddc2fb2fcfb3a), {
                                config: globalConfig,
                                onChange: setGlobalConfig,
                                onSort: sort,
                                onShuffle: onShuffle,
                                reset: reset
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                        children: "Score"
                    }),
                    score
                ]
            })
        ]
    });
}


const $4fa36e821943b400$var$container = document.getElementById("app");
const $4fa36e821943b400$var$root = (0, $ltMAx$reactdomclient.createRoot)($4fa36e821943b400$var$container);
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reactrouter.BrowserRouter), {
    basename: undefined,
    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $01e6b6346b49dc39$export$86fbec116b87613f), {})
}));


//# sourceMappingURL=index.js.map
