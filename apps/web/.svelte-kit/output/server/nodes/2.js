

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.-d1rIuhg.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.PA3_ROQf.js"];
export const stylesheets = [];
export const fonts = [];
