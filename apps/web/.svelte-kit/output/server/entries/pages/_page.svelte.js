import { c as create_ssr_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
function reverseString(str) {
  return str.split("").reverse().join("");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${escape(JSON.stringify(reverseString("dog")))}  `;
});
export {
  Page as default
};
