import { c as create_ssr_component, e as escape, a as subscribe, v as validate_component } from "../../chunks/index-2b1c4163.js";
import { H as Heading, I as Icon, s as supabaseKey, a as supabaseUrl, t as themeColor } from "../../chunks/Heading-2390e4f5.js";
import { D as Divider, B as Button } from "../../chunks/Divider-0f1823aa.js";
import "@supabase/supabase-js";
var Circle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".circle.svelte-14upwad{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 15);border-style:solid;border-image:initial;border-radius:50%;animation:var(--duration) linear 0s infinite normal none running svelte-14upwad-rotate}@keyframes svelte-14upwad-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
  map: null
};
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "0.75s" } = $$props;
  let { size = "60" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="${"circle svelte-14upwad"}" style="${"--size: " + escape(size) + escape(unit) + "; --color: " + escape(color) + "; --duration: " + escape(duration)}"></div>`;
});
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
const Meals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let calories;
  let $$unsubscribe_supabaseKey;
  let $$unsubscribe_supabaseUrl;
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_supabaseKey = subscribe(supabaseKey, (value) => value);
  $$unsubscribe_supabaseUrl = subscribe(supabaseUrl, (value) => value);
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  calories = 0;
  $$unsubscribe_supabaseKey();
  $$unsubscribe_supabaseUrl();
  $$unsubscribe_themeColor();
  return `${calories >= 1800 && calories <= 3e3 ? `${`${validate_component(Heading, "Heading").$$render($$result, {
    basictitle: true,
    alterClasses: "text-center font-thin text-md sm:text-xl md:text-2xl lg:text-3xl",
    title: "Hold On! Preparing your Meal Schedule"
  }, {}, {})}
    ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
    <div class="${"flex w-full justify-center items-center"}">${validate_component(Circle, "Circle").$$render($$result, {
    size: "60",
    unit: "px",
    color: "#818181",
    duration: "1s"
  }, {}, {})}</div>`}` : `${validate_component(Heading, "Heading").$$render($$result, {
    basictitle: true,
    alterClasses: "text-center font-thin text-md sm:text-xl md:text-2xl lg:text-3xl",
    title: "Meals Not Available"
  }, {}, {})}
  ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
  <div class="${"text-" + escape($themeColor) + "-400 flex w-full justify-center items-center"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "error" }, {}, {})}</div>
  ${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
  <div class="${"bg-" + escape($themeColor) + "-300/50 text-" + escape($themeColor) + "-500 border-2 border-" + escape($themeColor) + "-300 px-4 py-2 rounded-full"}"><p class="${"text-ellipses"}">Specific Meal Plan Not Available</p></div>`}
${validate_component(Button, "Button").$$render($$result, {
    altclass: "w-full",
    title: "Export",
    isUrl: true,
    url: "/meals"
  }, {}, {})}`;
});
export { Meals as default };
