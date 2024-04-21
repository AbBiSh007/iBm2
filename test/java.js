
let button=document.getElementById("btn")
let nature=document.getElementById("nature")
let science=document.getElementById("link2")
let jpc=document.getElementById("link3")
button.addEventListener("click", () => {
    let obj={
        name:document.getElementById("name").value,
        field:document.getElementById("field").value,
        date:document.getElementById("date").value,
        duration:document.getElementById("duration").value
    }
    let arr=[]
    arr.push(obj)
    if(obj.name!="" && obj.field!="" && obj.date!="" && obj.duration!=""){
        localStorage.setItem("Information",JSON.stringify(arr))
        window.location='hym.html'
    }
    else{
        alert("Please fill all details")
    }
})
nature.addEventListener("click",()=>{
    open("")
})
science.addEventListener("click",()=>{
    open("https://www.science.org/journal/science")
})
jpc.addEventListener("click",()=>{
    open("https://www.chemistry.or.jp/en/csj-journals/")
})