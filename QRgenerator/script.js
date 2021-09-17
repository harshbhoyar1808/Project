let qr_code = document.querySelector("#qr_code");
let code_image = document.querySelector("#code-img");
let  loader = document.querySelector("#loading");


qr_code.addEventListener("click" , ()=>{

    loader.style.display = "block";

    code_image.onload = function(){
        loader.style.display = "none"; 
    }
    
      const input = document.querySelector("#data").value;
      console.log(input);
      let api = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + input ; 

      code_image.src = api;


})