

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C77eVEJj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DQ2DXNSt.js","_app/immutable/chunks/entry.DyZ0NfQj.js"];
export const stylesheets = [];
export const fonts = [];
