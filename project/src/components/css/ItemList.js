import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "items": {
        "display": "flex",
        "flexWrap": "wrap",
        "marginTop": -1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -1
    },
    "item_image": {
        "marginBottom": 10,
        "position": "relative",
        "paddingTop": "100%",
        "backgroundPosition": "50%",
        "backgroundColor": "#303030",
        "backgroundSize": "cover",
        "boxShadow": "0 0 25px rgba(0, 0, 0, .2)"
    },
    "item": {
        "width": "25%",
        "paddingTop": 1,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 1,
        "marginBottom": 35
    },
    "left_item": {
        "textAlign": "left"
    },
    "center_item": {
        "fontWeight": "600",
        "textAlign": "center"
    }
});