

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/book/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BCjRrQhK.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.CbMNdOa5.js"];
export const stylesheets = [];
export const fonts = [];
