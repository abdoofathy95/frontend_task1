import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "main_container_outer": {
        "background": "#191919",
        "height": 100 * vh,
        "display": "flex"
    },
    "left_side": {
        "width": 200,
        "background": "linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .9))",
        "paddingTop": 30,
        "paddingRight": 30,
        "paddingBottom": 30,
        "paddingLeft": 30,
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between"
    },
    "main_content": {
        "flex": 1,
        "overflow": "scroll"
    },
    "logo": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "maxWidth": "100%",
        "height": "auto"
    },
    "main_menu_navigation": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "listStyle": "none"
    },
    "main_menu_navigation link": {
        "paddingLeft": 5,
        "fontWeight": "700",
        "color": "white",
        "opacity": 0.6,
        "transition": "opacity 0.5s ease-in-out"
    },
    "main_menu_navigation link a": {
        "textDecoration": "none",
        "color": "white"
    },
    "main_menu_navigation link:hover": {
        "opacity": 1
    },
    "left_side_user": {
        "fontFamily": "helvetica neue, helvetica",
        "color": "white"
    }
});