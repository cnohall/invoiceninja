import{u as p,a9 as j,aq as k,co as h,_ as x,aw as y,j as i,ax as t,ay as s,aj as f,f$ as A,aA as C,aC as a,aD as o,aR as _,aS as D,aT as b,be as E,c2 as I}from"./bundle.CJIyTsZE.js";import{b as g,A as d}from"./transactions-CtWsQ8iD.js";/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @link https://github.com/invoiceninja/invoiceninja source repository
 *
 * @copyright Copyright (c) 2022. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */function w(){return n=>n.includes("\\n ")?n.replace("\\n",""):n.includes("\\n")?n.replace("\\n"," "):n}function B(){const[n]=p(),c=g(),u=j(),{isEditPage:l}=k({entity:"transaction"}),{data:r}=h(),m=x(y),v=e=>{r&&(m(E.cloneDeep({...r,line_items:[{...I(),notes:e.description,cost:e.amount,product_key:e.date,quantity:1}]})),u("/invoices/create?action=invoice_transaction"))};return[e=>e.base_type===d.Credit&&i.jsx(t,{onClick:()=>v(e),icon:i.jsx(s,{element:f}),children:n("create_invoice")}),e=>e.payment_id&&i.jsx(t,{onClick:()=>c([e.id],"unlink"),icon:i.jsx(s,{element:A}),children:n("unlink")}),e=>!!((e.payment_id||e.base_type===d.Credit)&&l)&&i.jsx(C,{withoutPadding:!0}),e=>a(e)===o.Active&&l&&i.jsx(t,{onClick:()=>c([e.id],"archive"),icon:i.jsx(s,{element:_}),children:n("archive")}),e=>(a(e)===o.Archived||a(e)===o.Deleted)&&l&&i.jsx(t,{onClick:()=>c([e.id],"restore"),icon:i.jsx(s,{element:D}),children:n("restore")}),e=>(a(e)===o.Active||a(e)===o.Archived)&&l&&i.jsx(t,{onClick:()=>c([e.id],"delete"),icon:i.jsx(s,{element:b}),children:n("delete")})]}export{B as a,w as u};
