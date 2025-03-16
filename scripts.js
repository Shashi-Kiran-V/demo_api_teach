let url='https://catfact.ninja/fact';
let first=document.getElementById('first');
let second=document.getElementById('second')
let button=document.getElementById('btn')
//console.log(first);


//3 methods of api calling

//1st method using fetch()

// fetch(url)
// .then((res)=>{
//     res.json()
//     .then((data)=>{
//         console.log(data.fact);
        
//     })
// })

//2nd method using aync await

// async function getFacts() {
//     try{
//     let res1= await fetch(url)
//     let data1 = await res1.json()
//     let res2= await fetch(url)
//     let data2=await res2.json()
//     first.innerText=data1.fact
//     second.innerText=data2.fact
//     console.log(data1.fact);
//     console.log(data2.fact);
//     }
//     catch (e){
//         console.log(e);
        
//     }
     
// }
// button.onclick=getFacts

//3rd method using axios
//we use axios because we need not to parse the response. it internally uses fetch()

async function getFacts(){
    try{
        let res1= await axios.get(url);
        //console.log(res1.data.fact);
        let res2= await axios.get(url);
        //console.log(res2.data.fact);
        first.innerText=res1.data.fact;
        second.innerText=res2.data.fact;
        
    }
    catch(e){
        console.log((e));
        
    }
}
button.onclick=getFacts
