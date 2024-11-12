

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DRbxjKhH.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.PA3_ROQf.js","_app/immutable/chunks/entry.BYb3MzNr.js"];
export const stylesheets = [];
export const fonts = [];
