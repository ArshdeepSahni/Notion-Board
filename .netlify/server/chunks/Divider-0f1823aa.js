import { c as create_ssr_component, a as subscribe, g as add_attribute, e as escape } from "./index-2b1c4163.js";
import { t as themeColor } from "./Heading-2390e4f5.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  let { altclass = "" } = $$props;
  let { title = "" } = $$props;
  let { themeColored = true } = $$props;
  let { color } = $$props;
  let { action } = $$props;
  let { isUrl } = $$props;
  let { url } = $$props;
  if ($$props.altclass === void 0 && $$bindings.altclass && altclass !== void 0)
    $$bindings.altclass(altclass);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.themeColored === void 0 && $$bindings.themeColored && themeColored !== void 0)
    $$bindings.themeColored(themeColored);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.isUrl === void 0 && $$bindings.isUrl && isUrl !== void 0)
    $$bindings.isUrl(isUrl);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$unsubscribe_themeColor();
  return `${isUrl ? `${themeColored ? `<div><a${add_attribute("href", url, 0)}><div class="${escape(altclass) + " text-center w-full font-light px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 transform scale-95 hover:scale-100 border-0 focus:border-0 focus:outline-0 focus:ring-0 hover:outline-0 hover:ring-0 transition duration-300 bg-" + escape($themeColor) + "-500 hover:bg-" + escape($themeColor) + "-600 focus:bg-" + escape($themeColor) + "-600 rounded-lg sm:text-md md:text-lg lg:text-xl dark:text-black text-white"}">${escape(title)}</div></a></div>` : `<div><a${add_attribute("href", url, 0)}><div class="${escape(altclass) + " text-center w-full font-light px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 transform scale-95 hover:scale-100 border border-" + escape(color) + "-500 focus:border-" + escape(color) + "-500 focus:outline-0 focus:ring-0 hover:border-" + escape(color) + "-500 hover:outline-0 hover:ring-0 transition duration-300 bg-" + escape(color) + "-500 filter hover:contrast-200 focus:contrast-200 saturate-150 hover:saturate-50 rounded-lg sm:text-md md:text-lg lg:text-xl dark:text-black text-white"}">${escape(title)}</div></a></div>`}` : `${themeColored ? `<button class="${escape(altclass) + " w-full font-light px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 transform scale-95 hover:scale-100 border-0 focus:border-0 focus:outline-0 focus:ring-0 hover:outline-0 hover:ring-0 transition duration-300 bg-" + escape($themeColor) + "-500 hover:bg-" + escape($themeColor) + "-600 focus:bg-" + escape($themeColor) + "-600 rounded-lg sm:text-md md:text-lg lg:text-xl dark:text-black text-white"}">${escape(title)}</button>` : `<button class="${escape(altclass) + " w-full font-light px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 transform scale-95 hover:scale-100 border border-" + escape(color) + "-500 focus:border-" + escape(color) + "-500 focus:outline-0 focus:ring-0 hover:border-" + escape(color) + "-500 hover:outline-0 hover:ring-0 transition duration-300 bg-" + escape(color) + "-500 filter hover:contrast-200 focus:contrast-200 saturate-150 hover:saturate-50 rounded-lg sm:text-md md:text-lg lg:text-xl dark:text-black text-white"}">${escape(title)}</button>`}`}`;
});
const Divider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  let { color = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$unsubscribe_themeColor();
  return `${color == "" ? `<div><hr class="${"border-" + escape($themeColor) + "-300"}"></div>` : `<div><hr class="${"border-" + escape(color) + "-300"}"></div>`}`;
});
export { Button as B, Divider as D };
