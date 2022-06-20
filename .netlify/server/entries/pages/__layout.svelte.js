import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index-2b1c4163.js";
import "smoothscroll-polyfill";
import { t as themeColor, H as Heading, I as Icon } from "../../chunks/Heading-2390e4f5.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabColors;
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  let { darkmodeIcon = "" } = $$props;
  let { theme = "" } = $$props;
  let { navVisibility = "" } = $$props;
  let { darkMode } = $$props;
  let { lightMode } = $$props;
  if ($$props.darkmodeIcon === void 0 && $$bindings.darkmodeIcon && darkmodeIcon !== void 0)
    $$bindings.darkmodeIcon(darkmodeIcon);
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  if ($$props.navVisibility === void 0 && $$bindings.navVisibility && navVisibility !== void 0)
    $$bindings.navVisibility(navVisibility);
  if ($$props.darkMode === void 0 && $$bindings.darkMode && darkMode !== void 0)
    $$bindings.darkMode(darkMode);
  if ($$props.lightMode === void 0 && $$bindings.lightMode && lightMode !== void 0)
    $$bindings.lightMode(lightMode);
  tabColors = {
    calories: ["100", "500"],
    gym: ["100", "500"],
    settings: ["100", "500"]
  };
  $$unsubscribe_themeColor();
  return `<div class="${"sm:h-screen w-screen sm:w-max " + escape(navVisibility) + " flex flex-row sm:flex-col bg-" + escape($themeColor) + "-200 items-center justify-between px-10 sm:px-3 py-4"}"><div class="${"hidden sm:inline-block"}">${validate_component(Heading, "Heading").$$render($$result, {
    size: "text-sm sm:text-lg md:text-xl lg:text-2xl",
    beforeHighlight: "MrMeal",
    themeColored: true
  }, {}, {})}</div>
  <div class="${"w-full sm:w-max flex flex-row sm:flex-col sm:space-y-4 justify-between items-center"}"><div class="${"flex flex-col items-center transition duration-500 group"}"><a href="${"/calories"}" class="${"overflow-hidden group transition md:group duration-100 transform md:scale-90 md:group-hover:scale-100 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full bg-" + escape($themeColor) + "-" + escape(tabColors["calories"][0]) + " text-" + escape($themeColor) + "-" + escape(tabColors["calories"][1]) + " border border-" + escape($themeColor) + "-500 group-hover:bg-" + escape($themeColor) + "-500 group-hover:text-" + escape($themeColor) + "-200"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "fire" }, {}, {})}</a>
      <div class="${"invisible hidden sm:inline-block group-hover:visible font-light text-" + escape($themeColor) + "-500 transition duration-500"}"><p>Meals</p></div></div>
    
    <div><div class="${"flex flex-col items-center transition duration-500 group"}"><a href="${"/settings"}" class="${"overflow-hidden group transition md:group duration-100 transform md:scale-90 md:group-hover:scale-100 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full bg-" + escape($themeColor) + "-" + escape(tabColors["settings"][0]) + " text-" + escape($themeColor) + "-" + escape(tabColors["settings"][1]) + " border border-" + escape($themeColor) + "-500 group-hover:bg-" + escape($themeColor) + "-500 group-hover:text-" + escape($themeColor) + "-200"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "settings" }, {}, {})}</a>
        <div class="${"invisible hidden sm:inline-block group-hover:visible font-light text-" + escape($themeColor) + "-500 transition duration-500"}"><p>Settings</p></div></div></div>
    <div><div class="${"flex flex-col items-center transition duration-500 group"}"><button class="${"overflow-hidden group transition md:group duration-100 transform md:scale-90 md:group-hover:scale-100 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex justify-center items-center rounded-full bg-" + escape($themeColor) + "-100 text-" + escape($themeColor) + "-500 border border-" + escape($themeColor) + "-500 group-hover:bg-" + escape($themeColor) + "-500 group-hover:text-" + escape($themeColor) + "-200"}">${validate_component(Icon, "Icon").$$render($$result, {
    icon: darkmodeIcon,
    action: () => {
      theme == "dark" ? lightMode() : darkMode();
    }
  }, {}, {})}</button>
        <div class="${"invisible hidden sm:inline-block group-hover:visible font-light text-" + escape($themeColor) + "-500 transition duration-500"}"><p>Theme</p></div></div></div></div></div>
`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let darkmodeIcon;
  let darkmodeClass;
  let theme;
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  let lightMode = () => {
    theme = "light";
    localStorage.setItem("theme", "light");
    document.getElementById("body").classList.remove("dark");
    localStorage.setItem("darkmodeIcon", "moon");
    darkmodeIcon = localStorage.getItem("darkmodeIcon");
    localStorage.setItem("darkmodeClass", "");
    darkmodeClass = localStorage.getItem("darkmodeClass");
  };
  let darkMode = () => {
    theme = "dark";
    localStorage.setItem("theme", "dark");
    document.getElementById("body").classList.add("dark");
    localStorage.setItem("darkmodeIcon", "sun");
    darkmodeIcon = localStorage.getItem("darkmodeIcon");
    localStorage.setItem("darkmodeClass", "invert filter -hue-rotate-180 contrast-90 brightness-90");
    darkmodeClass = localStorage.getItem("darkmodeClass");
  };
  darkmodeIcon = "";
  darkmodeClass = "";
  theme = "";
  $$unsubscribe_themeColor();
  return `<div class="${escape(darkmodeClass) + " flex flex-col-reverse sm:flex-row justify-between overflow-hidden w-screen h-screen bg-" + escape($themeColor) + "-50 saturate-150 contrast-110"}">${validate_component(Nav, "Nav").$$render($$result, { darkMode, lightMode, darkmodeIcon, theme }, {}, {})}
  <div class="${"w-full h-screen overflow-y-scroll my-auto flex flex-col mx-auto sm:space-y-10"}"><div class="${"w-max mx-auto my-auto sm:space-y-10 space-y-5 py-10 sm:py-20 "}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
export { _layout as default };
