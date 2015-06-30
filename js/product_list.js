function page(flag){
	var itemnum= document.getElementById("itemnum").innerHTML;
	var currPage= document.getElementById("currPage").value;
	//currPage+=flag;
	if(flag==-1){
		currPage-=1;
		document.getElementById("currPage").value-=1;
	}else if(flag==1){
		currPage+=1;
		document.getElementById("currPage").value+=1;
	}
	var start=1;
	var end=7;
	if(currPage<1){
		document.getElementById("currPage").value=1;
		currPage=1;
	}
	if((currPage-1)*7>=itemnum){
		document.getElementById("currPage").value=Math.floor(itemnum/7)+1;
		currPage=Math.floor(itemnum/7)+1;
	}
	start=7*(currPage-1)+1;
	//window.alert(currPage);
	for(var i=1; i<=9; i++){  //9要改成最终可添加最大值
		document.getElementById("listitem_"+i).style.display="none";
	}
	
	for(var i=start; i<start+7; i++){
		if(i<=itemnum){
			document.getElementById("listitem_"+i).style.display="block";
		}else{
			break;
		}
		end=i;
	}
	document.getElementById("itemNo").innerHTML=start+"-"+end;
}