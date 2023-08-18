var fa;
function setupFormAnalysis(){
	if (document.forms && document.forms.length > 0 && typeof fa === 'undefined'){
		fo = document.forms[0];
		fn = fo.name;
		fa = new Object();
        fa.os = new Array();
		fa.s = s;
		s.fafa = fa;
        fa.vu = s.varUsed;
		fa.pevu = s.pageErrorsVarUsed;
		fa.pnvu = s.pageNameWithErrorsVarUsed;
		fa.va = new Array('', '', '', '');
		fa.va[1] = fn;
		fa.va[3] = 'No Data Entered';
		fa.ul = window.onunload;
		window.onunload = fasl;
        //fa.ul = window.onresize;
        //window.onresize = fasl;

		for (en = 0; en < fo.elements.length; en++) {
			el = fo.elements[en];
			t = el.type;
			if (t && t.toUpperCase) {
				t = t.toUpperCase();
				if (t.indexOf('FIELDSET') < 0) {
					var md = el.onmousedown,
						kd = el.onkeydown,
						omd = md ? md.toString() : '',
						okd = kd ? kd.toString() : '';
					if (omd.indexOf('.fam(') < 0 && okd.indexOf('.fam(') < 0) {
						el.s_famd = md;
						el.s_fakd = kd;
						el.onmousedown = fam;//fam;
						el.onkeydown = fam;//fam
					}
				}
			}
		}
	}
}
//window.onunload = s.fasl
function fasl(e){
    if (fa.va[1] != '' && fa.va[3] != '') {
        fa.va[0] = !fa.s.pageName && fa.s.trackPageName ? window.location.host + window.location.pathname:fa.va[0]?fa.va[0]:fa.s.pageName;
        fa.va[2] = '';  
        if (fa.va[3] != 'No Data Entered') {
            if (e == 'e')
				fa.va[2] = 'Error';
            else if (e == 's')
				fa.va[2] = 'Success';
            else 
				fa.va[2] = 'Abandon'
        }
			
        var currentPageName = fa.s.pageName;
		fa.s.clearVars();
        fa.s.pageName = currentPageName;  
        
        var tp = fa.s.trackPageName ? fa.va[0] + ':' : '',
            t3 = e != 's' ? ':(' + fa.va[3] + ')' : '',
            ym = fa.va[3] != 'No Data Entered' ? tp + fa.va[1] + ':' + fa.va[2] + t3 : tp + fa.va[1] + t3,
            ltv = fa.s.linkTrackVars,
            lte = fa.s.linkTrackEvents;
        fa.s.linkTrackVars = ltv == 'None' ? fa.vu : ltv + ',' + fa.vu;
		eval("s." + fa.vu + "=" + "'" + ym + "'");
		
		if (typeof(fa.pevu) != 'undefined' && fa.pevu != null
			&& typeof(fa.pnvu) != 'undefined' && fa.pnvu != null
			&& $('#pageNameWithErrors').val() != 'undefined' && $('#pageNameWithErrors').val() != null
			&& $('#errorsOnPage').val() != 'undefined' && $('#errorsOnPage').val() != null){
				fa.s.linkTrackVars = fa.s.linkTrackVars + ',' + fa.pevu + ',' + fa.pnvu;
				eval("s." + fa.pevu + "=" + "'" + $('#errorsOnPage').val() + "'");
				eval("s." + fa.pnvu + "=" + "'" + $('#pageNameWithErrors').val() + "'");
			}

        fa.s.usePlugins = false;
        var faLink = new Object();
        faLink.href = '#';
        fa.s.tl(faLink, 'e', 'Form Analysis');
        fa.va[3] = '';
        fa.s.usePlugins = true;
    }
    return typeof(fa.ul) != 'undefined' && fa.ul != null && e != 'e' && e != 's' ? fa.ul(e) : true;
}
//el.onmousedown = s.fam
function fam(e){
    if (!e) e = window.event;
    var et = e.type.toUpperCase(), t = this.type.toUpperCase(), fn = this.form.name, en = this.name;
    if (document.layers) {
        kp = e.which;
        b = e.which
    } else {
        kp = e.keyCode;
        b = e.button
    }
    et = et == 'MOUSEDOWN'?1:et=='KEYDOWN'?2:et;
    if (fa.ce != en || fa.cf != fn) {
		if ((et == 1 && b != 2 && 'BUTTONRESETIMAGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t) > -1) // removed SUBMIT
		|| (et == 1 && b == 2 && 'TEXTAREAPASSWORDFILE'.indexOf(t) > -1)
		|| (et == 2 && kp != 9 && kp != 13)) {
			fa.va[1] = fn;
            fa.va[3] = en;
		}
    }
    if (et == 1 && this.s_famd && this.s_famd != fam)
		return this.s_famd(e);
    if (et == 2 && this.s_fakd && this.s_fakd != fam)
		return this.s_fakd(e);
}
function onValidationFailure(){
}
function onValidationSuccess(){
    s.fafa.va[1] = '';
	s.fafa.va[3] = '';
}
s.onValidationSuccess=onValidationSuccess;
