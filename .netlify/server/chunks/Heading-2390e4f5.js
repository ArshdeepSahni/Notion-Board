import { n as noop, b as safe_not_equal, c as create_ssr_component, e as escape, a as subscribe } from "./index-2b1c4163.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const themeColor = writable();
themeColor.set("stone");
const supabaseUrl = writable("https://lkywmctcaxwouuanekxe.supabase.co");
supabaseUrl.set("https://lkywmctcaxwouuanekxe.supabase.co");
const supabaseKey = writable("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTM2NjcyNCwiZXhwIjoxOTU2OTQyNzI0fQ.BGgPaxV49Y_IEHFuSZqSLoenUVhVo5DNj4hRG5M_EHM");
supabaseKey.set("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTM2NjcyNCwiZXhwIjoxOTU2OTQyNzI0fQ.BGgPaxV49Y_IEHFuSZqSLoenUVhVo5DNj4hRG5M_EHM");
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classes } = $$props;
  let { icon = "" } = $$props;
  let iconsvg = {
    error: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.00002C14.1583 1.9886 12.3327 2.34293 10.629 3.04245C8.92526 3.74197 7.37737 4.77277 6.07507 6.07507C4.77277 7.37737 3.74197 8.92526 3.04245 10.629C2.34293 12.3327 1.9886 14.1583 2.00002 16C1.9886 17.8417 2.34293 19.6674 3.04245 21.3711C3.74197 23.0748 4.77277 24.6227 6.07507 25.925C7.37737 27.2273 8.92526 28.2581 10.629 28.9576C12.3327 29.6571 14.1583 30.0114 16 30C17.8417 30.0114 19.6674 29.6571 21.3711 28.9576C23.0748 28.2581 24.6227 27.2273 25.925 25.925C27.2273 24.6227 28.2581 23.0748 28.9576 21.3711C29.6571 19.6674 30.0114 17.8417 30 16C30.0114 14.1583 29.6571 12.3327 28.9576 10.629C28.2581 8.92526 27.2273 7.37737 25.925 6.07507C24.6227 4.77277 23.0748 3.74197 21.3711 3.04245C19.6674 2.34293 17.8417 1.9886 16 2.00002V2.00002ZM21.445 23L9.00002 10.556L10.556 9.00002L23 21.445L21.445 23Z" fill="currentColor"/>
</svg>
`,
    user: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.344 8.89239C20.344 11.6835 18.0814 13.9461 15.2903 13.9461C12.4991 13.9461 10.2365 11.6835 10.2365 8.89239C10.2365 6.10127 12.4991 3.83862 15.2903 3.83862C18.0814 3.83862 20.344 6.10127 20.344 8.89239Z" stroke="currentColor" stroke-width="3.03226" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.2903 17.7365C10.4058 17.7365 6.44617 21.6961 6.44617 26.5806H24.1343C24.1343 21.6961 20.1747 17.7365 15.2903 17.7365Z" stroke="currentColor" stroke-width="3.03226" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    fire: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66675 16C2.66675 8.63596 8.63608 2.66663 16.0001 2.66663V5.33329H26.6667V16H29.3334C29.3334 23.364 23.3641 29.3333 16.0001 29.3333C8.63608 29.3333 2.66675 23.364 2.66675 16ZM24.0001 16H21.3334V10.6666H16.0001V7.99996C14.4178 7.99996 12.8711 8.46915 11.5555 9.3482C10.2399 10.2273 9.21455 11.4767 8.60905 12.9385C8.00354 14.4003 7.84512 16.0088 8.1538 17.5607C8.46248 19.1125 9.22441 20.538 10.3432 21.6568C11.462 22.7756 12.8875 23.5376 14.4394 23.8462C15.9912 24.1549 17.5997 23.9965 19.0615 23.391C20.5234 22.7855 21.7728 21.7601 22.6518 20.4445C23.5309 19.1289 24.0001 17.5822 24.0001 16V16Z" fill="currentColor"/>
</svg>`,
    gym: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.4 6H25.6V25.6923H22.4V16.8308H9.6V25.6923H6.4V6H9.6V14.8615H22.4V6ZM1.6 14.8615V8.95385H4.8V22.7385H1.6V16.8308H0V14.8615H1.6ZM32 16.8308H30.4V22.7385H27.2V8.95385H30.4V14.8615H32V16.8308Z" fill="currentColor"/>
</svg>`,
    settings: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9999 1.33337L28.6666 8.66671V23.3334L15.9999 30.6667L3.33325 23.3334V8.66671L15.9999 1.33337ZM15.9999 20C17.0608 20 18.0782 19.5786 18.8283 18.8285C19.5785 18.0783 19.9999 17.0609 19.9999 16C19.9999 14.9392 19.5785 13.9218 18.8283 13.1716C18.0782 12.4215 17.0608 12 15.9999 12C14.9391 12 13.9216 12.4215 13.1715 13.1716C12.4213 13.9218 11.9999 14.9392 11.9999 16C11.9999 17.0609 12.4213 18.0783 13.1715 18.8285C13.9216 19.5786 14.9391 20 15.9999 20V20Z" fill="currentColor"/>
</svg>
`,
    moon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22V2Z" fill="currentColor"/>
</svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C13.9778 2 15.9112 2.58649 17.5557 3.6853C19.2002 4.78412 20.4819 6.3459 21.2388 8.17317C21.9957 10.0004 22.1937 12.0111 21.8079 13.9509C21.422 15.8907 20.4696 17.6725 19.0711 19.0711C17.6725 20.4696 15.8907 21.422 13.9509 21.8079C12.0111 22.1937 10.0004 21.9957 8.17317 21.2388C6.3459 20.4819 4.78412 19.2002 3.6853 17.5557C2.58649 15.9112 2 13.9778 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2V2Z" fill="currentColor"/>
</svg>
`,
    rightArrow: `<svg class="transform rotate-90" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.686 4.97712C17.598 4.87301 17.4883 4.78936 17.3647 4.73198C17.241 4.67459 17.1063 4.64487 16.97 4.64487C16.8337 4.64487 16.699 4.67459 16.5754 4.73198C16.4517 4.78936 16.3421 4.87301 16.2541 4.97711L8.22648 14.4652C7.711 15.0741 8.14428 16.008 8.94243 16.0085L11.7214 16.0085C11.92 16.0087 12.1105 16.0877 12.251 16.2282C12.3915 16.3687 12.4705 16.5592 12.4707 16.7579L12.4734 24.8831C12.4735 25.1316 12.5722 25.3698 12.748 25.5456C12.9237 25.7213 13.162 25.82 13.4105 25.8201L20.5328 25.8223C20.6559 25.8223 20.7779 25.798 20.8916 25.7509C21.0054 25.7038 21.1088 25.6348 21.1958 25.5477C21.2829 25.4606 21.352 25.3572 21.3991 25.2435C21.4462 25.1297 21.4704 25.0078 21.4704 24.8846L21.4704 16.7579C21.4704 16.559 21.5495 16.3683 21.6901 16.2277C21.8307 16.087 22.0214 16.008 22.2203 16.008L24.9992 16.008C25.7979 16.008 26.2312 15.0741 25.7152 14.4647L17.6865 4.97659L17.686 4.97712ZM15.1096 4.00767C15.3384 3.73719 15.6235 3.51984 15.9449 3.37076C16.2663 3.22168 16.6163 3.14445 16.9706 3.14445C17.3248 3.14445 17.6749 3.22168 17.9963 3.37076C18.3176 3.51984 18.6027 3.73719 18.8315 4.00767L26.8602 13.4969C28.2003 15.081 27.0744 17.5083 24.9992 17.5088L22.9702 17.5088L22.9702 24.8857C22.9702 25.2059 22.9072 25.5229 22.7847 25.8187C22.6622 26.1145 22.4827 26.3833 22.2563 26.6097C22.0299 26.8361 21.7611 27.0157 21.4653 27.1382C21.1695 27.2607 20.8524 27.3237 20.5323 27.3236L13.4094 27.3199C12.7632 27.3198 12.1434 27.063 11.6865 26.606C11.2295 26.149 10.9727 25.5293 10.9725 24.8831L10.9704 17.5083L8.94083 17.5078C6.86565 17.5083 5.73923 15.0804 7.08044 13.4963L15.1091 4.00714L15.1096 4.00767Z" fill="currentColor"/>
<defs>
<clipPath id="clip0_160_1759">
<rect width="24" height="24" fill="none" transform="translate(0 16.9706)"/>
</clipPath>
</defs>
</svg>
`,
    leftArrow: `<svg class="transform rotate-0" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.84238 16.3481C4.73828 16.4361 4.65463 16.5458 4.59724 16.6694C4.53986 16.7931 4.51013 16.9277 4.51013 17.064C4.51013 17.2004 4.53986 17.335 4.59724 17.4587C4.65463 17.5823 4.73828 17.692 4.84238 17.78L14.3305 25.8076C14.9393 26.3231 15.8732 25.8898 15.8738 25.0917L15.8738 22.3127C15.8739 22.114 15.953 21.9235 16.0934 21.783C16.2339 21.6425 16.4244 21.5635 16.6231 21.5634L24.7483 21.5607C24.9968 21.5606 25.2351 21.4618 25.4108 21.2861C25.5865 21.1104 25.6853 20.8721 25.6854 20.6236L25.6875 13.5013C25.6876 13.3782 25.6633 13.2562 25.6162 13.1425C25.5691 13.0287 25.5 12.9253 25.4129 12.8383C25.3259 12.7512 25.2225 12.6821 25.1087 12.635C24.995 12.5879 24.873 12.5636 24.7499 12.5637L16.6231 12.5637C16.4243 12.5636 16.2335 12.4846 16.0929 12.344C15.9523 12.2034 15.8733 12.0127 15.8732 11.8138L15.8733 9.03485C15.8733 8.23617 14.9393 7.80289 14.33 8.3189L4.84185 16.3476L4.84238 16.3481ZM3.87294 18.9244C3.60246 18.6956 3.38511 18.4106 3.23603 18.0892C3.08695 17.7678 3.00972 17.4178 3.00972 17.0635C3.00972 16.7092 3.08695 16.3592 3.23603 16.0378C3.38511 15.7164 3.60246 15.4314 3.87294 15.2026L13.3621 7.17392C14.9462 5.83378 17.3736 6.95967 17.3741 9.03485L17.3741 11.0639L24.751 11.0639C25.0711 11.0638 25.3882 11.1269 25.684 11.2494C25.9798 11.3718 26.2486 11.5514 26.475 11.7778C26.7014 12.0042 26.8809 12.273 27.0034 12.5688C27.1259 12.8646 27.189 13.1816 27.1889 13.5018L27.1852 20.6247C27.185 21.2709 26.9282 21.8907 26.4713 22.3476C26.0143 22.8046 25.3946 23.0614 24.7483 23.0615L17.3736 23.0637L17.373 25.0932C17.3736 27.1684 14.9457 28.2948 13.3616 26.9536L3.87241 18.925L3.87294 18.9244Z" fill="currentColor"/>
<defs>
<clipPath id="clip0_168_1778">
<rect fill="none" transform="translate(16.9706 33.9412)"/>
</clipPath>
</defs>
</svg>
`,
    age: `<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2903 8.89253C16.6927 8.89253 17.8172 7.75544 17.8172 6.36565C17.8172 5.88555 17.6908 5.44334 17.4508 5.06431L15.2903 1.31189L13.1298 5.06431C12.8897 5.44334 12.7634 5.88555 12.7634 6.36565C12.7634 7.75544 13.9005 8.89253 15.2903 8.89253ZM22.8709 12.6829H16.5537V10.156H14.0268V12.6829H7.70963C5.61232 12.6829 3.91931 14.3759 3.91931 16.4732V27.8441C3.91931 28.539 4.48786 29.1076 5.18275 29.1076H25.3978C26.0927 29.1076 26.6612 28.539 26.6612 27.8441V16.4732C26.6612 14.3759 24.9682 12.6829 22.8709 12.6829ZM24.1344 26.5807H6.44619V22.7904C7.58329 22.7777 8.66985 22.3229 9.47845 21.5143L10.8556 20.1624L12.2075 21.5143C13.8626 23.1694 16.7432 23.1568 18.3857 21.5143L19.7502 20.1624L21.1021 21.5143C21.9107 22.3229 22.9973 22.7777 24.1344 22.7904V26.5807ZM24.1344 20.8952C23.49 20.8826 22.8836 20.6425 22.4287 20.1751L19.7376 17.4839L17.0338 20.1751C16.0989 21.11 14.469 21.11 13.5341 20.1751L10.843 17.4839L8.1392 20.1751C7.697 20.6299 7.09055 20.8826 6.44619 20.8952V16.4732C6.44619 15.7783 7.01474 15.2097 7.70963 15.2097H22.8709C23.5658 15.2097 24.1344 15.7783 24.1344 16.4732V20.8952Z" fill="currentColor"/>
</svg>
`,
    height: `<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5537 9.23485H20.344L15.2902 4.19373L10.2365 9.23485H14.0268V21.8945H10.2365L15.2902 26.9357L20.344 21.8945H16.5537V9.23485Z" fill="currentColor"/>
</svg>
`,
    weight: `<svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.1344 4.54846H6.44619C5.05641 4.54846 3.91931 5.68556 3.91931 7.07534V24.7635C3.91931 26.1533 5.05641 27.2904 6.44619 27.2904H24.1344C25.5242 27.2904 26.6612 26.1533 26.6612 24.7635V7.07534C26.6612 5.68556 25.5242 4.54846 24.1344 4.54846ZM24.1344 24.7635H6.44619V7.07534H24.1344V24.7635ZM15.2903 8.33878C13.193 8.33878 11.5 10.0318 11.5 12.1291C11.5 14.2264 13.193 15.9194 15.2903 15.9194C17.3876 15.9194 19.0806 14.2264 19.0806 12.1291C19.0806 10.0318 17.3876 8.33878 15.2903 8.33878ZM14.0268 12.7608H12.7634V11.4974H14.0268V12.7608ZM15.922 12.7608H14.6586V11.4974H15.922V12.7608ZM17.8172 12.7608H16.5537V11.4974H17.8172V12.7608Z" fill="currentColor"/>
</svg>
`,
    gender: `<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3594 10.2155C17.797 10.2155 19.7799 12.1985 19.7799 14.6361C19.7799 17.0737 17.797 19.0567 15.3594 19.0567C12.9217 19.0567 10.9388 17.0737 10.9388 14.6361C10.9388 12.1985 12.9217 10.2155 15.3594 10.2155ZM21.0809 10.6955L26.0951 5.69392V8.95251H28.6211V1.37439H21.043V3.90043H24.3016L19.2874 8.91462C18.1759 8.14418 16.8245 7.68949 15.3594 7.68949C13.8943 7.68949 12.5428 8.14418 11.4314 8.91462L10.6104 8.09366L12.3913 6.3128L10.6104 4.51931L8.81693 6.30017L6.41719 3.90043H9.67578V1.37439H2.09766V8.95251H4.6237V5.69392L7.03607 8.09366L5.24258 9.88715L7.02344 11.668L8.8043 9.88715L9.62526 10.7081C8.86745 11.8196 8.41276 13.171 8.41276 14.6361C8.41276 18.0463 10.863 20.8754 14.0964 21.469V24.1088H11.5703V26.6348H14.0964V29.1608H16.6224V26.6348H19.1484V24.1088H16.6224V21.469C19.8557 20.8754 22.306 18.0463 22.306 14.6361C22.306 13.171 21.8513 11.8196 21.0809 10.6955Z" fill="currentColor"/>
</svg>
`,
    flag: `<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1826 7.40165L15.6878 9.92769H22.306V17.5058H18.0622L17.557 14.9798H8.41276V7.40165H15.1826ZM17.2539 4.87561H5.88672V26.347H8.41276V17.5058H15.4857L15.9909 20.0319H24.832V7.40165H17.7591L17.2539 4.87561Z" fill="currentColor"/>
</svg>
`,
    run: `<svg viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.58 7.42965C19.9694 7.42965 21.1061 6.29293 21.1061 4.90361C21.1061 3.51428 19.9694 2.37756 18.58 2.37756C17.1907 2.37756 16.054 3.51428 16.054 4.90361C16.054 6.29293 17.1907 7.42965 18.58 7.42965ZM14.0332 24.9856L15.2962 19.4283L17.9485 21.9544V29.5325H20.4746V20.0599L17.8222 17.5338L18.58 13.7448C20.222 15.6393 22.748 16.9023 25.5267 16.9023V14.3763C23.1269 14.3763 21.1061 13.1132 20.0957 11.345L18.8326 9.32418C18.3274 8.56637 17.5696 8.06116 16.6855 8.06116C16.3066 8.06116 16.054 8.18746 15.6751 8.18746L9.10738 10.9661V16.9023H11.6334V12.608L13.9069 11.7239L11.886 21.9544L5.69722 20.6914L5.19202 23.2174L14.0332 24.9856Z" fill="currentColor"/>
</svg>
`,
    food: `<svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.72913 21.6138V24.1398H27.9895V21.6138H2.72913ZM26.7265 20.3507C26.3855 15.2103 22.6217 11.0044 17.6833 9.98135C17.8096 9.67822 17.8854 9.33721 17.8854 8.98356C17.8854 7.59424 16.7487 6.45752 15.3593 6.45752C13.97 6.45752 12.8333 7.59424 12.8333 8.98356C12.8333 9.33721 12.9091 9.67822 13.0354 9.98135C8.09696 11.0044 4.33316 15.2103 3.99215 20.3507H26.7265ZM15.3593 12.2422C19.0852 12.2422 22.2681 14.5535 23.569 17.8121H7.1497C8.45061 14.5535 11.6334 12.2422 15.3593 12.2422Z" fill="currentColor"/>
</svg>
`
  };
  let { action } = $$props;
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  return `<div class="${escape(classes) + " overflow-hidden transition duration-100 transform scale-90 group-hover:scale-100 w-6/12 h-3/6"}"><div class="${""}"><!-- HTML_TAG_START -->${iconsvg[icon] == void 0 ? iconsvg["moon"] : iconsvg[icon]}<!-- HTML_TAG_END --></div></div>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $themeColor, $$unsubscribe_themeColor;
  $$unsubscribe_themeColor = subscribe(themeColor, (value) => $themeColor = value);
  let { beforeHighlight = "" } = $$props;
  let { afterHighlight = "" } = $$props;
  let { highlightedWord = "" } = $$props;
  let { alterClasses = "" } = $$props;
  let { themeColored = false } = $$props;
  let { size = "text-lg sm:text-2xl md:text-3xl lg:text-4xl" } = $$props;
  let { basictitle = false } = $$props;
  let { title } = $$props;
  if ($$props.beforeHighlight === void 0 && $$bindings.beforeHighlight && beforeHighlight !== void 0)
    $$bindings.beforeHighlight(beforeHighlight);
  if ($$props.afterHighlight === void 0 && $$bindings.afterHighlight && afterHighlight !== void 0)
    $$bindings.afterHighlight(afterHighlight);
  if ($$props.highlightedWord === void 0 && $$bindings.highlightedWord && highlightedWord !== void 0)
    $$bindings.highlightedWord(highlightedWord);
  if ($$props.alterClasses === void 0 && $$bindings.alterClasses && alterClasses !== void 0)
    $$bindings.alterClasses(alterClasses);
  if ($$props.themeColored === void 0 && $$bindings.themeColored && themeColored !== void 0)
    $$bindings.themeColored(themeColored);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.basictitle === void 0 && $$bindings.basictitle && basictitle !== void 0)
    $$bindings.basictitle(basictitle);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$unsubscribe_themeColor();
  return `${basictitle ? `<h1 class="${escape(alterClasses) + " text-lg sm:text-2xl md:text-3xl lg:text-4xl"}">${escape(title)}</h1>` : `${themeColored ? `<h1 class="${escape(alterClasses) + " text-" + escape($themeColor) + "-400 " + escape(size) + " font-black"}">${escape(beforeHighlight)}
    <span class="${"underline underline-offset-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-" + escape($themeColor) + "-500 font-black"}">${escape(highlightedWord)}</span>
    ${escape(afterHighlight)}</h1>` : `<h1 class="${escape(alterClasses) + " text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black"}">${escape(beforeHighlight)}
    <span class="${"underline underline-offset-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-" + escape($themeColor) + "-500 font-black"}">${escape(highlightedWord)}</span>
    ${escape(afterHighlight)}</h1>`}`}`;
});
export { Heading as H, Icon as I, supabaseUrl as a, supabaseKey as s, themeColor as t };
