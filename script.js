function setDisplay(str)
{
	if(str[0]===".")
	{
		str="a"+str.slice(1,str.length);
	}
	if(str[0]==="-"&&str[1]===".")
	{
		str="-a"+str.slice(2,str.length);
	}
	for(let i=0;i<str.length;i++)
	{
		if(str[i]===".")
		{
			switch(str[i-1])
			{
				case "0":
					str=str.slice(0,i-1)+"a"+str.slice(i+1,str.length);
					break;
				case "1":
					str=str.slice(0,i-1)+"b"+str.slice(i+1,str.length);
					break;
				case "2":
					str=str.slice(0,i-1)+"c"+str.slice(i+1,str.length);
					break;
				case "3":
					str=str.slice(0,i-1)+"d"+str.slice(i+1,str.length);
					break;
				case "4":
					str=str.slice(0,i-1)+"e"+str.slice(i+1,str.length);
					break;
				case "5":
					str=str.slice(0,i-1)+"f"+str.slice(i+1,str.length);
					break;
				case "6":
					str=str.slice(0,i-1)+"g"+str.slice(i+1,str.length);
					break;
				case "7":
					str=str.slice(0,i-1)+"h"+str.slice(i+1,str.length);
					break;
				case "8":
					str=str.slice(0,i-1)+"i"+str.slice(i+1,str.length);
					break;
				case "9":
					str=str.slice(0,i-1)+"j"+str.slice(i+1,str.length);
					break;
			}
		}
	}
	let tempStr="";
	while(str.length<9)
	{
		tempStr=" "+str;
		str=tempStr;
	}
	console.log(":"+str);
	let digits=document.querySelectorAll(".digit");
	for(let i=0;i<9;i++)
	{
		switch(str[i])
		{
			case "0":
				digits[i].innerHTML="<img src=\"./img/0.png\">";
				break;
			case "1":
				digits[i].innerHTML="<img src=\"./img/1.png\">";
				break;
			case "2":
				digits[i].innerHTML="<img src=\"./img/2.png\">";
				break;
			case "3":
				digits[i].innerHTML="<img src=\"./img/3.png\">";
				break;
			case "4":
				digits[i].innerHTML="<img src=\"./img/4.png\">";
				break;
			case "5":
				digits[i].innerHTML="<img src=\"./img/5.png\">";
				break;
			case "6":
				digits[i].innerHTML="<img src=\"./img/6.png\">";
				break;
			case "7":
				digits[i].innerHTML="<img src=\"./img/7.png\">";
				break;
			case "8":
				digits[i].innerHTML="<img src=\"./img/8.png\">";
				break;
			case "9":
				digits[i].innerHTML="<img src=\"./img/9.png\">";
				break;
			case "a":
				digits[i].innerHTML="<img src=\"./img/0d.png\">";
				break;
			case "b":
				digits[i].innerHTML="<img src=\"./img/1d.png\">";
				break;
			case "c":
				digits[i].innerHTML="<img src=\"./img/2d.png\">";
				break;
			case "d":
				digits[i].innerHTML="<img src=\"./img/3d.png\">";
				break;
			case "e":
				digits[i].innerHTML="<img src=\"./img/4d.png\">";
				break;
			case "f":
				digits[i].innerHTML="<img src=\"./img/5d.png\">";
				break;
			case "g":
				digits[i].innerHTML="<img src=\"./img/6d.png\">";
				break;
			case "h":
				digits[i].innerHTML="<img src=\"./img/7d.png\">";
				break;
			case "i":
				digits[i].innerHTML="<img src=\"./img/8d.png\">";
				break;
			case "j":
				digits[i].innerHTML="<img src=\"./img/9d.png\">";
				break;
			case " ":
				digits[i].innerHTML="<img src=\"./img/blank.png\">";
				break;
			case "-":
				digits[i].innerHTML="<img src=\"./img/dash.png\">";
				break;
		}
	}
}