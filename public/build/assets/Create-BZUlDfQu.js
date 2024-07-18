import{W as p,j as e,Y as x,a as h}from"./app-CVbjUXyn.js";import{I as i}from"./InputError-CIpgqjRz.js";import{I as l}from"./InputLabel-BZe_xUUr.js";import{S as m}from"./SelectInput-BbWATI0q.js";import{T as g}from"./TextAreaInput-M9AQV7fh.js";import{T as r}from"./TextInput-BD3U12Ve.js";import{A as j}from"./AuthenticatedLayout-BibIOzza.js";import"./ApplicationLogo-BbpU7mV7.js";import"./transition-BlrLTgEl.js";function S({auth:d,trials:o,users:v}){const{data:n,setData:a,post:c,errors:s,reset:N}=p({image:"",name:"",status:"",description:"",due_date:""}),u=t=>{t.preventDefault(),c(route("patient.store"))};return e.jsxs(j,{user:d.user,header:e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Create New Patient"})}),children:[e.jsx(x,{title:"Create Patient"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:u,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"patient_trial",value:"Trial"}),e.jsxs(m,{name:"trial_id",id:"patient_trial",className:"mt-1 block w-full",onChange:t=>a("trial_id",t.target.value),children:[e.jsx("option",{value:"",children:"Select Trial"}),o.data.map(t=>e.jsxs("option",{value:t.id,children:[t.name," #",t.id]},t.id))]}),e.jsx(i,{message:s.trial_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"patient_image_path",value:"Patient Image"}),e.jsx(r,{id:"patient_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:t=>a("image",t.target.files[0])}),e.jsx(i,{message:s.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"patient_name",value:"Patient Name"}),e.jsx(r,{id:"patient_name",type:"text",name:"name",value:n.name,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("name",t.target.value)}),e.jsx(i,{message:s.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"patient_description",value:"Patient Description"}),e.jsx(g,{id:"patient_description",name:"description",value:n.description,className:"mt-1 block w-full",onChange:t=>a("description",t.target.value)}),e.jsx(i,{message:s.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"patient_due_date",value:"Patient Deadline"}),e.jsx(r,{id:"patient_due_date",type:"date",name:"due_date",value:n.due_date,className:"mt-1 block w-full",onChange:t=>a("due_date",t.target.value)}),e.jsx(i,{message:s.due_date,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"patient_status",value:"Patient Status"}),e.jsxs(m,{name:"status",id:"patient_status",className:"mt-1 block w-full",onChange:t=>a("status",t.target.value),children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"completed",children:"Completed"})]}),e.jsx(i,{message:s.patient_status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(h,{href:route("patient.index"),className:"bg-gray-100 py-2 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),e.jsx("button",{className:"bg-emerald-500 py-[6px] px-3 text-white rounded transition-all hover:bg-emerald-600",children:"Submit"})]})]})})})})]})}export{S as default};