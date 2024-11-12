import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.D1KFZAwq.js","_app/immutable/chunks/scheduler.BvmtPxVN.js","_app/immutable/chunks/index.PA3_ROQf.js"];
export const stylesheets = ["_app/immutable/assets/0.B69DXc6B.css"];
export const fonts = [];
