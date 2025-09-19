import{bs as t,u as i,K as c,eS as m,l,_ as u,br as T,p as f}from"./bundle.CJIyTsZE.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const b=t(void 0),k=t(void 0),d=t(!1);t(!1);/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function A(e){const a=u(b),o=u(d),{data:s}=T({id:e,enabled:!!e});f.useEffect(()=>{s&&(a(s),o(!0))},[s])}function S(){const{t:e}=i(),a=c({formatOnlyTime:!0});return o=>{const s=[];return m(o).map(([n,r])=>{s.push([l(n,"YYYY-MM-DD"),a(n),r===0?e("now"):a(r)])}),s}}export{k as a,A as b,b as c,d as i,S as u};
