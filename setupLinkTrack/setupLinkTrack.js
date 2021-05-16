/**
 * @deprecated FOR REFERENCE ONLY. NOT INTENDED FOR USE IN NEW ANALYTICS IMPLEMENTATIONS.
 * @file This is a deobfuscation of setupLinkTrack v3.16.
 */

window.s.setupLinkTrack = function(variableList, cookieName, eventVar){
    
    // _this refers to the global s object
    var _this = this;

    var cookieValue = _this.c_r(cookieName);
    
    // parse the stringified comma-delimited list of tracking variables
    // passed in the first argument as an array
    if (variableList){
        var variableListArray = variableList.split(',');
    }
    
    // grab the values from the cookie
    if (cookieValue != ''){
        
        var cookieValueArray = _this.split(cookieValue, '^^');
        
        if (cookieValueArray[1] != ''){

            for (x in variableListArray){
            
                _this[variableListArray[x]] = cookieValueArray[x];
            
                if(eventVar){
            
                    _this.events=_this.apl(_this.events,eventVar,',',2);
            
                }
            }
        }
    }

    // now that we've grabbed the values from the cookie,
    // let's reset it for the next use
    _this.c_w(cookieName,'',0);
    

    if (typeof _this.linkObject != 'undefined'){
        
        _this.linkTrackArray = [];
        
        // set pageName as the first value in the array
        if (typeof _this.pageName != 'undefined'){
            _this.linkTrackArray[0] = _this.pageName;
        }

        // set link name and link position
        if (typeof _this.linkObject != null){

            if (_this.linkObject != 0){
            
                if (_this.linkObject.getAttribute('name') != null){
            
                    var linkObjectNameAttr = _this.linkObject.getAttribute('name');
            
                    if (linkObjectNameAttr.indexOf('&lpos=') > -1){
                        _this.linkTrackArray[3] = linkObjectNameAttr.match('\&lpos\=([^\&]*)')[1];
                    }
            
                    if (linkObjectNameAttr.indexOf('&lid=') > -1){
                        _this.linkTrackArray[1] = linkObjectNameAttr.match('\&lid\=([^\&]*)')[1];
                    }
            
                }
            }

            if (typeof _this.linkTrackArray[1] == 'undefined' && _this.hbx_lt != 'manual'){

                if (_this.linkName != 0){
                
                    _this.linkTrackArray[1] = _this.linkName;
                
                } else if (_this.linkObject != 0){
                
                    if (_this.cleanStr(_this.linkObject.innerHTML).length>0){

                        _this.linkTrackArray[1]=_this.cleanStr(_this.linkObject.innerHTML);

                    } else if(_this.linkObject.innerHTML.indexOf('<img')>-1){

                        if(_this.linkObject.innerHTML.indexOf('alt=')>-1){

                            _this.linkTrackArray[1] = _this.linkObject.innerHTML.match('alt=\"([^\"]*)')[1];

                        } else {

                            _this.linkTrackArray[1] = _this.linkObject.innerHTML.match('src=\"([^\"]*)')[1]

                        }

                    } else {

                        _this.linkTrackArray[1]=_this.linkObject.innerHTML;

                    }
                }
            }
            
            try {
                if (typeof _this.trackLinkModule(_this.linkObject) != 'undefined'){

                    _this.linkTrackArray[3] = _this.trackLinkModule(_this.linkObject);

                }
            } catch(e){}
            
            if (_this.linkTrackArray[1] != null && typeof _this.linkTrackArray[1] != 'undefined'){

                if (typeof _this.pageName != 'undefined'){
                    _this.linkTrackArray[0] = _this.pageName;
                }
                
                _this.linkTrackArray[2] = _this.pageName+' | '+_this.linkTrackArray[1];
            }
        }

        if (_this.linkType != 0){

            for (var x=0; x<variableListArray.length; x++){
                
                _this[variableListArray[x]] = _this.cleanStr(_this.linkTrackArray[x]);
                
                if (eventVar){
                    _this.events = _this.apl(_this.events,eventVar,',',2);
                    _this.linkTrackVars = _this.apl(_this.linkTrackVars,'events',',',2);
                }
            }
        
            _this.linkTrackVars=_this.apl(_this.linkTrackVars,variableList,',',2);

        } else {

            if (_this.linkTrackArray[1]){

                var tcv='';

                for (var x=0; x < _this.linkTrackArray.length; x++){

                    tcv += _this.cleanStr(_this.linkTrackArray[x]) + '^^'

                }
                _this.c_w(cookieName,tcv)
            }
        }

    }

    // one last thing before we're done —
    // clear the values for link tracking so they don't accidentally get reused
    _this.linkTrackArray=null;
}