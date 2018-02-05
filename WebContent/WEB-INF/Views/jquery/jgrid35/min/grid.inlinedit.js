/**
 * jqGrid extension for manipulating Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/ 
(function(a){a.fn.extend({editRow:function(c,i,h,j,b,e,d,f,g){return this.each(function(){var n=this,s,o,l,m=0,r=null,q={},k,p;if(!n.grid){return}k=a(n).getInd(c,true);if(k==false){return}l=a(k).attr("editable")||"0";if(l=="0"){p=n.p.colModel;a("td",k).each(function(w){s=p[w].name;var v=n.p.treeGrid===true&&s==n.p.ExpandColumn;if(v){o=a("span:first",this).html()}else{try{o=a.unformat(this,{colModel:p[w]},w)}catch(t){o=a(this).html()}}if(s!="cb"&&s!="subgrid"&&s!="rn"){q[s]=o;if(p[w].editable===true){if(r===null){r=w}if(v){a("span:first",this).html("")}else{a(this).html("")}var u=a.extend({},p[w].editoptions||{},{id:c+"_"+s,name:s});if(!p[w].edittype){p[w].edittype="text"}var x=createEl(p[w].edittype,u,o,true);a(x).addClass("editable");if(v){a("span:first",this).append(x)}else{a(this).append(x)}if(p[w].edittype=="select"&&p[w].editoptions.multiple===true&&a.browser.msie){a(x).width(a(x).width())}m++}}});if(m>0){q.id=c;n.p.savedRow.push(q);a(k).attr("editable","1");a("td:eq("+r+") input",k).focus();if(i===true){a(k).bind("keydown",function(t){if(t.keyCode===27){a(n).restoreRow(c,g)}if(t.keyCode===13){a(n).saveRow(c,j,b,e,d,f,g);return false}t.stopPropagation()})}if(a.isFunction(h)){h(c)}}}})},saveRow:function(h,g,e,f,d,c,b){return this.each(function(){var o=this,u,p={},l={},j,r,q,i;if(!o.grid){return}i=a(o).getInd(h,true);if(i==false){return}j=a(i).attr("editable");e=e?e:o.p.editurl;if(j==="1"&&e){var t;a("td",i).each(function(v){t=o.p.colModel[v];u=t.name;if(u!="cb"&&u!="subgrid"&&t.editable===true&&u!="rn"){switch(t.edittype){case"checkbox":var k=["Yes","No"];if(t.editoptions){k=t.editoptions.value.split(":")}p[u]=a("input",this).attr("checked")?k[0]:k[1];break;case"text":case"password":case"textarea":case"button":p[u]=!o.p.autoencode?a("input, textarea",this).val():a.jgrid.htmlEncode(a("input, textarea",this).val());break;case"select":if(!t.editoptions.multiple){p[u]=a("select>option:selected",this).val();l[u]=a("select>option:selected",this).text()}else{var w=a("select",this),x=[];p[u]=a(w).val();if(p[u]){p[u]=p[u].join(",")}else{p[u]=""}a("select > option:selected",this).each(function(y,z){x[y]=a(z).text()});l[u]=x.join(",")}if(t.formatter&&t.formatter=="select"){l={}}break}q=checkValues(p[u],v,o);if(q[0]===false){q[1]=p[u]+" "+q[1];return false}}});if(q[0]===false){try{info_dialog(a.jgrid.errors.errcap,q[1],a.jgrid.edit.bClose)}catch(s){alert(q[1])}return}if(p){p.id=h;if(f){p=a.extend({},p,f)}}if(!o.grid.hDiv.loading){o.grid.hDiv.loading=true;a("div.loading",o.grid.hDiv).fadeIn("fast");if(e=="clientArray"){p=a.extend({},p,l);var n=a(o).setRowData(h,p);a(i).attr("editable","0");for(var m=0;m<o.p.savedRow.length;m++){if(o.p.savedRow[m].id==h){r=m;break}}if(r>=0){o.p.savedRow.splice(r,1)}if(a.isFunction(d)){d(h,n)}}else{a.ajax({url:e,data:p,type:"POST",complete:function(x,y){if(y==="success"){var w;if(a.isFunction(g)){w=g(x)}else{w=true}if(w===true){p=a.extend({},p,l);a(o).setRowData(h,p);a(i).attr("editable","0");for(var v=0;v<o.p.savedRow.length;v++){if(o.p.savedRow[v].id==h){r=v;break}}if(r>=0){o.p.savedRow.splice(r,1)}if(a.isFunction(d)){d(h,x.responseText)}}else{a(o).restoreRow(h,b)}}},error:function(k,v){if(a.isFunction(c)){c(h,k,v)}else{alert("Error Row: "+h+" Result: "+k.status+":"+k.statusText+" Status: "+v)}}})}o.grid.hDiv.loading=false;a("div.loading",o.grid.hDiv).fadeOut("fast");a(i).unbind("keydown")}}})},restoreRow:function(c,b){return this.each(function(){var g=this,d,f;if(!g.grid){return}f=a(g).getInd(c,true);if(f==false){return}for(var e=0;e<g.p.savedRow.length;e++){if(g.p.savedRow[e].id==c){d=e;break}}if(d>=0){a(g).setRowData(c,g.p.savedRow[d]);a(f).attr("editable","0");g.p.savedRow.splice(d,1)}if(a.isFunction(b)){b(c)}})}})})(jQuery);