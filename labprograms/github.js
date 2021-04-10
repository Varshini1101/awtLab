
function display(){
    var request=new XMLHttpRequest()
    const name=document.getElementById("name").value;
    const url= `https://api.github.com/users/${name}/repos`
    console.log(url)
    request.open('GET',url,true);
    request.send()
    request.onload=function(){
                 var result=JSON.parse(this.response)
                 let table=document.createElement("TABLE");
                 table.border="1"
                 var row=table.insertRow(-1)
                 var cellh1=row.insertCell(-1)
                 var cellh2=row.insertCell(-1)
                 var cellh3=row.insertCell(-1)
                 cellh1.innerHTML="Name"
                 cellh2.innerHTML="FullName"
                 cellh3.innerHTML="Description" 
               
            result.forEach((element)=>{
                     var  row1=table.insertRow(-1)
                     var  cell1=row1.insertCell(-1)
                     var  cell2=row1.insertCell(-1)
                     var  cell3=row1.insertCell(-1)
                     cell1.innerHTML=(element.name)
                     cell2.innerHTML=(element.full_name)
                     cell3.innerHTML=element.description
            })
        
         table1=document.getElementById("temptable")
         table1.append(table)
        
         
        }
}