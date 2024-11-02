
let datas =[]
let inputj= document.querySelector("input");
let valuej = "";
let divj= document.querySelector(".ul");
const ulj = document.querySelector("ul");
const buttonj = document.querySelector("#submit");
const deletej = document.querySelector("#delete");
const tabj = document.querySelector("#tab");
const dltj = document.querySelector(".delete-btn");


fetchdata();
div();

function div(){
    if(datas.length > 0){
        divj.style.display="block";
    }
}

function fetchdata(){
    ulj.innerHTML="";
    if(localStorage.key('data') != null){
        datas=JSON.parse(localStorage.getItem("data"));
                   for (i=datas.length-1; i>-1; i--){
                    ulj.innerHTML+=`
                        <li>
                            <a target="_blank" href="${datas[i]}"> ${datas[i]} </a>
                            <button  class="delete-btn"  type="submit" value="${datas[i]}">
                            Delete 
                            </button>
                        </li>`;
                    }
        
    }
    else if(datas.length == 0 || localStorage.key('data')== null){
        divj.style.display="none"; 
    }
    
}


ulj.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        dlt(event.target.value);
    }
});


function dlt(val){
    datas=JSON.parse(localStorage.getItem("data"));
    b=datas.indexOf(val);
    datas.splice(b,1);
    localStorage.setItem("data",JSON.stringify(datas));
    if(localStorage.getItem('data') == "[]"){
        localStorage.clear();
        datas =[];
        fetchdata();
    }

    fetchdata();
}

tabj.addEventListener('click',function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            valuej = tabs[0].url;
        })
    if(valuej != ""){
        datas.push(valuej);
        localStorage.setItem("data",JSON.stringify(datas));
        div();
    }
    inputj.value="";
    fetchdata();
})

deletej.addEventListener("click",function(){
    localStorage.clear();
    datas =[];
    fetchdata();
    
})
inputj.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        buttonj.click();
    }

})
buttonj.addEventListener("click", function(){
    valuej = inputj.value;
    if(valuej != ""){
        datas.push(valuej);
        localStorage.setItem("data",JSON.stringify(datas));
        div();
    }
    inputj.value="";
    fetchdata();
})


