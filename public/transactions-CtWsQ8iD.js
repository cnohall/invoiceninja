import{u as m,bI as k,j as a,B as i,Y as _,b,r as l,e as h,bu as f,bM as y,bN as C,bf as v,$ as g}from"./bundle.CJIyTsZE.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */var u=(e=>(e.Deposit="deposit",e.Withdrawal="withdrawal",e))(u||{}),p=(e=>(e.Credit="CREDIT",e.Debit="DEBIT",e))(p||{}),n=(e=>(e.Unmatched="1",e.Matched="2",e.Converted="3",e))(n||{});/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */const T={[u.Deposit]:"deposit",[u.Withdrawal]:"withdrawal"},d={[n.Unmatched]:"unmatched",[n.Matched]:"matched",[n.Converted]:"converted"};function E(e){const[t]=m(),{is_deleted:o,archived_at:s,status_id:r}=e.transaction,c=k();return o?a.jsx(i,{variant:"red",children:t("deleted")}):s?a.jsx(i,{variant:"orange",children:t("archived")}):n.Unmatched===r?a.jsx(i,{variant:"generic",style:{backgroundColor:c.$1},children:t(d[1])}):n.Matched===r?a.jsx(i,{variant:"dark-blue",style:{backgroundColor:c.$2},children:t(d[2])}):n.Converted===r?a.jsx(i,{variant:"green",style:{backgroundColor:c.$3},children:t(d[3])}):a.jsx(a.Fragment,{})}/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function Q(e){return b(["/api/v1/bank_transactions",e.id],()=>l("GET",h("/api/v1/bank_transactions/:id",{id:e.id})).then(t=>t.data.data),{enabled:e.enabled??!0,staleTime:1/0})}function w(){const e=_();return b(["/api/v1/bank_transactions","create"],()=>l("GET",h("/api/v1/bank_transactions/create")).then(t=>t.data.data),{staleTime:1/0,enabled:e("create_bank_transaction")})}const x={convert_matched:"converted_transactions",unlink:"unlinked_payment"},$=()=>{const e=f(),t=y(C);return(o,s)=>{v.processing(),l("POST",h("/api/v1/bank_transactions/bulk"),{action:s,ids:o}).then(()=>{const r=x[s]||`${s}d_invoice`;v.success(r),g(["bank_transactions"]),t&&e.invalidateQueries([t])})}};export{p as A,E,n as T,u as a,$ as b,w as c,T as t,Q as u};
