let dispStr="";
let firstValSet=false;
let secondValSet=false;
let delFlag=false;
let firstVal=0.0;
let secondVal=0.0;
let operand="";
let result=0.0;
let dotAllowed=true;
let operandQueue="";
let inError=false;
let operDisp=document.querySelector(".operand");
document.onkeydown=function(e)
					{
						switch(e.key)
						{
							case "0":
							case "1":
							case "2":
							case "3":
							case "4":
							case "5":
							case "6":
							case "7":
							case "8":
							case "9":
							case "0":
							case "+":
							case "-":
							case "*":
							case "/":
							case ".":
								getButtonValueKB(e.key);
								break;
							case "Enter":
								getButtonValueKB("=");
								break;
							case "Escape":
								getButtonValueKB("clear");
								break;
							case "Backspace":
								getButtonValueKB("backspace");
								break;
						}
					};
setDisplay("0");
target = document.querySelectorAll(".button");
	for(let i=0;i<target.length;i++)
	{
		target[i].addEventListener("mousedown", getButtonValue, false);
	}
function setVals()
{
	if(!firstValSet)
	{
		firstVal=processValue(dispStr);
		firstValSet=true;
		delFlag=true;
	}
	else if(!secondValSet)
	{
		secondVal=processValue(dispStr);
		secondValSet=true;
	}
}
function getResult(operandClr,newOperand)
{
	if(firstValSet&&secondValSet)
	{
		switch(operand)
		{
			case "+":
				result=firstVal+secondVal;
			break;
			case "-":
				result=firstVal-secondVal;
			break;
			case "*":
				result=firstVal*secondVal;
			break;
			case "/":
				if(secondVal===0)
				{
					dispStr=setDisplay("Error").trim();
					inError=true;
					return;
				}
				result=firstVal/secondVal;
			break;
		}
		if(result>999999999||result<-99999999)
		{
			dispStr=setDisplay("Error").trim();
			inError=true;
			return;
		}
		operand=newOperand;
		setOperand(operand);
		delflag=true;
		let strResult=""+result;
		if((strResult).includes("e-"))
		{
			let tokens=(strResult).split("e-");
			strResult="";
			if(parseInt(tokens[0])>0)
			{
				strResult="0.";
			}
			else
			{
				strResult="-0."
			}
			for(let i=1;i<parseInt(tokens[1]);i++)
				{
					strResult+="0";
				}
			strResult+=Math.abs(parseInt(tokens[0]));

			dispStr=setDisplay(strResult).trim();
		}
		if((strResult).includes("."))
		{
			let tempStr="";
			for(let i=0;i<10;i++)
			{
				tempStr+=strResult.charAt(i);
			}
			while(tempStr.charAt(tempStr.length-1)==="0")
			{
				tempStr=tempStr.substring(0,tempStr.length-1);
			}
			strResult=tempStr;
		}
		if(strResult==="0.")
		{
			strResult="0";
		}
		dispStr=setDisplay(strResult).trim();
		firstValSet=false;
		secondValSet=false;
		if(operandClr!="")
		{
			setVals();
		}
		if(newOperand!="")
		{
			operandQueue=(operandQueue[1]+newOperand);
		}
	}
}
function getButtonValue(e)
{
	getButtonValueKB(e.target.value);
}
function getButtonValueKB(str)
{
	switch(str)
	{
		case "sign":
			if(dispStr==="")
			{
				dispStr="0";
			}
			setVals();
			operand="*"
			secondVal=-1;
			secondValSet=true;
			getResult("","");
			break;
		case "=":
			if(!inError)
			{
				setVals();
				setOperand(operand);
				getResult("","");
				operandQueue="";
			}
			break;
		case "clear":
			firstValSet=false;
			secondValSet=false;
			firstVal=0;
			secondVal=0;
			operand="";
			delFlag=false;
			setOperand("");
			dispStr="";
			setDisplay(dispStr).trim();
			operandQueue="";
			inError=false;
			break;
		case ".":
			if(!inError)
			{
				if((dispStr.includes("a")||
				dispStr.includes("b")||
				dispStr.includes("c")||
				dispStr.includes("d")||
				dispStr.includes("e")||
				dispStr.includes("f")||
				dispStr.includes("g")||
				dispStr.includes("h")||
				dispStr.includes("i")||
				dispStr.includes("j"))&&!dotAllowed)
				{
					break;
				}
			}
			dotAllowed=false;
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
			if(!inError)
			{
				if(dispStr==="0"||delFlag)
				{
					dispStr="";
					delFlag=false;
				}
				if(dispStr.length<9)
				{
					dispStr+=str;
					dispStr=setDisplay(dispStr).trim();
				}
			}
			break;
		case "backspace":
			if(!inError)
			{
				switch(dispStr.charAt(dispStr.length-1))
				{
					case "a":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="0";
						break;
					case "b":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="1";
						break;
					case "c":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="2";
						break;
					case "d":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="3";
						break;
					case "e":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="4";
						break;
					case "f":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="5";
						break;
					case "g":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="6";
						break;
					case "h":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="7";
						break;
					case "i":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="8";
						break;
					case "j":
						dispStr=dispStr.substring(0,dispStr.length-1);
						dispStr+="9";
						break;
					default:
						dispStr=dispStr.substring(0,dispStr.length-1);
				}
				dispStr=setDisplay(dispStr).trim();
			}
			break;
		case "+":
		case "-":
		case "*":
		case "/":
			dotAllowed=true;
			if(!inError)
			{
				if(dispStr!="")
				{
					if(operandQueue==="")
					{
						operandQueue+=str;
						operandQueue+=str;
					}
					operand=operandQueue[1];
					delFlag=true;
					setVals();
					setOperand(str);
					getResult(operand,str);
				}
				else
				{
					if(str==="-")
					{
						dispStr="-";
						setDisplay(dispStr);
					}
					else
					{
						operandQueue="";
					}
				}
			}
			break;
	}
}
function processValue(str)
{
	let outStr="";
	for(let i=0;i<9;i++)
	{
		switch(str[i])
		{
			case "a":
				outStr+="0.";
				break;
			case "b":
				outStr+="1.";
				break;
			case "c":
				outStr+="2.";
				break;
			case "d":
				outStr+="3.";
				break;
			case "e":
				outStr+="4.";
				break;
			case "f":
				outStr+="5.";
				break;
			case "g":
				outStr+="6.";
				break;
			case "h":
				outStr+="7.";
				break;
			case "i":
				outStr+="8.";
				break;
			case "j":
				outStr+="9.";
				break;
			default:
				outStr+=str[i];
		}
	}
	return parseFloat(outStr);
}
function setOperand(operand)
{
	switch(operand)
	{
		case "":
			operDisp.innerHTML="<img src=\"./img/operand.png\">";
			break;
		case "+":
			operDisp.innerHTML="<img src=\"./img/plus.png\">";
			break;
		case "-":
			operDisp.innerHTML="<img src=\"./img/minus.png\">";
			break;
		case "/":
			operDisp.innerHTML="<img src=\"./img/div.png\">";
			break;
		case "*":
			operDisp.innerHTML="<img src=\"./img/mult.png\">";
			break;
	}
}
function setDisplay(str)
{
	if(str==="")
	{
		str="0";
	}
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
	if(str.length>9)
	{
		for(let i=0;i<9;i++)
		{
			tempStr+=str[i];
		}
		if(processValue(tempStr)===0)
		{
			str="0";
			tempStr="0";
		}
		str=tempStr;
		tempStr="";
	}
	while(str.length<9)
	{
		tempStr=" "+str;
		str=tempStr;
	}
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
			case "E":
				digits[i].innerHTML="<img src=\"./img/E.png\">";
				break;
			case "r":
				digits[i].innerHTML="<img src=\"./img/r.png\">";
				break;
			case "o":
				digits[i].innerHTML="<img src=\"./img/o.png\">";
				break;
		}
	}
	return str;
}