// let radioButton = document.querySelectorAll('input[name="abc"]')
let radioButton = document.getElementsByName("abc")

let addRadio = document.getElementById("addRadio2")
addRadio.addEventListener("click",function(){
    radioButton.forEach(function(radioSelect){
        if(radioSelect.checked){
            console.log(radioSelect.value);
            
        }
    })
})

let radioButton2 = document.querySelectorAll('input[name="a"]')
// let radioButton2 =document.getElementsByName("a")

let addRadio2 = document.getElementById("addRadio")

addRadio2.addEventListener("click",function(){

    radioButton2.forEach(function(radioSelect){

        if(radioSelect.checked){

            console.log(radioSelect.value);
            
        }
    })
})
let objUser = {
    names:"JavaScript",
    id:2,
    image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/breathtaking-bali-nature-free-photo.jpg?w=600&quality=80"
}
let dropId = document.getElementById("dropId")

dropId.innerHTML = `<option value="HTML">HTML</option>
<option value="CSS">CSS</option>
<option value="${objUser.names}">${objUser.names}</option>
<option value="python">python</option>`
let showValue = document.getElementById("showValue");


dropId.addEventListener("change",function(){
   for (let i = 0; i < dropId.length; i++) {
       
       if(dropId.value === objUser.names){
           showValue.innerHTML = `
           <div class="card" style="width: 18rem;">
  <img src="${objUser.image}" class="card-img-top" alt="images">
  <div class="card-body">
    <h5 class="card-title">${objUser.names}</h5>
    <p class="card-text">${objUser.id}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
           console.log("equle");
           break;
        }else{
            console.log(dropId.value);
            console.log("Not equle");
            break;
        
    }
   }
   
})
