

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CdnX4522.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.CbMNdOa5.js","_app/immutable/chunks/entry.BaXRO73_.js"];
export const stylesheets = [];
export const fonts = [];
