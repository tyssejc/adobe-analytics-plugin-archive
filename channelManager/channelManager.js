/*
 * channelManager v3.0 - Tracking External Traffic
 */
s.channelManager=new Function("a","b","c","d","e","f","g",""
+"var s=this,h=new Date,i=0,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E"
+",F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V;U=s.getQueryParam?1:0;V=s.repl?1"
+":0;h.setTime(h.getTime()+1800000);if(e){i=1;if(s.c_r(e))i=0;if(!s.c"
+"_w(e,1,h))s.c_w(e,1,0);if(!s.c_r(e))i=0;if(f&&s.c_r('s_tbm'+f))i=0;"
+"}j=s.referrer?s.referrer:document.referrer;j=decodeURIComponent(j.t"
+"oLowerCase());if(!j)k=1;else {l=j.indexOf('?')>-1?j.indexOf('?'):j."
+"length;m=j.substring(0,l);n=j.split('/');n=n[2].split('?');o=n[0].t"
+"oLowerCase();p=s.linkInternalFilters.toLowerCase();p=p.split(',');f"
+"or(q=0;q<p.length;q++){r=o.indexOf(p[q])==-1?'':j;if(r)break;}}if(!"
+"r&&!k){t=j;u=v=o;w='Other Natural Referrers';x=s.seList+'>'+s._extr"
+"aSearchEngines;if(d==1){m=V?s.repl(m,'oogle','%'):s.replace(m,'oogl"
+"e','%');m=V?s.repl(m,'ahoo','^'):s.replace(m,'ahoo','^');j=V?s.repl"
+"(j,'as_q','*'):s.replace(j,'as_q','*');}y=x.split('>');for(z=0;z<y."
+"length;z++){A=y[z];A=A.split('|');B=A[0].split(',');for(C=0;C<B.len"
+"gth;C++){D=m.indexOf(B[C]);if(D>-1){if(A[2])E=v=A[2];else E=o;if(d="
+"=1){E=V?s.repl(E,'#',' - '):s.replace(E,'#',' - ');j=V?s.repl(j,'*'"
+",'as_q'):s.replace(j,'*','as_q');E=V?s.repl(E,'^','ahoo'):s.replace"
+"(E,'^','ahoo');E=V?s.repl(E,'%','oogle'):s.replace(E,'%','oogle');}"
+"F=A[1].split(',');for(G=0;G<F.length;G++){if(j.indexOf(F[G]+'=')>-1"
+"||j.indexOf('https://www.google.')==0||j.indexOf('http://r.search.y"
+"ahoo.com')==0)H=1;I=U?s.getQueryParam(F[G],'',j).toLowerCase():s.Ut"
+"il.getQueryParam(F[G],j).toLowerCase();if(H||I)break;}}if(H||I)brea"
+"k;}if(H||I)break;}}if(!r||g!='1'){J=a.split(',');for(var q in J){if"
+"(J.hasOwnProperty(q)){if(U?s.getQueryParam(J[q]):s.Util.getQueryPar"
+"am(J[q])){T=T?T+b+(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q"
+"])):(U?s.getQueryParam(J[q]):s.Util.getQueryParam(J[q]));}}}if(T){v"
+"=T;if(E)w='Paid Search';else w='Unknown Paid Channel';}if(!T&&E&&H)"
+"{v=E;w='Natural Search';}}if(i&&k&&!T)t=u=v=w='Typed/Bookmarked';J="
+"s._channelDomain;if(J&&o&&!r){K=J.split('>');for(L=0;L<K.length;L++"
+"){M=K[L]?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.length;fo"
+"r(P=0;P<O;P++){Q=N[P].toLowerCase();R=('/'+o).indexOf(Q);if(R>-1){w"
+"=M[0];break;}}if(R>-1)break;}}J=s._channelParameter;if(J){K=J.split"
+"('>');for(L=0;L<K.length;L++){M=K[L]?K[L].split('|'):'';N=M[1]?M[1]"
+".split(','):'';O=N.length;for(P=0;P<O;P++){R=U?s.getQueryParam(N[P]"
+"):s.Util.getQueryParam(N[P]);if(R){w=M[0];break;}}if(R)break;}}J=s."
+"_channelPattern;if(J){K=J.split('>');for(L=0;L<K.length;L++){M=K[L]"
+"?K[L].split('|'):'';N=M[1]?M[1].split(','):'';O=N.length;for(P=0;P<"
+"O;P++){Q=N[P].toLowerCase();R=T?T.toLowerCase():'';S=R.indexOf(Q);i"
+"f(S==0){w=M[0];break;}}if(S==0)break;}}S=w?T+u+w+I:'';c=c?c:'c_m';i"
+"f(c!='0')S=s.getValOnce(S,c,0);if(S){s._campaignID=T?T:'n/a';s._ref"
+"errer=t?t:'n/a';s._referringDomain=u?u:'n/a';s._campaign=v?v:'n/a';"
+"s._channel=w?w:'n/a';s._partner=E?E:'n/a';s._keywords=H?I?I:'Keywor"
+"d Unavailable':'n/a';if(f&&w!='Typed/Bookmarked'){h.setTime(h.getTi"
+"me()+f*86400000);s.c_w('s_tbm'+f,1,h);}}else s._campaignID=s._refer"
+"rer=s._referringDomain=s._campaign=s._channel=s._partner=s._keyword"
+"s='';");
