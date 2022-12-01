/**
 * @deprecated FOR REFERENCE ONLY. NOT INTENDED FOR USE IN NEW ANALYTICS IMPLEMENTATIONS.
 * Not sure which version this is, but it belongs in a museum.
 */
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}
