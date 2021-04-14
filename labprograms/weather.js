function display(){
    var request=new XMLHttpRequest()
    const city=document.getElementById("city").value;
    
    const url= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=c15fea71f4c249cd6c1594288285fe69`
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
                 var cellh4=row.insertCell(-1)
                 cellh1.innerHTML="DATE"
                 cellh2.innerHTML="TIME"
                 cellh3.innerHTML="MIN_TEMPERATURE"
                 cellh4.innerHTML="MAX_TEMPERATURE"
                
               
            result.list.forEach((day)=>{
                     var  row1=table.insertRow(-1)
                     var  cell1=row1.insertCell(-1)
                     var  cell2=row1.insertCell(-1)
                     var  cell3=row1.insertCell(-1)
                     var  cell4=row1.insertCell(-1)
                     cell1.innerHTML=(day.dt_txt).split(" ")[0]
                     cell2.innerHTML=(day.dt_txt).split(" ")[1]
                     cell3.innerHTML=day.main.temp_min
                     cell4.innerHTML=day.main.temp_max
            })
        
         table1=document.getElementById("temptable")
         table1.append(table)
       
         
        }
}