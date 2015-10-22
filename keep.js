//Functions

//calculates days in month with leap year calc if year is included DaInMo(month,year)
function DaysInMonth(y,m,t){t=0xEEFBB3,0!=(3&y)||y%25==0&&0!=(15&y)||(t+=4);return 28+(t>>2*(m-1)&3)}
//calculates day of the week, provided the year, month, and day. sunday as first day. 0 based.
function fDayOfWeek(y,m,d,b,z){z=~~((d+=m<3?y--:y-2,23*m/9+d+4+y/4-y/100+y/400)%7);return (b!=null)?z:['Sun','Mon','Tues','Wednes','Thurs','Fri','Satur'][z]+'day'}
//provided an encoded key from registry, will give the decoded product key for adobe acrobat.
function DecodeAdobeKey(a){var b=/[0-9]{24}/g,c="",d="5038647192",e="2604371895",f="4753896210",g="8145962073",h="0319728564",i="7901235846",j="1426053789",k="3267408951",l=["0000000001",d,"1456053789",e,f,g,h,i,i,h,g,f,e,j,d,k,d,e,g,i,k,j,f,h];if(!b.test(a))return'err';for(m=0;24>m;m++)0==m%4&&m>0&&(c+="-"),c+=l[m].charAt(a.charAt(m));return c}
