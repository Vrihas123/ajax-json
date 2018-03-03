var playerInfo = document.getElementById("info");
var btn_getInfo = document.getElementById("btn");
document.getElementById("count").innerHTML = 0;
document.getElementById("myInput").style.display = 'none';

btn_getInfo.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://vrihas123.github.io/ajax-json/players_info.json');
    ourRequest.onload = function(){
        var data = JSON.parse(ourRequest.responseText);
        console.log(data);
        renderHTML(data);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";
    
    for(i=0;i<data.length;i++){
        htmlString+="<tr><td>" + data[i].name + "</td><td>" + data[i].club + "</td><td>" + data[i].country + "</td></tr>";
    }
    if(i==data.length){
        document.getElementById("count").innerHTML=i;
		document.getElementById("btn").style.display='none';
		document.getElementById("myInput").style.display='block';
    }
    playerInfo.insertAdjacentHTML('beforeend', htmlString);
}

function myFunction() {
    var input, filter, table, tr, td, td1, td2, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase;
    table = document.getElementById("info");
    tr  = table.getElementsByTagName("tr");
    var count = 9;
    
    for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
				td = tr[i].getElementsByTagName("td")[1];
    		if (td) {
      		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        		tr[i].style.display = "";
      		} else {
						td = tr[i].getElementsByTagName("td")[2];
    					if (td) {
      					if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        					tr[i].style.display = "";
      					} else {
										td = tr[i].getElementsByTagName("td")[3];
    									if (td) {
      									if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        								tr[i].style.display = "";
      										} else {
        										tr[i].style.display = "none";
												count--;
											}
    										}
											}
										}
									}
								}
							}
						}
					}
					document.getElementById("count").innerHTML= count;
				}
   
    