var playerInfo = document.getElementById('info');
var btn_getInfo = document.getElementById('btn');
document.getElementById('count').innerHTML = 0;
document.getElementById('search').style.display = 'none';

btn_getInfo.addEventListener("click",function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','players_info.json');
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
        document.getElementById('count').innerHTML=i;
		document.getElementById('btn').style.display='none';
		document.getElementById('search').style.display='block';
    }
    playerInfo.insertAdjacentHTML('beforeend', htmlString);
}

