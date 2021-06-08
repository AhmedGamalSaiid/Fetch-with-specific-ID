var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((response)=>{
   return response.json();

})
.then((mydata)=>{
    for (let index = 0; index < mydata.length; index++) {
      //  console.log(mydata[index].name);
        var apend=
        `
            <li class="nav-item">
             <a class="nav-link active bg-info" href="#" onclick="post(${index})">${mydata[index].name}</a>
            </li>
       
        `;        
        document.querySelector("#names").innerHTML+=apend
    }
})

function post(a){
 
    t(a);
}
async function t(a){
    var _a=parseInt(a+1)
    console.log(_a)
    var response2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${_a}`);
   // console.log(response2);
    var postNum = await response2.json();
    document.querySelector("#post").innerHTML=""
    postNum.forEach(element => {

        document.querySelector("#post").innerHTML   += `
        <li>${element.title}</li>
        `
        
    });
}
