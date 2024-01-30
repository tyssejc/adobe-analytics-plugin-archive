/*
 * Plugin: getVisitStart v2.1 - return 1 on start of visit, else 0
 */
s.getVisitStart=new Function("c",""
+"var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callTyp"
+"e()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s"
+".c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n");