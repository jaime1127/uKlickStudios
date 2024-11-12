

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/book/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.7kgtN3kf.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DQ2DXNSt.js"];
export const stylesheets = [];
export const fonts = [];
