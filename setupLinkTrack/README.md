***Note: This plugin has been officially deprecated since the introduction of the AppMeasurement library in 2013. The documentation and code provided herein is for reference only. Do not use in new Analytics implementations!***

# setupLinkTrack

Records the available anchor tag attributes in a cookie and records them on the next image request. 

Typical implementations record the link name and the page name where the link click occurred, for correlation purposes.  This version of the plugin is also configured to track the anchor tag's first parent div ID as the link position, so as to help differentiate between links with the same link names on the same page.

The anchor tag can track the link name differently, depending on the page encoding:

- By default, the anchor tag text will be used as the link name.
- If an image is used within the anchor HTML, then the plugin will attempt to use the image's `alt` attribute as the link name.
- If an image is used within the anchor HTML and it does not have an `alt` attribute, the plugin will use the image `src` attribute for the link name.

This plugin was originally created mimic historical HBX functionality.  As such, it will still continue to do so by using the following syntax in the name attribute in the anchor, and can allow a developer to track specific links different without the need for additional JavaScript.  For example:
```html
<a href="homepage.html" name="&lid=FooterHomePage&lpos=Footer">Home Page</a>
```

The plugin also cleanses any input with the built in String Cleansing (s.cleanStr) function by removing:
- HTML Encoding
- Leading/Trailing Whitespace
- Unicode Characters
- Tab Characters
- Newline Characters

Note: s.cleanStr is not specific to setupLinkTrack and can be used for other string inputs as well.
 
## Required Supporting Plug-ins
- Cookie Combining Utility

## Plug-in Code and Implementation

### Config Section
No configuration variables required.

### doPlugins Section
To initialize the plug-in, two lines of code are required in the doPlugins section of your s_code, preferably after you have designated the s.pageName variable.

```javascript
//Auto Link Tracking
if(!window.dtm_linkOverride){
        s.hbx_lt = "auto";
        s.setupLinkTrack("prop17,prop18,prop19,prop20","SC_LINKS");     
}
dtm_linkOverride = false;
```

The plugin accepts three parameters:

- The variable list:
  - Link pageName
  - Link Name
  - Link Name | Link Page Name Concatenation (Maintained for legacy functionality, but not explicitly required)
  - Link Position
- The cookie name
- Optional – a counter event name, if desired.  

The tracking can also be manually enabled, if desired, with by setting the s.hbx_lt parameter to 'manual' instead of the default 'auto' setting.  This is an atypical configuration, and only included to support legacy implementations.

If you're'using a DTM implementation (or other tag management system) where specific rules are firing s.tl() calls, it is recommended to use set the dtm_linkOverride variable within the rule, so that the value(s) set in the rule take precedent.  

### Plug-ins Section

```javascript
/* Plugin: setupLinkTrack 3.16 */​

/* Obfuscated Code */
s.setupLinkTrack=new Function("vl","c","e",""
+"var s=this;var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!='')"
+"{var cva=s.split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cv"
+"a[x];if(e){s.events=s.apl(s.events,e,',',2);}}}}s.c_w(c,'',0);if(ty"
+"peof s.linkObject!='undefined'){s.lta=[];if(typeof s.pageName!='und"
+"efined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){if(s.link"
+"Object!=0){if(s.linkObject.getAttribute('name')!=null){var b=s.link"
+"Object.getAttribute('name');if(b.indexOf('&lpos=')>-1){s.lta[3]=b.m"
+"atch('\&lpos\=([^\&]*)')[1];}if(b.indexOf('&lid=')>-1){s.lta[1]=b.m"
+"atch('\&lid\=([^\&]*)')[1];}}}if(typeof s.lta[1]=='undefined'&&s.hb"
+"x_lt!='manual'){if(s.linkName!=0){s.lta[1]=s.linkName;}else if(s.li"
+"nkObject!=0){if(s.cleanStr(s.linkObject.innerHTML).length>0){s.lta["
+"1]=s.cleanStr(s.linkObject.innerHTML);}else if(s.linkObject.innerHT"
+"ML.indexOf('<img')>-1){if(s.linkObject.innerHTML.indexOf('alt=')>-1"
+"){s.lta[1]=s.linkObject.innerHTML.match('alt=\"([^\"]*)')[1];}else{s."
+"lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}}else{s.lta["
+"1]=s.linkObject.innerHTML;}}}try{if(typeof s.trackLinkModule(s.link"
+"Object)!='undefined'){s.lta[3]=s.trackLinkModule(s.linkObject);}}ca"
+"tch(e){}if(s.lta[1]!=null&&typeof s.lta[1]!='undefined'){if(typeof "
+"s.pageName!='undefined')s.lta[0]=s.pageName;s.lta[2]=s.pageName+' |"
+" '+s.lta[1];}}if(s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla"
+"[x]]=s.cleanStr(s.lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s."
+"linkTrackVars=s.apl(s.linkTrackVars,'events',',',2);}}s.linkTrackVa"
+"rs=s.apl(s.linkTrackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';fo"
+"r(var x=0;x<s.lta.length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w("
+"c,tcv)}}s.lta=null;}");
```