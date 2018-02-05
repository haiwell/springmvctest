/**
 * jqGrid extension for form editing Grid Data
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/ 
(function(b){var a=null;b.fn.extend({searchGrid:function(c){c=b.extend({recreateFilter:false,drag:true,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,closeAfterSearch:false,closeOnEscape:false,multipleSearch:false,sopt:null,onClose:null},b.jgrid.search,c||{});return this.each(function(){var l=this;if(!l.grid){return}if(b.fn.searchFilter){var g="fbox_"+l.p.id;if(c.recreateFilter===true){b("#"+g).remove()}if(b("#"+g).html()!=null){if(b.isFunction(c.beforeShowSearch)){c.beforeShowSearch(b("#"+g))}f();if(b.isFunction(c.afterShowSearch)){c.afterShowSearch(b("#"+g))}}else{var n=[],u=jQuery("#"+l.p.id).getGridParam("colNames"),r=jQuery("#"+l.p.id).getGridParam("colModel"),t=["eq","ne","lt","le","gt","ge","bw","bn","in","ni","ew","en","cn","nc"],i,q,h;b.each(r,function(x,C){var z=(typeof C.search==="undefined")?true:C.search,y=(C.hidden===true),k=b.extend({},{text:u[x],value:C.index||C.name},this.searchoptions),w=(k.searchhidden===true)||true;if(typeof k.sopt=="undefined"){k.sopt=t}h=0;k.ops=[];for(i=0;i<k.sopt.length;i++){if((q=b.inArray(k.sopt[i],t))!=-1){k.ops[h]={op:k.sopt[i],text:c.odata[q]};h++}}if(typeof(this.stype)==="undefined"){this.stype="text"}if(this.stype=="select"){if(k.dataUrl!=null){}else{if(this.editoptions){var j=this.editoptions.value;if(j){k.dataValues=[];if(typeof(j)==="string"){var e=j.split(";"),B;for(i=0;i<e.length;i++){B=e[i].split(":");k.dataValues[i]={value:B[0],text:B[1]}}}else{if(typeof(j)==="object"){i=0;for(var A in j){k.dataValues[i]={value:A,text:j[A]};i++}}}}}}}if((w&&z)||(z&&!y)){n.push(k)}});if(n.length>0){var p=jQuery.fn.searchFilter.defaults.operators;if(c.sopt!=null){p=[];h=0;for(i=0;c.sopt.length<0;i++){if((q=b.inArray(c.sopt[i],t))!=-1){p[h]={op:c.sopt[i],text:c.odata[q]};h++}}}b("<div id='"+g+"' role='dialog' tabindex='-1'></div>").insertBefore("#gview_"+l.p.id);jQuery("#"+g).searchFilter(n,{groupOps:c.groupOps,operators:p,onClose:d,resetText:c.Reset,searchText:c.Find,windowTitle:c.caption,rulesText:c.rulesText,matchText:c.matchText,onSearch:s,onReset:m,stringResult:c.multipleSearch});b(".ui-widget-overlay","#"+g).remove();if(c.drag===true){b("#"+g+" table thead tr:first td:first").css("cursor","move");if(jQuery.fn.jqDrag){jQuery("#"+g).jqDrag(b("#"+g+" table thead tr:first td:first"))}else{try{b("#"+g).draggable({handle:jQuery("#"+g+" table thead tr:first td:first")})}catch(o){}}}if(c.multipleSearch===false){b(".ui-del, .ui-add, .ui-del, .ui-add-last, .matchText, .rulesText","#"+g).hide();b("select[name='groupOp']","#"+g).hide()}if(b.isFunction(c.onInitializeSearch)){c.onInitializeSearch(b("#"+g))}if(b.isFunction(c.beforeShowSearch)){c.beforeShowSearch(b("#"+g))}f();if(b.isFunction(c.afterShowSearch)){c.afterShowSearch(b("#"+g))}if(c.closeOnEscape===true){jQuery("#"+g).keydown(function(j){if(j.which==27){d(b("#"+g))}})}}}}function s(v){var e=(v!==undefined),k=jQuery("#"+l.p.id),j={};if(c.multipleSearch===false){j[c.sField]=v.rules[0].field;j[c.sValue]=v.rules[0].data;j[c.sOper]=v.rules[0].op}else{j[c.sFilter]=v}k[0].p.search=e;b.extend(k[0].p.postData,j);k[0].p.page=1;k.trigger("reloadGrid");if(c.closeAfterSearch){d(b("#"+g))}}function m(v){var e=(v!==undefined),k=jQuery("#"+l.p.id),j=[];k[0].p.search=e;if(c.multipleSearch===false){j[c.sField]=j[c.sValue]=j[c.sOper]=""}else{j[c.sFilter]=""}b.extend(k[0].p.postData,j);k[0].p.page=1;k.trigger("reloadGrid")}function d(e){if(c.onClose){var j=c.onClose(e);if(typeof j=="boolean"&&!j){return}}e.hide();b(".jqgrid-overlay","#gbox_"+l.p.id).hide()}function f(){b("#"+g).show();b(".jqgrid-overlay","#gbox_"+l.p.id).show();try{b(":input:visible","#"+g)[0].focus()}catch(e){}}})},editGridRow:function(c,d){d=b.extend({top:0,left:0,width:300,height:"auto",dataheight:"auto",modal:false,drag:true,resize:true,url:null,mtype:"POST",closeAfterAdd:false,clearAfterAdd:true,closeAfterEdit:false,reloadAfterSubmit:true,onInitializeForm:null,beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:false,jqModal:true,closeOnEscape:false,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[false,13],navkeys:[false,38,40],checkOnSubmit:false,checkOnUpdate:false,_savedData:{},onClose:null},b.jgrid.edit,d||{});a=d;return this.each(function(){var e=this;if(!e.grid||!c){return}var B=e.p.id,x="FrmGrid_"+B,t="TblGrid_"+B,h={themodal:"editmod"+B,modalhead:"edithd"+B,modalcontent:"editcnt"+B,scrollelm:x},C=b.isFunction(a.beforeShowForm)?a.beforeShowForm:false,N=b.isFunction(a.afterShowForm)?a.afterShowForm:false,M=b.isFunction(a.beforeInitData)?a.beforeInitData:false,n=b.isFunction(a.onInitializeForm)?a.onInitializeForm:false,H=null,I=1,p=0,u,D,E,Q,G,A;if(c=="new"){c="_empty";d.caption=d.addCaption}else{d.caption=d.editCaption}if(d.recreateForm===true&&b("#"+h.themodal).html()!=null){b("#"+h.themodal).remove()}var j=true;if(d.checkOnUpdate&&d.jqModal&&!d.modal){j=false}if(b("#"+h.themodal).html()!=null){b(".ui-jqdialog-title","#"+h.modalhead).html(d.caption);b("#FormError","#"+t).hide();if(M){M(b("#"+x))}m(c,e,x);if(c=="_empty"){b("#pData, #nData","#"+t+"_2").hide()}else{b("#pData, #nData","#"+t+"_2").show()}if(d.processing===true){d.processing=false;b("#sData","#"+t).removeClass("ui-state-active")}if(b("#"+x).data("disabled")===true){b(".confirm","#"+h.themodal).hide();b("#"+x).data("disabled",false)}if(C){C(b("#"+x))}b("#"+h.themodal).data("onClose",a.onClose);viewModal("#"+h.themodal,{gbox:"#gbox_"+B,jqm:d.jqModal,jqM:false,closeoverlay:j,modal:d.modal});if(!j){b(".jqmOverlay").click(function(){if(!f()){return false}hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose});return false})}if(N){N(b("#"+x))}}else{b(e.p.colModel).each(function(V){var W=this.formoptions;I=Math.max(I,W?W.colpos||0:0);p=Math.max(p,W?W.rowpos||0:0)});var q=isNaN(d.dataheight)?d.dataheight:d.dataheight+"px";var L,S=b("<form name='FormPost' id='"+x+"' class='FormGrid' style='width:100%;overflow:auto;position:relative;height:"+q+";'></form>").data("disabled",false),z=b("<table id='"+t+"' class='EditTable' cellspacing='0' cellpading='0' border='0'><tbody></tbody></table>");b(S).append(z);L=b("<tr id='FormError' style='display:none'><td class='ui-state-error' colspan='"+(I*2)+"'></td></tr>");L[0].rp=0;b(z).append(L);if(a.topinfo){L=b("<tr><td class='topinfo' colspan='"+(I*2)+"'>"+a.topinfo+"</td></tr>");L[0].rp=0;b(z).append(L)}if(M){M(b("#"+x))}var y=r(c,e,z,I),k="<a href='javascript:void(0)' id='pData' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></div>",l="<a href='javascript:void(0)' id='nData' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></div>",g="<a href='javascript:void(0)' id='sData' class='fm-button ui-state-default ui-corner-all'>"+d.bSubmit+"</a>",s="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+d.bCancel+"</a>";var P="<table border='0' class='EditTable' id='"+t+"_2'><tbody><tr id='Act_Buttons'><td class='navButton ui-widget-content'>"+k+l+"</td><td class='EditButton ui-widget-content'>"+g+"&nbsp;"+s+"</td></tr>";if(a.bottominfo){P+="<tr><td class='bottominfo' colspan='2'>"+a.bottominfo+"</td></tr>"}P+="</tbody></table>";if(p>0){var w=[];b.each(b(z)[0].rows,function(V,W){w[V]=W});w.sort(function(W,V){if(W.rp>V.rp){return 1}if(W.rp<V.rp){return -1}return 0});b.each(w,function(V,W){b("tbody",z).append(W)})}d.gbox="#gbox_"+B;var o=false;if(d.closeOnEscape===true){d.closeOnEscape=false;o=true}var O=b("<span></span>").append(S).append(P);createModal(h,O,d,"#gview_"+e.p.id,b("#gview_"+e.p.id)[0]);O=null;P=null;jQuery("#"+h.themodal).keydown(function(V){if(b("#"+x).data("disabled")===true){return false}if(a.savekey[0]===true&&V.which==a.savekey[1]){b("#sData","#"+t+"_2").trigger("click");return false}if(V.which===27){if(!f()){return false}if(o){hideModal(this,{gb:d.gbox,jqm:d.jqModal,onClose:a.onClose})}return false}if(a.navkeys[0]===true){if(b("#id_g","#"+t).val()=="_empty"){return true}if(V.which==a.navkeys[1]){b("#pData","#"+t+"_2").trigger("click");return false}if(V.which==a.navkeys[2]){b("#nData","#"+t+"_2").trigger("click");return false}}});if(d.checkOnUpdate){b("a.ui-jqdialog-titlebar-close span","#"+h.themodal).removeClass("jqmClose");b("a.ui-jqdialog-titlebar-close","#"+h.themodal).unbind("click").click(function(){if(!f()){return false}hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose});return false})}d.saveicon=b.extend([true,"left","ui-icon-disk"],d.saveicon);d.closeicon=b.extend([true,"left","ui-icon-close"],d.closeicon);if(d.saveicon[0]==true){b("#sData","#"+t+"_2").addClass(d.saveicon[1]=="right"?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+d.saveicon[2]+"'></span>")}if(d.closeicon[0]==true){b("#cData","#"+t+"_2").addClass(d.closeicon[1]=="right"?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+d.closeicon[2]+"'></span>")}if(a.checkOnSubmit||a.checkOnUpdate){g="<a href='javascript:void(0)' id='sNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+d.bYes+"</a>";l="<a href='javascript:void(0)' id='nNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+d.bNo+"</a>";s="<a href='javascript:void(0)' id='cNew' class='fm-button ui-state-default ui-corner-all' style='z-index:1002'>"+d.bExit+"</a>";var F,v=d.zIndex||999;v++;if(b.browser.msie&&b.browser.version==6){F='<iframe style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=\'0\');" src="javascript:false;"></iframe>'}else{F=""}b("<div class='ui-widget-overlay jqgrid-overlay confirm' style='z-index:"+v+";display:none;'>&nbsp;"+F+"</div><div class='confirm ui-widget-content ui-jqconfirm' style='z-index:"+(v+1)+"'>"+d.saveData+"<br/><br/>"+g+l+s+"</div>").insertAfter("#"+x);b("#sNew","#"+h.themodal).click(function(){i([true,"",""]);b("#"+x).data("disabled",false);b(".confirm","#"+h.themodal).hide();return false});b("#nNew","#"+h.themodal).click(function(){b(".confirm","#"+h.themodal).hide();b("#"+x).data("disabled",false);setTimeout(function(){b(":input","#"+x)[0].focus()},0);return false});b("#cNew","#"+h.themodal).click(function(){b(".confirm","#"+h.themodal).hide();b("#"+x).data("disabled",false);hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose});return false})}if(n){n(b("#"+x))}if(c=="_empty"){b("#pData,#nData","#"+t+"_2").hide()}else{b("#pData,#nData","#"+t+"_2").show()}if(C){C(b("#"+x))}b("#"+h.themodal).data("onClose",a.onClose);viewModal("#"+h.themodal,{gbox:"#gbox_"+B,jqm:d.jqModal,closeoverlay:j,modal:d.modal});if(!j){b(".jqmOverlay").click(function(){if(!f()){return false}hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose});return false})}if(N){N(b("#"+x))}b(".fm-button","#"+h.themodal).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});b("#sData","#"+t+"_2").click(function(V){D={};Q={};b("#FormError","#"+t).hide();T();if(D.id=="_empty"){i()}else{if(d.checkOnSubmit===true){G=b.extend({},D,Q);A=J(G,a._savedData);if(A){b("#"+x).data("disabled",true);b(".confirm","#"+h.themodal).show()}else{i()}}else{i()}}return false});b("#cData","#"+t+"_2").click(function(V){if(!f()){return false}hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose});return false});b("#nData","#"+t+"_2").click(function(V){if(!f()){return false}b("#FormError","#"+t).hide();var W=U();W[0]=parseInt(W[0]);if(W[0]!=-1&&W[1][W[0]+1]){if(b.isFunction(d.onclickPgButtons)){d.onclickPgButtons("next",b("#"+x),W[1][W[0]])}m(W[1][W[0]+1],e,x);b(e).setSelection(W[1][W[0]+1]);if(b.isFunction(d.afterclickPgButtons)){d.afterclickPgButtons("next",b("#"+x),W[1][W[0]+1])}K(W[0]+1,W[1].length-1)}return false});b("#pData","#"+t+"_2").click(function(W){if(!f()){return false}b("#FormError","#"+t).hide();var V=U();if(V[0]!=-1&&V[1][V[0]-1]){if(b.isFunction(d.onclickPgButtons)){d.onclickPgButtons("prev",b("#"+x),V[1][V[0]])}m(V[1][V[0]-1],e,x);b(e).setSelection(V[1][V[0]-1]);if(b.isFunction(d.afterclickPgButtons)){d.afterclickPgButtons("prev",b("#"+x),V[1][V[0]-1])}K(V[0]-1,V[1].length-1)}return false})}var R=U();K(R[0],R[1].length-1);function K(W,X,V){if(W==0){b("#pData","#"+t+"_2").addClass("ui-state-disabled")}else{b("#pData","#"+t+"_2").removeClass("ui-state-disabled")}if(W==X){b("#nData","#"+t+"_2").addClass("ui-state-disabled")}else{b("#nData","#"+t+"_2").removeClass("ui-state-disabled")}}function U(){var W=b(e).getDataIDs(),V=b("#id_g","#"+t).val(),X=b.inArray(V,W);return[X,W]}function f(){var V=true;b("#FormError","#"+t).hide();if(a.checkOnUpdate){D={};Q={};T();G=b.extend({},D,Q);A=J(G,a._savedData);if(A){b("#"+x).data("disabled",true);b(".confirm","#"+h.themodal).show();V=false}}return V}function T(){b(".FormElement","#"+t).each(function(W){switch(b(this).get(0).type){case"checkbox":if(b(this).attr("checked")){D[this.name]=b(this).val()}else{var V=b(this).attr("offval");D[this.name]=V;Q[this.name]=V}break;case"select-one":D[this.name]=b("option:selected",this).val();Q[this.name]=b("option:selected",this).text();break;case"select-multiple":D[this.name]=b(this).val();if(D[this.name]){D[this.name]=D[this.name].join(",")}else{D[this.name]=""}var X=[];b("option:selected",this).each(function(Y,Z){X[Y]=b(Z).text()});Q[this.name]=X.join(",");break;case"password":case"text":case"textarea":case"button":D[this.name]=b(this).val();D[this.name]=!e.p.autoencode?D[this.name]:b.jgrid.htmlEncode(D[this.name]);break}});return true}function r(Y,ae,ab,aj){var V,W,ag,ah=0,al,am,af,ak=[],ac=false,ad,X,Z="<td class='CaptionTD ui-widget-content'>&nbsp;</td><td class='DataTD ui-widget-content' style='white-space:pre'>&nbsp;</td>",aa="";for(var ai=1;ai<=aj;ai++){aa+=Z}if(Y!="_empty"){ac=b(ae).getInd(Y)}b(ae.p.colModel).each(function(aq){V=this.name;if(this.editrules&&this.editrules.edithidden==true){W=false}else{W=this.hidden===true?true:false}am=W?"style='display:none'":"";if(V!=="cb"&&V!=="subgrid"&&this.editable===true&&V!=="rn"){if(ac===false){al=""}else{if(V==ae.p.ExpandColumn&&ae.p.treeGrid===true){al=b("td:eq("+aq+")",ae.rows[ac]).text()}else{try{al=b.unformat(b("td:eq("+aq+")",ae.rows[ac]),{colModel:this},aq)}catch(ao){al=b("td:eq("+aq+")",ae.rows[ac]).html()}}}var ap=b.extend({},this.editoptions||{},{id:V,name:V});frmopt=b.extend({},{elmprefix:"",elmsuffix:"",rowabove:false,rowcontent:""},this.formoptions||{}),ad=parseInt(frmopt.rowpos)||ah+1,X=parseInt((parseInt(frmopt.colpos)||1)*2);if(Y=="_empty"&&ap.defaultValue){al=b.isFunction(ap.defaultValue)?ap.defaultValue():ap.defaultValue}if(!this.edittype){this.edittype="text"}af=createEl(this.edittype,ap,al);if(al==""&&this.edittype=="checkbox"){al=b(af).attr("offval")}if(a.checkOnSubmit||a.checkOnUpdate){a._savedData[V]=al}b(af).addClass("FormElement");ag=b(ab).find("tr[rowpos="+ad+"]");if(frmopt.rowabove){var ar=b("<tr><td class='contentinfo' colspan='"+(aj*2)+"'>"+frmopt.rowcontent+"</td></tr>");b(ab).append(ar);ar[0].rp=ad}if(ag.length==0){ag=b("<tr "+am+" rowpos='"+ad+"'></tr>").addClass("FormData").attr("id","tr_"+V);b(ag).append(aa);b(ab).append(ag);ag[0].rp=ad}b("td:eq("+(X-2)+")",ag[0]).html(typeof frmopt.label==="undefined"?ae.p.colNames[aq]:frmopt.label);b("td:eq("+(X-1)+")",ag[0]).append(frmopt.elmprefix).append(af).append(frmopt.elmsuffix);ak[ah]=aq;ah++}});if(ah>0){var an=b("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(aj*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+Y+"'/></td></tr>");an[0].rp=ah+999;b(ab).append(an);if(a.checkOnSubmit||a.checkOnUpdate){a._savedData.id=Y}}return ak}function m(W,ac,Y){var ah,ae,Z=0,ad,ab,V,aa,af;if(a.checkOnSubmit||a.checkOnUpdate){a._savedData={};a._savedData.id=W}var ag=ac.p.colModel;if(W=="_empty"){b(ag).each(function(ai){ah=this.name.replace(".","\\.");V=b.extend({},this.editoptions||{});ab=b("#"+ah,"#"+Y);if(ab[0]!=null){aa="";if(V.defaultValue){aa=b.isFunction(V.defaultValue)?V.defaultValue():V.defaultValue;if(ab[0].type=="checkbox"){af=aa.toLowerCase();if(af.search(/(false|0|no|off|undefined)/i)<0&&af!==""){ab[0].checked=true;ab[0].defaultChecked=true;ab[0].value=aa}else{ab.attr({checked:"",defaultChecked:""})}}else{ab.val(aa)}}else{if(ab[0].type=="checkbox"){ab[0].checked=false;ab[0].defaultChecked=false;aa=b(ab).attr("offval")}else{if(ab[0].type.substr(0,6)=="select"){ab[0].selectedIndex=0}else{ab.val(aa)}}}if(a.checkOnSubmit===true||a.checkOnUpdate){a._savedData[ah]=aa}}});b("#id_g","#"+Y).val("_empty");return}var X=b(ac).getInd(W,true);if(!X){return}b("td",X).each(function(aj){ah=ag[aj].name.replace(".","\\.");if(ag[aj].editrules&&ag[aj].editrules.edithidden===true){ae=false}else{ae=ag[aj].hidden===true?true:false}if(ah!=="cb"&&ah!=="subgrid"&&ag[aj].editable===true){if(ah==ac.p.ExpandColumn&&ac.p.treeGrid===true){ad=b(this).text()}else{try{ad=b.unformat(this,{colModel:ag[aj]},aj)}catch(ai){ad=b(this).html()}}if(a.checkOnSubmit===true||a.checkOnUpdate){a._savedData[ah]=ad}switch(ag[aj].edittype){case"password":case"text":case"button":case"image":ad=b.jgrid.htmlDecode(ad);b("#"+ah,"#"+Y).val(ad);break;case"textarea":if(ad=="&nbsp;"||ad=="&#160;"||(ad.length==1&&ad.charCodeAt(0)==160)){ad=""}b("#"+ah,"#"+Y).val(ad);break;case"select":b("#"+ah+" option","#"+Y).each(function(ak){if(!ag[aj].editoptions.multiple&&(ad==b(this).text()||ad==b(this).val())){this.selected=true}else{if(ag[aj].editoptions.multiple){if(b.inArray(b(this).text(),ad.split(","))>-1||b.inArray(b(this).val(),ad.split(","))>-1){this.selected=true}else{this.selected=false}}else{this.selected=false}}});break;case"checkbox":ad=ad.toLowerCase();if(ad.search(/(false|0|no|off|undefined)/i)<0&&ad!==""){b("#"+ah,"#"+Y).attr("checked",true);b("#"+ah,"#"+Y).attr("defaultChecked",true)}else{b("#"+ah,"#"+Y).attr("checked",false);b("#"+ah,"#"+Y).attr("defaultChecked","")}break}Z++}});if(Z>0){b("#id_g","#"+t).val(W)}}function i(){var Y,W=[true,"",""],V={};for(var X in D){W=checkValues(D[X],X,e);if(W[0]==false){break}}if(W[0]){if(b.isFunction(a.onclickSubmit)){V=a.onclickSubmit(a,D)||{}}if(b.isFunction(a.beforeSubmit)){W=a.beforeSubmit(D,b("#"+x))}}u=a.url?a.url:e.p.editurl;if(W[0]){if(!u){W[0]=false;W[1]+=" "+b.jgrid.errors.nourl}}if(W[0]===false){b("#FormError>td","#"+t).html(W[1]);b("#FormError","#"+t).show();return}if(!d.processing){d.processing=true;b("#sData","#"+t+"_2").addClass("ui-state-active");D.oper=D.id=="_empty"?"add":"edit";D=b.extend(D,a.editData,V);b.ajax({url:u,type:a.mtype,data:D,complete:function(aa,Z){if(Z!="success"){W[0]=false;if(b.isFunction(a.errorTextFormat)){W[1]=a.errorTextFormat(aa)}else{W[1]=Z+" Status: '"+aa.statusText+"'. Error code: "+aa.status}}else{if(b.isFunction(a.afterSubmit)){W=a.afterSubmit(aa,D)}}if(W[0]===false){b("#FormError>td","#"+t).html(W[1]);b("#FormError","#"+t).show()}else{D=b.extend(D,Q);if(D.id=="_empty"){if(!W[2]){W[2]=parseInt(e.p.records)+1}D.id=W[2];if(a.closeAfterAdd){if(a.reloadAfterSubmit){b(e).trigger("reloadGrid")}else{b(e).addRowData(W[2],D,d.addedrow);b(e).setSelection(W[2])}hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose})}else{if(a.clearAfterAdd){if(a.reloadAfterSubmit){b(e).trigger("reloadGrid")}else{b(e).addRowData(W[2],D,d.addedrow)}m("_empty",e,x)}else{if(a.reloadAfterSubmit){b(e).trigger("reloadGrid")}else{b(e).addRowData(W[2],D,d.addedrow)}}}}else{if(a.reloadAfterSubmit){b(e).trigger("reloadGrid");if(!a.closeAfterEdit){setTimeout(function(){b(e).setSelection(D.id)},1000)}}else{if(e.p.treeGrid===true){b(e).setTreeRow(D.id,D)}else{b(e).setRowData(D.id,D)}}if(a.closeAfterEdit){hideModal("#"+h.themodal,{gb:"#gbox_"+B,jqm:d.jqModal,onClose:a.onClose})}}if(b.isFunction(a.afterComplete)){Y=aa;setTimeout(function(){a.afterComplete(Y,D,b("#"+x));Y=null},500)}}d.processing=false;if(a.checkOnSubmit||a.checkOnUpdate){b("#"+x).data("disabled",false);if(a._savedData.id!="_empty"){a._savedData=D}}b("#sData","#"+t+"_2").removeClass("ui-state-active");try{b(":input:visible","#"+x)[0].focus()}catch(ab){}},error:function(ab,Z,aa){b("#FormError>td","#"+t).html(Z+" : "+aa);b("#FormError","#"+t).show();d.processing=false;b("#"+x).data("disabled",false);b("#sData","#"+t+"_2").removeClass("ui-state-active")}})}}function J(Y,V){var W=false,X;for(X in Y){if(Y[X]!=V[X]){W=true;break}}return W}})},viewGridRow:function(c,d){d=b.extend({top:0,left:0,width:0,height:"auto",dataheight:"auto",modal:false,drag:true,resize:true,jqModal:true,closeOnEscape:false,labelswidth:"30%",closeicon:[],navkeys:[false,38,40],onClose:null},b.jgrid.view,d||{});return this.each(function(){var w=this;if(!w.grid||!c){return}if(!d.imgpath){d.imgpath=w.p.imgpath}var q=w.p.id,y="ViewGrid_"+q,r="ViewTbl_"+q,i={themodal:"viewmod"+q,modalhead:"viewhd"+q,modalcontent:"viewcnt"+q,scrollelm:y},g=1,e=0;if(b("#"+i.themodal).html()!=null){b(".ui-jqdialog-title","#"+i.modalhead).html(d.caption);b("#FormError","#"+r).hide();l(c,w);viewModal("#"+i.themodal,{gbox:"#gbox_"+q,jqm:d.jqModal,jqM:false,modal:d.modal});j()}else{b(w.p.colModel).each(function(C){var D=this.formoptions;g=Math.max(g,D?D.colpos||0:0);e=Math.max(e,D?D.rowpos||0:0)});var x=isNaN(d.dataheight)?d.dataheight:d.dataheight+"px";var v,A=b("<form name='FormPost' id='"+y+"' class='FormGrid' style='width:100%;overflow:auto;position:relative;height:"+x+";'></form>"),k=b("<table id='"+r+"' class='EditTable' cellspacing='1' cellpading='2' border='0' style='table-layout:fixed'><tbody></tbody></table>");b(A).append(k);var u=m(c,w,k,g),s="<a href='javascript:void(0)' id='pData' class='fm-button ui-state-default ui-corner-left'><span class='ui-icon ui-icon-triangle-1-w'></span></div>",t="<a href='javascript:void(0)' id='nData' class='fm-button ui-state-default ui-corner-right'><span class='ui-icon ui-icon-triangle-1-e'></span></div>",B="<a href='javascript:void(0)' id='cData' class='fm-button ui-state-default ui-corner-all'>"+d.bClose+"</a>";if(e>0){var f=[];b.each(b(k)[0].rows,function(C,D){f[C]=D});f.sort(function(D,C){if(D.rp>C.rp){return 1}if(D.rp<C.rp){return -1}return 0});b.each(f,function(C,D){b("tbody",k).append(D)})}d.gbox="#gbox_"+q;var p=false;if(d.closeOnEscape===true){d.closeOnEscape=false;p=true}var z=b("<span></span>").append(A).append("<table border='0' class='EditTable' id='"+r+"_2'><tbody><tr id='Act_Buttons'><td class='navButton ui-widget-content' width='"+d.labelswidth+"'>"+s+t+"</td><td class='EditButton ui-widget-content'>"+B+"</td></tr></tbody></table>");createModal(i,z,d,"#gview_"+w.p.id,b("#gview_"+w.p.id)[0]);z=null;jQuery("#"+i.themodal).keydown(function(C){if(C.which===27){if(p){hideModal(this,{gb:d.gbox,jqm:d.jqModal,onClose:d.onClose})}return false}if(d.navkeys[0]===true){if(C.which===d.navkeys[1]){b("#pData","#"+r+"_2").trigger("click");return false}if(C.which===d.navkeys[2]){b("#nData","#"+r+"_2").trigger("click");return false}}});d.closeicon=b.extend([true,"left","ui-icon-close"],d.closeicon);if(d.closeicon[0]==true){b("#cData","#"+r+"_2").addClass(d.closeicon[1]=="right"?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+d.closeicon[2]+"'></span>")}viewModal("#"+i.themodal,{gbox:"#gbox_"+q,jqm:d.jqModal,modal:d.modal});b(".fm-button:not(.ui-state-disabled)","#"+r+"_2").hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});j();b("#cData","#"+r+"_2").click(function(C){hideModal("#"+i.themodal,{gb:"#gbox_"+q,jqm:d.jqModal,onClose:d.onClose});return false});b("#nData","#"+r+"_2").click(function(C){b("#FormError","#"+r).hide();var D=h();D[0]=parseInt(D[0]);if(D[0]!=-1&&D[1][D[0]+1]){if(b.isFunction(d.onclickPgButtons)){d.onclickPgButtons("next",b("#"+y),D[1][D[0]])}l(D[1][D[0]+1],w);b(w).setSelection(D[1][D[0]+1]);if(b.isFunction(d.afterclickPgButtons)){d.afterclickPgButtons("next",b("#"+y),D[1][D[0]+1])}n(D[0]+1,D[1].length-1)}j();return false});b("#pData","#"+r+"_2").click(function(D){b("#FormError","#"+r).hide();var C=h();if(C[0]!=-1&&C[1][C[0]-1]){if(b.isFunction(d.onclickPgButtons)){d.onclickPgButtons("prev",b("#"+y),C[1][C[0]])}l(C[1][C[0]-1],w);b(w).setSelection(C[1][C[0]-1]);if(b.isFunction(d.afterclickPgButtons)){d.afterclickPgButtons("prev",b("#"+y),C[1][C[0]-1])}n(C[0]-1,C[1].length-1)}j();return false})}function j(){if(d.closeOnEscape===true||d.navkeys[0]===true){setTimeout(function(){b(".ui-jqdialog-titlebar-close","#"+i.modalhead).focus()},0)}}var o=h();n(o[0],o[1].length-1);function n(D,E,C){if(D==0){b("#pData","#"+r+"_2").addClass("ui-state-disabled")}else{b("#pData","#"+r+"_2").removeClass("ui-state-disabled")}if(D==E){b("#nData","#"+r+"_2").addClass("ui-state-disabled")}else{b("#nData","#"+r+"_2").removeClass("ui-state-disabled")}}function h(){var D=b(w).getDataIDs(),C=b("#id_g","#"+r).val(),E=b.inArray(C,D);return[E,D]}function m(I,O,M,U){var E,H,P,X,C,S=0,W,Y,V=[],N=false,K="<td class='CaptionTD ui-widget-content' width='"+d.labelswidth+"'>&nbsp;</td><td class='DataTD ui-helper-reset ui-widget-content' style='white-space:pre;'>&nbsp;</td>",L="",F="<td class='CaptionTD ui-widget-content'>&nbsp;</td><td class='DataTD ui-widget-content' style='white-space:pre;'>&nbsp;</td>",J=["integer","number","currency"],R=0,Q=0,G,D;for(var T=1;T<=U;T++){L+=T==1?K:F}b(O.p.colModel).each(function(aa){if(this.editrules&&this.editrules.edithidden===true){H=false}else{H=this.hidden===true?true:false}if(!H&&this.align==="right"){if(this.formatter&&b.inArray(this.formatter,J)!==-1){R=Math.max(R,parseInt(this.width,10))}else{Q=Math.max(Q,parseInt(this.width,10))}}});G=R!==0?R:Q!==0?Q:0;N=b(O).getInd(I);b(O.p.colModel).each(function(ab){E=this.name;D=false;if(this.editrules&&this.editrules.edithidden===true){H=false}else{H=this.hidden===true?true:false}Y=H?"style='display:none'":"";if(E!=="cb"&&E!=="subgrid"&&this.editable===true){if(N===false){W=""}else{if(E==O.p.ExpandColumn&&O.p.treeGrid===true){W=b("td:eq("+ab+")",O.rows[N]).text()}else{W=b("td:eq("+ab+")",O.rows[N]).html()}}D=this.align==="right"&&G!==0?true:false;var aa=b.extend({},this.editoptions||{},{id:E,name:E}),af=b.extend({},{rowabove:false,rowcontent:""},this.formoptions||{}),ac=parseInt(af.rowpos)||S+1,ae=parseInt((parseInt(af.colpos)||1)*2);if(af.rowabove){var ad=b("<tr><td class='contentinfo' colspan='"+(U*2)+"'>"+af.rowcontent+"</td></tr>");b(M).append(ad);ad[0].rp=ac}P=b(M).find("tr[rowpos="+ac+"]");if(P.length==0){P=b("<tr "+Y+" rowpos='"+ac+"'></tr>").addClass("FormData").attr("id","trv_"+E);b(P).append(L);b(M).append(P);P[0].rp=ac}b("td:eq("+(ae-2)+")",P[0]).html("<b>"+(typeof af.label==="undefined"?O.p.colNames[ab]:af.label)+"</b>");b("td:eq("+(ae-1)+")",P[0]).append("<span>"+W+"</span>").attr("id","v_"+E);if(D){b("td:eq("+(ae-1)+") span",P[0]).css({"text-align":"right",width:G+"px"})}V[S]=ab;S++}});if(S>0){var Z=b("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(U*2-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+I+"'/></td></tr>");Z[0].rp=S+99;b(M).append(Z)}return V}function l(G,I){var C,J,F=0,E,D,H;H=b(I).getInd(G,true);if(!H){return}b("td",H).each(function(K){C=I.p.colModel[K].name.replace(".","\\.");if(I.p.colModel[K].editrules&&I.p.colModel[K].editrules.edithidden===true){J=false}else{J=I.p.colModel[K].hidden===true?true:false}if(C!=="cb"&&C!=="subgrid"&&I.p.colModel[K].editable===true){if(C==I.p.ExpandColumn&&I.p.treeGrid===true){E=b(this).text()}else{E=b(this).html()}D=b.extend({},I.p.colModel[K].editoptions||{});C="v_"+C;b("#"+C+" span","#"+r).html(E);if(J){b("#"+C,"#"+r).parents("tr:first").hide()}F++}});if(F>0){b("#id_g","#"+r).val(G)}}})},delGridRow:function(c,d){d=b.extend({top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:false,drag:true,resize:true,url:"",mtype:"POST",reloadAfterSubmit:true,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:true,closeOnEscape:false,delData:{},delicon:[],cancelicon:[],onClose:null},b.jgrid.del,d||{});a=d;return this.each(function(){var l=this;if(!l.grid){return}if(!c){return}var m=typeof d.beforeShowForm==="function"?true:false,g=typeof d.afterShowForm==="function"?true:false,e=l.p.id,f={},j="DelTbl_"+e,h={themodal:"delmod"+e,modalhead:"delhd"+e,modalcontent:"delcnt"+e,scrollelm:j};if(isArray(c)){c=c.join()}if(b("#"+h.themodal).html()!=null){b("#DelData>td","#"+j).text(c);b("#DelError","#"+j).hide();if(d.processing===true){d.processing=false;b("#dData","#"+j).removeClass("ui-state-active")}if(m){d.beforeShowForm(b("#"+j))}viewModal("#"+h.themodal,{gbox:"#gbox_"+e,jqm:d.jqModal,jqM:false,modal:d.modal});if(g){d.afterShowForm(b("#"+j))}}else{var n=isNaN(d.dataheight)?d.dataheight:d.dataheight+"px";var k="<div id='"+j+"' class='formdata' style='width:100%;overflow:auto;position:relative;height:"+n+";'>";k+="<table class='DelTable'><tbody>";k+="<tr id='DelError' style='display:none'><td class='ui-state-error'></td></tr>";k+="<tr id='DelData' style='display:none'><td >"+c+"</td></tr>";k+='<tr><td class="delmsg" style="white-space:pre;">'+d.msg+"</td></tr><tr><td >&nbsp;</td></tr>";k+="</tbody></table></div>";var i="<a href='javascript:void(0)' id='dData' class='fm-button ui-state-default ui-corner-all'>"+d.bSubmit+"</a>",o="<a href='javascript:void(0)' id='eData' class='fm-button ui-state-default ui-corner-all'>"+d.bCancel+"</a>";k+="<table cellspacing='0' cellpadding='0' border='0' class='EditTable' id='"+j+"_2'><tbody><tr><td class='DataTD ui-widget-content'></td></tr><tr style='display:block;height:3px;'><td></td></tr><tr><td class='DelButton EditButton'>"+i+"&nbsp;"+o+"</td></tr></tbody></table>";d.gbox="#gbox_"+e;createModal(h,k,d,"#gview_"+l.p.id,b("#gview_"+l.p.id)[0]);b(".fm-button","#"+j+"_2").hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});d.delicon=b.extend([true,"left","ui-icon-scissors"],d.delicon);d.cancelicon=b.extend([true,"left","ui-icon-cancel"],d.cancelicon);if(d.delicon[0]==true){b("#dData","#"+j+"_2").addClass(d.delicon[1]=="right"?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+d.delicon[2]+"'></span>")}if(d.cancelicon[0]==true){b("#eData","#"+j+"_2").addClass(d.cancelicon[1]=="right"?"fm-button-icon-right":"fm-button-icon-left").append("<span class='ui-icon "+d.cancelicon[2]+"'></span>")}b("#dData","#"+j+"_2").click(function(s){var q=[true,""];f={};var r=b("#DelData>td","#"+j).text();if(typeof d.onclickSubmit==="function"){f=d.onclickSubmit(a)||{}}if(typeof d.beforeSubmit==="function"){q=d.beforeSubmit(r)}var p=a.url?a.url:l.p.editurl;if(!p){q[0]=false;q[1]+=" "+b.jgrid.errors.nourl}if(q[0]===false){b("#DelError>td","#"+j).html(q[1]);b("#DelError","#"+j).show()}else{if(!d.processing){d.processing=true;b(this).addClass("ui-state-active");var t=b.extend({oper:"del",id:r},d.delData,f);b.ajax({url:p,type:d.mtype,data:t,complete:function(x,v){if(v!="success"){q[0]=false;if(b.isFunction(a.errorTextFormat)){q[1]=a.errorTextFormat(x)}else{q[1]=v+" Status: '"+x.statusText+"'. Error code: "+x.status}}else{if(typeof a.afterSubmit==="function"){q=a.afterSubmit(x,r)}}if(q[0]===false){b("#DelError>td","#"+j).html(q[1]);b("#DelError","#"+j).show()}else{if(a.reloadAfterSubmit){if(l.p.treeGrid){b(l).setGridParam({treeANode:0,datatype:l.p.treedatatype})}b(l).trigger("reloadGrid")}else{var u=[];u=r.split(",");if(l.p.treeGrid===true){try{b(l).delTreeNode(u[0])}catch(y){}}else{for(var w=0;w<u.length;w++){b(l).delRowData(u[w])}}l.p.selrow=null;l.p.selarrrow=[]}if(b.isFunction(a.afterComplete)){setTimeout(function(){a.afterComplete(x,r)},500)}}d.processing=false;b("#dData","#"+j+"_2").removeClass("ui-state-active");if(q[0]){hideModal("#"+h.themodal,{gb:"#gbox_"+e,jqm:d.jqModal,onClose:a.onClose})}},error:function(w,u,v){b("#DelError>td","#"+j).html(u+" : "+v);b("#DelError","#"+j).show();d.processing=false;b("#dData","#"+j+"_2").removeClass("ui-state-active")}})}}return false});b("#eData","#"+j+"_2").click(function(p){hideModal("#"+h.themodal,{gb:"#gbox_"+e,jqm:d.jqModal,onClose:a.onClose});return false});if(m){d.beforeShowForm(b("#"+j))}viewModal("#"+h.themodal,{gbox:"#gbox_"+e,jqm:d.jqModal,modal:d.modal});if(g){d.afterShowForm(b("#"+j))}}if(d.closeOnEscape===true){setTimeout(function(){b(".ui-jqdialog-titlebar-close","#"+h.modalhead).focus()},0)}})},navGrid:function(f,h,e,g,d,c,i){h=b.extend({edit:true,editicon:"ui-icon-pencil",add:true,addicon:"ui-icon-plus",del:true,delicon:"ui-icon-trash",search:true,searchicon:"ui-icon-search",refresh:true,refreshicon:"ui-icon-refresh",refreshstate:"firstpage",view:false,viewicon:"ui-icon-document",position:"left",closeOnEscape:true,afterRefresh:null},b.jgrid.nav,h||{});return this.each(function(){var j={themodal:"alertmod",modalhead:"alerthd",modalcontent:"alertcnt"},n=this,m,s,o,k;if(!n.grid){return}if(b("#"+j.themodal).html()==null){if(typeof window.innerWidth!="undefined"){m=window.innerWidth,s=window.innerHeight}else{if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){m=document.documentElement.clientWidth,s=document.documentElement.clientHeight}else{m=1024;s=768}}createModal(j,"<div>"+h.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+n.p.id,jqModal:true,drag:true,resize:true,caption:h.alertcap,top:s/2-25,left:m/2-100,width:200,height:"auto",closeOnEscape:h.closeOnEscape},"","",true)}var p,q=b("<table cellspacing='0' cellpadding='0' border='0' class='ui-pg-table navtable' style='float:left;table-layout:auto;'><tbody><tr></tr></tbody></table>"),r="<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='ui-separator'></span></td>",l=b(n.p.pager).attr("id")||"pager";if(h.add){g=g||{};p=b("<td class='ui-pg-button ui-corner-all'></td>");b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.addicon+"'></span>"+h.addtext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.addtitle||"",id:g.id||"add_"+n.p.id}).click(function(){if(typeof h.addfunc=="function"){h.addfunc()}else{b(n).editGridRow("new",g)}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}if(h.edit){p=b("<td class='ui-pg-button ui-corner-all'></td>");e=e||{};b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.editicon+"'></span>"+h.edittext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.edittitle||"",id:e.id||"edit_"+n.p.id}).click(function(){var t=n.p.selrow;if(t){if(typeof h.editfunc=="function"){h.editfunc(t)}else{b(n).editGridRow(t,e)}}else{viewModal("#"+j.themodal,{gbox:"#gbox_"+n.p.id,jqm:true});b("#jqg_alrt").focus()}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}if(h.view){p=b("<td class='ui-pg-button ui-corner-all'></td>");i=i||{};b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.viewicon+"'></span>"+h.viewtext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.viewtitle||"",id:i.id||"view_"+n.p.id}).click(function(){var t=n.p.selrow;if(t){b(n).viewGridRow(t,i)}else{viewModal("#"+j.themodal,{gbox:"#gbox_"+n.p.id,jqm:true});b("#jqg_alrt").focus()}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}if(h.del){p=b("<td class='ui-pg-button ui-corner-all'></td>");d=d||{};b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.delicon+"'></span>"+h.deltext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.deltitle||"",id:d.id||"del_"+n.p.id}).click(function(){var t;if(n.p.multiselect){t=n.p.selarrrow;if(t.length==0){t=null}}else{t=n.p.selrow}if(t){b(n).delGridRow(t,d)}else{viewModal("#"+j.themodal,{gbox:"#gbox_"+n.p.id,jqm:true});b("#jqg_alrt").focus()}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}if(h.add||h.edit||h.del||h.view){b("tr",q).append(r)}if(h.search){p=b("<td class='ui-pg-button ui-corner-all'></td>");c=c||{};b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.searchicon+"'></span>"+h.searchtext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.searchtitle||"",id:c.id||"search_"+n.p.id}).click(function(){b(n).searchGrid(c);return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}if(h.refresh){p=b("<td class='ui-pg-button ui-corner-all'></td>");b(p).append("<div class='ui-pg-div'><span class='ui-icon "+h.refreshicon+"'></span>"+h.refreshtext+"</div>");b("tr",q).append(p);b(p,q).attr({title:h.refreshtitle||"",id:"refresh_"+n.p.id}).click(function(){n.p.search=false;try{var u=n.p.id;b("#fbox_"+u).searchFilter().reset()}catch(v){}switch(h.refreshstate){case"firstpage":n.p.page=1;b(n).trigger("reloadGrid");break;case"current":var t=n.p.multiselect===true?n.p.selarrrow:n.p.selrow;b(n).trigger("reloadGrid");setTimeout(function(){if(n.p.multiselect===true){if(t.length>0){for(var w=0;w<t.length;w++){b(n).setSelection(t[w],false)}}}else{if(t){b(n).setSelection(t,false)}}},1000);break}if(b.isFunction(h.afterRefresh)){h.afterRefresh()}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")});p=null}k=b(".ui-jqgrid").css("font-size")||"11px";b("body").append("<div id='testpg2' class='ui-jqgrid ui-widget ui-widget-content' style='font-size:"+k+";visibility:hidden;' ></div>");o=b(q).clone().appendTo("#testpg2").width();b("#testpg2").remove();b("#"+l+"_"+h.position,"#"+l).append(q);if(n.p._nvtd){if(o>n.p._nvtd[0]){b("#"+l+"_"+h.position,"#"+l).width(o);n.p._nvtd[0]=o}n.p._nvtd[1]=o}})},navButtonAdd:function(c,d){d=b.extend({caption:"newButton",title:"",buttonicon:"ui-icon-newwin",onClickButton:null,position:"last",cursor:"pointer"},d||{});return this.each(function(){if(!this.grid){return}if(c.indexOf("#")!=0){c="#"+c}var e=b(".navtable",c)[0];if(e){var f=b("<td></td>");b(f).addClass("ui-pg-button ui-corner-all").append("<div class='ui-pg-div'><span class='ui-icon "+d.buttonicon+"'></span>"+d.caption+"</div>");if(d.id){b(f).attr("id",d.id)}if(d.position=="first"){if(e.rows[0].cells.length===0){b("tr",e).append(f)}else{b("tr td:eq(0)",e).before(f)}}else{b("tr",e).append(f)}b(f,e).attr("title",d.title||"").click(function(g){if(b.isFunction(d.onClickButton)){d.onClickButton()}return false}).hover(function(){b(this).addClass("ui-state-hover")},function(){b(this).removeClass("ui-state-hover")}).css("cursor",d.cursor?d.cursor:"normal")}})},navSeparatorAdd:function(c,d){d=b.extend({sepclass:"ui-separator",sepcontent:""},d||{});return this.each(function(){if(!this.grid){return}if(c.indexOf("#")!=0){c="#"+c}var f=b(".navtable",c)[0];if(f){var e="<td class='ui-pg-button ui-state-disabled' style='width:4px;'><span class='"+d.sepclass+"'></span>"+d.sepcontent+"</td>";b("tr",f).append(e)}})},GridToForm:function(c,d){return this.each(function(){var g=this;if(!g.grid){return}var f=b(g).getRowData(c);if(f){for(var e in f){if(b("[name="+e+"]",d).is("input:radio")||b("[name="+e+"]",d).is("input:checkbox")){b("[name="+e+"]",d).each(function(){if(b(this).val()==f[e]){b(this).attr("checked","checked")}else{b(this).attr("checked","")}})}else{b("[name="+e+"]",d).val(f[e])}}}})},FormToGrid:function(d,e,f,c){return this.each(function(){var i=this;if(!i.grid){return}if(!f){f="set"}if(!c){c="first"}var g=b(e).serializeArray();var h={};b.each(g,function(j,k){h[k.name]=k.value});if(f=="add"){b(i).addRowData(d,h,c)}else{if(f=="set"){b(i).setRowData(d,h)}}})}})})(jQuery);