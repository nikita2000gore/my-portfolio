(()=>{"use strict";const t=document.getElementById("projects");[{title:"Project One",description:"Description of project one."},{title:"Project Two",description:"Description of project two."}].forEach((e=>{const o=document.createElement("div");o.innerHTML=`<h3 class="text-xl font-semibold">${e.title}</h3><p>${e.description}</p>`,t.appendChild(o)}))})();