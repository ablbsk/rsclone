import { IViewSetting } from "../interfaces/configurator";

const configuratorSettings = (type: string): IViewSetting[] => {
  switch (type) {
    case "plains":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "PTN309":
    case "PTN310":
    case "PTN312":
    case "PTN318":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "CENT507":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "color",
          name: "colorThree",
          title: "Color Set Three",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "CENT512":
    case "CENT516":
    case "CENT517":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "CENT520":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "PLN802":
    case "PLN803":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];

    case "PLN804":
    case "PLN805":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "Tartan001":
    case "Tartan005":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "color",
          name: "colorThree",
          title: "Color Set Three",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "Tartan004":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "color",
          name: "colorThree",
          title: "Color Set Three",
        },
        {
          type: "color",
          name: "colorFour",
          title: "Color Set Four",
        },
        {
          type: "color",
          name: "colorFive",
          title: "Color Set Five",
        },
        {
          type: "color",
          name: "colorSix",
          title: "Color Set Six",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "Tartan002":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "color",
          name: "colorThree",
          title: "Color Set Three",
        },
        {
          type: "color",
          name: "colorFour",
          title: "Color Set Four",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];

    case "Tartan003":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "DOT701":
    case "DOT706":
    case "DOT707":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "DOT702":
    case "DOT705":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "STR309":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
    case "STR301":
    case "STR307":
    case "STR312":
    case "STR313":
    case "STR324":
    case "STR326":
    case "STR327":
    case "STR328":
    case "STR329":
    case "STR330":
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "color",
          name: "colorOne",
          title: "Color Set One",
        },
        {
          type: "color",
          name: "colorTwo",
          title: "Color Set Two",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];

    default:
      return [
        {
          type: "color",
          name: "bgColor",
          title: "Apply Base Color",
        },
        {
          type: "weave",
          name: "weave",
          title: "Weave",
        },
      ];
  }
};

export default configuratorSettings;
