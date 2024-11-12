import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
const Calendy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="calendly-inline-widget m-16 h-screen" data-url="https://calendly.com/pfjaime"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Calendy, "Calendy").$$render($$result, {}, {}, {})} `;
});
export {
  Page as default
};
