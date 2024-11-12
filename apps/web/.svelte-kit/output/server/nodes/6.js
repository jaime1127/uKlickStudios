

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BUvnG2Da.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.CbMNdOa5.js"];
export const stylesheets = [];
export const fonts = [];
