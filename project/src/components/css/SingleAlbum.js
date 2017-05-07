import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "main_container_album": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "album_side": {
        "width": 300,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "float": "left",
        "textAlign": "center"
    },
    "button": {
        "backgroundColor": "#2ebd59",
        "color": "#fff",
        "borderRadius": 30,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "display": "inline-block",
        "textTransform": "uppercase",
        "letterSpacing": 2,
        "fontSize": 13,
        "fontWeight": "500",
        "marginRight": 10,
        "transition": "background-color 0.5s ease-in-out"
    },
    "button:hover": {
        "backgroundColor": "#219042",
        "color": "white"
    },
    "album_title": {
        "fontSize": 26,
        "fontWeight": "700"
    },
    "album_total": {
        "fontFamily": "helvetica neue, helvetica",
        "color": "#fff",
        "marginBottom": 1,
        "fontSize": "inherit",
        "lineHeight": 1.6,
        "textRendering": "optimizeLegibility"
    },
    "album_main": {
        "width": "calc(100% - 300px)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "float": "left"
    }
});