import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return ` ${validate_component(Button, "Button").$$render($$result, { text: "Button", size: "medium" }, {}, {})} ${validate_component(Button, "Button").$$render($$result, { text: "Button" }, {}, {})} ${validate_component(Button, "Button").$$render($$result, { text: "Button", size: "small" }, {}, {})}`;
});
export {
  Page as default
};
