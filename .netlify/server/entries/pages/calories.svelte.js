import { c as create_ssr_component, a as subscribe, d as createEventDispatcher, e as escape, v as validate_component, f as each, g as add_attribute } from "../../chunks/index-2b1c4163.js";
import { t as themeColor, I as Icon, H as Heading } from "../../chunks/Heading-2390e4f5.js";
import { D as Divider, B as Button } from "../../chunks/Divider-0f1823aa.js";
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value2) => $themeColor = value2);
  let { option } = $$props;
  createEventDispatcher();
  let { value = "" } = $$props;
  let { isIcon } = $$props;
  let { icon } = $$props;
  let { isLabel } = $$props;
  let { label } = $$props;
  let { placeholder = "Select" } = $$props;
  let { isBg } = $$props;
  let { alterClass } = $$props;
  if ($$props.option === void 0 && $$bindings.option && option !== void 0)
    $$bindings.option(option);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.isIcon === void 0 && $$bindings.isIcon && isIcon !== void 0)
    $$bindings.isIcon(isIcon);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.isLabel === void 0 && $$bindings.isLabel && isLabel !== void 0)
    $$bindings.isLabel(isLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.isBg === void 0 && $$bindings.isBg && isBg !== void 0)
    $$bindings.isBg(isBg);
  if ($$props.alterClass === void 0 && $$bindings.alterClass && alterClass !== void 0)
    $$bindings.alterClass(alterClass);
  $$unsubscribe_themeColor();
  return `${isBg ? `${isLabel ? `${isIcon ? `<div class="${"space-y-1 w-full"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label>
        <div class="${"flex items-center " + escape(alterClass) + " w-full bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0"}"><div class="${"flex items-center justify-center w-10 h-10"}">${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</div>
          <select style="${"-webkit-appearance: none;"}" class="${"border-0 bg-transparent focus:border-0 focus:ring-0 w-full placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400"}" name="${"dropdown"}" id="${"dropdown"}"><option value="${""}" disabled selected>${escape(placeholder)}</option>${each(option, (opt) => {
    return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
  })}</select></div></div>` : `<div class="${"space-y-1"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label>
        <select style="${"-webkit-appearance: none;"}" class="${escape(alterClass) + " w-6/12 bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-full sm:rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0 placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400"}" name="${"dropdown"}" id="${"dropdown"}"><option value="${""}" disabled selected>${escape(placeholder)}</option>${each(option, (opt) => {
    return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
  })}</select></div>`}` : `<select style="${"-webkit-appearance: none;"}" class="${escape(alterClass) + " w-6/12 bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-full sm:rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0 placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400"}" name="${"dropdown"}" id="${"dropdown"}"><option value="${""}" disabled selected>${escape(placeholder)}</option>${each(option, (opt) => {
    return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
  })}</select>`}` : `${isLabel ? `<div class="${"space-y-1"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label>
    <select style="${"-webkit-appearance: none;"}" class="${escape(alterClass) + " w-6/12 text-" + escape($themeColor) + "-400 border-b bg-transparent border-0 border-" + escape($themeColor) + "-500 focus:border-" + escape($themeColor) + "-500 focus:ring-0 focus:outline-0 placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400"}" name="${"dropdown"}" id="${"dropdown"}"><option value="${""}" disabled selected>${escape(placeholder)}</option>${each(option, (opt) => {
    return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
  })}</select></div>` : `<select style="${"-webkit-appearance: none;"}" class="${escape(alterClass) + " w-6/12 text-" + escape($themeColor) + "-400 border-b bg-transparent border-0 border-" + escape($themeColor) + "-500 focus:border-" + escape($themeColor) + "-500 focus:ring-0 focus:outline-0 placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400"}" name="${"dropdown"}" id="${"dropdown"}"><option value="${""}" disabled selected>${escape(placeholder)}</option>${each(option, (opt) => {
    return `<option${add_attribute("value", opt, 0)}>${escape(opt)}</option>`;
  })}</select>`}`}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value2) => $themeColor = value2);
  let { placeholder } = $$props;
  let { isBg = false } = $$props;
  let { alterClass = "" } = $$props;
  let { isLabel = false } = $$props;
  let { label } = $$props;
  let { isIcon } = $$props;
  let { icon } = $$props;
  createEventDispatcher();
  let { value = "" } = $$props;
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.isBg === void 0 && $$bindings.isBg && isBg !== void 0)
    $$bindings.isBg(isBg);
  if ($$props.alterClass === void 0 && $$bindings.alterClass && alterClass !== void 0)
    $$bindings.alterClass(alterClass);
  if ($$props.isLabel === void 0 && $$bindings.isLabel && isLabel !== void 0)
    $$bindings.isLabel(isLabel);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.isIcon === void 0 && $$bindings.isIcon && isIcon !== void 0)
    $$bindings.isIcon(isIcon);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$unsubscribe_themeColor();
  return `${isBg ? `${isLabel ? `${isIcon ? `<div class="${"space-y-1 w-full"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label>
        <div class="${"flex items-center " + escape(alterClass) + " w-full bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0"}"><div class="${"flex items-center justify-center w-10 h-10"}">${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</div>
          <input id="${"input"}" class="${"placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 border-0 bg-transparent focus:border-0 focus:ring-0 w-full"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}></div></div>` : `<div class="${"space-y-1"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label><input id="${"input"}" class="${escape(alterClass) + " w-full placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-full sm:rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}></div>`}` : `<input class="${escape(alterClass) + " w-full placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 bg-" + escape($themeColor) + "-100 shadow-inner text-" + escape($themeColor) + "-400 border rounded-full sm:rounded-lg border-" + escape($themeColor) + "-300 focus:border-" + escape($themeColor) + "-400 focus:ring-0 focus:outline-0"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>`}` : `${isLabel ? `<div class="${"space-y-1"}"><label class="${"font-thin uppercase"}" for="${"input"}">${escape(label)}</label>
    <input class="${escape(alterClass) + " w-full placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 border-b bg-transparent border-0 border-" + escape($themeColor) + "-500 focus:border-" + escape($themeColor) + "-500 focus:ring-0 focus:outline-0"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}></div>` : `<input class="${escape(alterClass) + " w-full placeholder-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 text-" + escape($themeColor) + "-400 border-b bg-transparent border-0 border-" + escape($themeColor) + "-500 focus:border-" + escape($themeColor) + "-500 focus:ring-0 focus:outline-0"}"${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}>`}`}`;
});
const Calories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let age;
  let height;
  let weight;
  let gender;
  let goal;
  let exerciseLevel;
  let foodPreferences;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    age = "";
    height = "";
    weight = "";
    gender = "";
    goal = "";
    exerciseLevel = "";
    foodPreferences = "";
    $$rendered = `${validate_component(Heading, "Heading").$$render($$result, {
      basictitle: true,
      alterClasses: "text-center font-thin text-md sm:text-xl md:text-2xl lg:text-3xl",
      title: "We like to know more about you"
    }, {}, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Input, "Input").$$render($$result, {
      isIcon: true,
      icon: "age",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "age",
      placeholder: "enter your age",
      value: age
    }, {
      value: ($$value) => {
        age = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Input, "Input").$$render($$result, {
      isIcon: true,
      icon: "height",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "height",
      placeholder: "enter your age",
      value: height
    }, {
      value: ($$value) => {
        height = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Input, "Input").$$render($$result, {
      isIcon: true,
      icon: "weight",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "weight",
      placeholder: "enter your age",
      value: weight
    }, {
      value: ($$value) => {
        weight = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Dropdown, "Dropdown").$$render($$result, {
      option: ["Male", "Female", "Other"],
      isIcon: true,
      icon: "gender",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "gender",
      placeholder: "enter your age",
      value: gender
    }, {
      value: ($$value) => {
        gender = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Dropdown, "Dropdown").$$render($$result, {
      option: ["Cut", "Maintain", "Bulk"],
      isIcon: true,
      icon: "flag",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "goal",
      placeholder: "enter your age",
      value: goal
    }, {
      value: ($$value) => {
        goal = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Dropdown, "Dropdown").$$render($$result, {
      option: ["1", "2", "3", "4", "5"],
      isIcon: true,
      icon: "run",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "exercise level",
      placeholder: "enter your age",
      value: exerciseLevel
    }, {
      value: ($$value) => {
        exerciseLevel = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
${validate_component(Dropdown, "Dropdown").$$render($$result, {
      option: ["Vegetarian", "Non Vegetarian", "Eggetarian"],
      isIcon: true,
      icon: "food",
      alterClass: "w-full",
      isBg: true,
      isLabel: true,
      label: "Food Preferances",
      placeholder: "enter your age",
      value: foodPreferences
    }, {
      value: ($$value) => {
        foodPreferences = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Divider, "Divider").$$render($$result, {}, {}, {})}
<div>${validate_component(Button, "Button").$$render($$result, {
      altclass: "w-full",
      title: "Continue",
      isUrl: true,
      url: "/meals"
    }, {}, {})}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Calories as default };
