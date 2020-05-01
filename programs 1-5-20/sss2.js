// JavaScript Document
bb=document.querySelectorAll("input");
bb[3].addEventListener("click",ss);
bb[4].addEventListener("click",ss1);
bb[5].addEventListener("click",ss2);
bb[6].addEventListener("click",ss3);
function ss()
		{
			a=document.querySelectorAll("input");
			a1=Number(a[0].value);
			a2=Number(a[1].value);
			a2=a1+a2;
			a[2].value=a2;
		}
		function ss1()
		{
			a=document.querySelectorAll("input");
			a1=Number(a[0].value);
			a2=Number(a[1].value);
			a2=a1-a2;
			a[2].value=a2;
		}
		function ss2()
		{
			a=document.querySelectorAll("input");
			a1=Number(a[0].value);
			a2=Number(a[1].value);
			a2=a1*a2;
			a[2].value=a2;
		}
		function ss3()
		{
			a=document.querySelectorAll("input");
			a1=Number(a[0].value);
			a2=Number(a[1].value);
			a2=a1/a2;
			a[2].value=a2;
		}
	