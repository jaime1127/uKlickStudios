

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CNd2YBWD.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.PA3_ROQf.js"];
export const stylesheets = [];
export const fonts = [];
