/**
 * jqGrid extension
 * Paul Tiseo ptiseo@wasteconsultants.com
 * 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/ 
(function(a){a.fn.extend({getPostData:function(){var b=this[0];if(!b.grid){return}return b.p.postData},setPostData:function(b){var c=this[0];if(!c.grid){return}if(typeof(b)==="object"){c.p.postData=b}else{alert("Error: cannot add a non-object postData value. postData unchanged.")}},appendPostData:function(b){var c=this[0];if(!c.grid){return}if(typeof(b)==="object"){a.extend(c.p.postData,b)}else{alert("Error: cannot append a non-object postData value. postData unchanged.")}},setPostDataItem:function(b,c){var d=this[0];if(!d.grid){return}d.p.postData[b]=c},getPostDataItem:function(b){var c=this[0];if(!c.grid){return}return c.p.postData[b]},removePostDataItem:function(b){var c=this[0];if(!c.grid){return}delete c.p.postData[b]},getUserData:function(){var b=this[0];if(!b.grid){return}return b.p.userData},getUserDataItem:function(b){var c=this[0];if(!c.grid){return}return c.p.userData[b]}})})(jQuery);