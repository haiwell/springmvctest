// This file should be used if you want to debug
function jqGridInclude()
{
    var _contextPath = window.contextPath||"";
    var localLang = "zh";
    if (window.$GC) {
        if (!_contextPath) _contextPath = $GC.getContextPath();
        localLang = $GC.getProperty("lang")||"zh";
    }
        
    // General ENV: develop/test ENV
    var pathtojsfiles = _contextPath + "/gcbase/js/jquery/jgrid35/min/"; // need to be ajusted
    
    // set include to false if you do not want some modules to be included
    var modules = [
        { include: true, incfile:'i18n/grid.locale-'+localLang+'.js'}, // jqGrid translation
        { include: true, incfile:'grid.base.js'}, // jqGrid base
        { include: true, incfile:'grid.common.js'}, // jqGrid common for editing
        { include: true, incfile:'grid.formedit.js'}, // jqGrid Form editing
        { include: true, incfile:'grid.inlinedit.js'}, // jqGrid inline editing
        { include: true, incfile:'grid.celledit.js'}, // jqGrid cell editing
        { include: true, incfile:'grid.subgrid.js'}, //jqGrid subgrid
        { include: true, incfile:'grid.treegrid.js'}, //jqGrid treegrid
        { include: true, incfile:'grid.custom.js'}, //jqGrid custom 
        { include: true, incfile:'grid.postext.js'}, //jqGrid postext
        { include: true, incfile:'grid.tbltogrid.js'}, //jqGrid table to grid 
        { include: true, incfile:'grid.setcolumns.js'}, //jqGrid setcolumns
        { include: true, incfile:'grid.import.js'}, //jqGrid import
        { include: true, incfile:'jquery.fmatter.js'}, //jqGrid formater
        { include: true, incfile:'jqModal.js'}, //xmljson utils
        { include: true, incfile:'jqDnR.js'}, //xmljson utils
        { include: true, incfile:'JsonXml.js'}, //xmljson utils
        { include: true, incfile:'jquery.searchFilter.js'} // search Plugin
    ];

    if (1==2) {     // product -- all
        pathtojsfiles = _contextPath + "/gcbase/js/jquery/jgrid35/"; // need to be ajusted
        modules = [
            //{ include: true, incfile:'min/i18n/grid.locale-zh.js'}, // jqGrid translation
            { include: true, incfile:'jquery.jqGrid.min.js'} // whole plugin
        ];
    }
    
    var filename;
    for(var i=0;i<modules.length; i++)
    {
        if(modules[i].include === true) {
        	
        	filename = pathtojsfiles+modules[i].incfile;
       		if(jQuery.browser.safari) {
       			jQuery.ajax({url:filename,dataType:'script', async:false, cache: true});
       		} else {
       			IncludeJavaScript(filename, modules[i].charset);
			}
        }
    }
    function IncludeJavaScript(jsFile, charset)
    {
        if (!charset) charset = 'utf-8';
        document.write("<scr" + "ipt type=\"text/javascript\" src=\"" + jsFile + "\" onerror=\"alert('Error loading ' + this.src);\" charset=\"" + charset + "\"></scr" + "ipt>");
    };
};
jqGridInclude();
