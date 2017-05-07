import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "artist_header": {
        "flexDirection": "column",
        "display": "flex"
    },
    "artist_background_image": {
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "50% 25%",
        "paddingTop": "35%",
        "position": "relative"
    },
    "details_container": {
        "flex": 4,
        "position": "absolute",
        "zIndex": 10,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "details_container followers": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "details_container title": {
        "fontFamily": "helvetica neue",
        "fontSize": 60,
        "lineHeight": 1,
        "marginBottom": 20
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
    "button_transparent": {
        "color": "#fff",
        "borderRadius": 30,
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "border": "1px solid #fff",
        "display": "inline-block",
        "textTransform": "uppercase",
        "letterSpacing": 2,
        "fontSize": 13,
        "transition": "background-color 0.5s ease-in-out",
        "fontWeight": "500",
        "marginRight": 10
    },
    "button_transparent:hover": {
        "backgroundColor": "#191919",
        "color": "white"
    },
    "artist_content": {
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40
    },
    "section_title": {
        "fontWeight": "700"
    },
    "aritst_albums": {
        "backgroundColor": "rgba(0, 0, 0, .3)",
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40
    }
});