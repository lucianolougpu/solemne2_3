
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23572, hash: 'cd3056ceda7b41c0c014944062c5b246601730ecbd77ad5b4b82335a3236fd0c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17146, hash: 'd7050ba3d83ebb87ea517ffcc0badea82239c07b46bbc93ba476f67f33777b1d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44087, hash: '40593f20743958a1ec276cff1fad95d9bb7b76bfa27199afe8d7583ad4d93a9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52WF6A3K.css': {size: 6979, hash: 'ob/HeOe/41A', text: () => import('./assets-chunks/styles-52WF6A3K_css.mjs').then(m => m.default)}
  },
};
