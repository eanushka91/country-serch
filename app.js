fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td>${element.name.common}</td>
                    <td>${element.flag}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody;
})



// https://restcountries.com/v3.1/name/{name}


function serchCuntrie(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let offitalName = document.getElementById("offitalName");
   let name = document.getElementById("name")
   let img =  document.getElementById("img")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            offitalName.innerText = obj.name.official;
            name.innerText = obj.name.common;
            region.innerText = obj.region;
            capital.innerText = obj.capital;
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);



    
    })
}