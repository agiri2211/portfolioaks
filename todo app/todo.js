

window.onload=function(){

function updateitemstatus(){
        
    var cbid=this.id.replace("cb_", "");
    var itemText=document.getElementById("item_"+ cbid);
    if(this.checked){
    	itemText.className="checked";   
    	}

    	else{
    		itemText.className="";
    	}    






}

 
function addItem(list,itemText)
{

	var date= new Date();
	var id= ""+ date.getHours()	+ date.getMinutes() + date.getSeconds() + date.getMilliseconds();
	var listitem=document.createElement("li");
	listitem.id="li_"+id;
	var checkbox=document.createElement("input");
	checkbox.type="checkbox";
	checkbox.id="cb_" + id;
	var span=document.createElement("span");
	span.id="item_"+id;
	
	span.innerText=itemText;
	
	checkbox.onclick=updateitemstatus;
	
	var renamebtn=document.createElement("input");
	renamebtn.className="renamebutton";
	renamebtn.type="image";
	renamebtn.src="images/edit.jpe";
    renamebtn.onclick=function renameli(){

	var renametext=prompt("what do you want to rename it to?");
	
	if(renametext=="" || renametext==" "){
		return false;
	}
		else{
              span.innerText=renametext;   
		}
	

}


    var deletebtn=document.createElement("input");
	deletebtn.className="renamebutton";
	deletebtn.id=span.id;
	deletebtn.type="image";
	deletebtn.src="images/delete.png";
    deletebtn.onclick=function deleteli(){

	     var spanid=this.id.replace("item_","");
	     document.getElementById("li_"+spanid).style.display="none";

}


	listitem.appendChild(checkbox);
    listitem.appendChild(span);
    listitem.appendChild(renamebtn);
    listitem.appendChild(deletebtn);
    list.appendChild(listitem);
}







var buttonip=document.getElementById("button");
var iteminput=document.getElementById("input");
iteminput.focus();
iteminput.onkeyup=function(e) {

	if(event.which==13){
	var itemText=iteminput.value;

	if(itemText==" "|| itemText==""){
		return false;
	}


	addItem(document.getElementById("list"),itemText);

    iteminput.focus();    
     iteminput.select(); 
} 
} 
};
	



	
