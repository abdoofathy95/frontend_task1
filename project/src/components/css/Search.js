import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "main_container": {
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30
    },
    "main_container title": {
        "fontWeight": "700"
    },
    "main_container search_input": {
        "marginBottom": 20
    },
    "main_container search_input input": {
        "borderRadius": 25,
        "border": "none",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "width": 300,
        "outlineWidth": 0
    }
});