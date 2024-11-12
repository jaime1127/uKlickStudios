

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/portfolio/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DWVpD1IA.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Cy1wgLrO.js"];
export const stylesheets = [];
export const fonts = [];
