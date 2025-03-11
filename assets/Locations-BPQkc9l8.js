import{R as z,r as t,j as e,L as b,M as C,P as L}from"./index-B4Bk8_Yr.js";import{u as S,a as M}from"./useSupabaseQuery-DmjYm74X.js";import{P as _,T as E}from"./trash-2-DEPkRXIy.js";const i={name:"",address:"",maps_url:""},P=()=>{const[u,o]=t.useState(!1),[a,r]=t.useState(i),[n,d]=t.useState(null),{data:l,loading:x,refetch:y}=S("locations",{order:{column:"created_at",ascending:!1},cacheKey:"locations-list"}),{create:w,update:N,remove:h,loading:c}=M("locations",{onSuccess:()=>{o(!1),r(i),d(null),y()},invalidateQueries:["locations-list"]}),j=async s=>{s.preventDefault();try{n?await N(n,a):await w(a)}catch(m){console.error("Error saving location:",m)}},g=t.useCallback(s=>{r({name:s.name,address:s.address,maps_url:s.maps_url||""}),d(s.id),o(!0)},[]),p=t.useCallback(async s=>{if(window.confirm("Czy na pewno chcesz usunąć tę lokalizację?"))try{await h(s)}catch(m){console.error("Error deleting location:",m)}},[h]),f=t.useCallback(()=>{o(!1),r(i),d(null)},[]),v=t.useMemo(()=>u?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-xl p-6 w-full max-w-md",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:n?"Edytuj Lokalizację":"Nowa Lokalizacja"}),e.jsxs("form",{onSubmit:j,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Strefa"}),e.jsx("input",{type:"text",value:a.name,onChange:s=>r({...a,name:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",placeholder:"np. Katowice Centrum",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Pełny adres"}),e.jsx("textarea",{value:a.address,onChange:s=>r({...a,address:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",rows:3,placeholder:"ul. Przykładowa 123, 40-000 Katowice",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Link do Google Maps"}),e.jsx("input",{type:"url",value:a.maps_url,onChange:s=>r({...a,maps_url:s.target.value}),className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500",placeholder:"https://goo.gl/maps/...",required:!0})]}),e.jsxs("div",{className:"flex justify-end gap-3 mt-6",children:[e.jsx("button",{type:"button",onClick:f,className:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",children:"Anuluj"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700",disabled:c,children:c?e.jsx(b,{className:"w-5 h-5 animate-spin"}):n?"Zapisz Zmiany":"Utwórz Lokalizację"})]})]})]})}):null,[u,n,a,c,j,f]),k=t.useCallback(({location:s})=>e.jsxs("div",{className:"bg-white rounded-lg shadow p-6",children:[e.jsx("div",{className:"flex items-start justify-between",children:e.jsxs("div",{className:"flex-1",children:[e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 flex items-center gap-2",children:[e.jsx(C,{className:"w-5 h-5 text-red-500"}),s.name]}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:s.address}),e.jsxs("a",{href:s.maps_url,target:"_blank",rel:"noopener noreferrer",className:"mt-2 inline-flex items-center text-sm text-red-600 hover:text-red-700",children:["Zobacz w Google Maps",e.jsx("svg",{className:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx("button",{onClick:()=>g(s),className:"p-2 text-gray-600 hover:text-gray-900",children:e.jsx(_,{className:"w-5 h-5"})}),e.jsx("button",{onClick:()=>p(s.id),className:"p-2 text-red-600 hover:text-red-900",children:e.jsx(E,{className:"w-5 h-5"})})]})]},s.id),[g,p]);return x&&(!l||l.length===0)?e.jsx("div",{className:"flex items-center justify-center h-64",children:e.jsx(b,{className:"w-8 h-8 animate-spin text-gray-500"})}):e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-semibold text-gray-900",children:"Lokalizacje"}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Zarządzaj lokalizacjami Twojego barbershopu"})]}),e.jsxs("button",{onClick:()=>{r(i),d(null),o(!0)},className:"btn-primary flex items-center gap-2",children:[e.jsx(L,{className:"w-5 h-5"}),"Nowa Lokalizacja"]})]}),v,e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l==null?void 0:l.map(s=>e.jsx(k,{location:s},s.id))}),(!l||l.length===0)&&!x&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-gray-500",children:"Brak zarejestrowanych lokalizacji"})})]})},q=z.memo(P);export{q as default};
