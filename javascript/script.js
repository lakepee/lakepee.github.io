
let val ="";
let result =0;

const input_display = document.getElementById('input_display')
input=(value)=>{
        if(result){
            if (!isNaN(value)){
                result=0
                val =  val + value
                vs = val.replace('Math.','')
                input_display.value = val;
            }
            else{
                let r_s = result.toString()
                val = r_s + value
                input_display.value = val;
                result=0
            }
        }
        else{
            val =  val + value
            vs = val.replace('Math.','')
            input_display.value = val;
            
        }
        
    
 }

clear_func=(value)=>{
    
    if (value == "CE"){
        input_display.value ="";
        val = ""
    }
    else if(value =="C"){
        
        input_display.value = "";
        val =""
        result = 0
        document.getElementById('input_history').innerText = result;
    }
}

scientific_func=(value)=>{
   

    if(result){
        let r_s = result.toString()
        val = value + r_s
        result = 0
        vs = val.replace('Math.','')
        input_display.value = vs ;
    }
    else{
        val  = val + value
        vs = val.replace('Math.','')
        input_display.value = vs;
    }
}
rand_func=()=> {
    if (val.length){
        rounded = Math.round(Math.random()*1000000)/1000000
        val = val+rounded.toString()
        input_display.value = val
    }
    else{
        input_display.value = Math.random()
    }
}
let degree_toggle_btn =0;
degree_toggle_func=(innerText)=>{
    e_val = 0
    if (degree_toggle_btn ==0) degree_toggle_btn=1
    else degree_toggle_btn = 0
    if (degree_toggle_btn == 0){
        document.getElementById('display_info').innerText = ""
        innerText.innerText = "Rad"
        if (val.length){
            e_val = eval(val);
            e_val = eval(val) * (180 / Math.PI);
        }
        val = e_val.toString()
        input_display.value = val;
    }
    else {
        document.getElementById('display_info').innerText = "Rad"
        innerText.innerText = "Deg"
       if (val.length){
            e_val = eval(val);
            e_val = eval(val) * (Math.PI/180);
       }
       val = e_val.toString()
        input_display.value = val;

    }

}
ten_power=()=>{
    if(result){
        result = 10** result
        document.getElementById('input_history').innerText = result;
        input_display.value = result;
    }
    else{
        e_val = 10 ** eval(val)
        val = e_val.toString()
        input_display.value = val;
    }
}
x_inver=()=>{
    if(result){
        result = 1/ result
        document.getElementById('input_history').innerText = result;
        input_display.value = result;
    }
    else{
        e_val = 1/eval(val)
        val = e_val.toString()
        input_display.value = val;
    }
}
inverse_func =()=>{
    if(result){
        result = result * -1
        document.getElementById('input_history').innerText = result;
        input_display.value = result;
    }
    else{
        if (val.length){
        e_val = eval(val) * -1
        val = e_val.toString()
        input_display.value = val;
        }else input_display.value =""
    }

}
factorial_func=()=>{
    let answer = 1;
    e_val = eval(val)
    if(result){
        for(let i = result; i >= 1; i--){
            answer = answer * i;
          }
          input_display.value = answer;
          document.getElementById('input_history').innerText = answer;
          val = answer.toString()
          result = answer

    }
    else if (e_val == 0 || e_val == 1 || val.length==0){

        input_display.value = val.length;
    }
    else if(e_val > 1){
      for(let i = e_val; i >= 1; i--){
        answer = answer * i;
      }
      input_display.value = answer;
      val = answer.toString()
    }
    else{
        input_display.style.fontSize = "50px"
        input_display.value= new Error("Negative Number")
        
    }  
  }
delete_func=()=> {
    
    input_display.value = val.slice(0,-1);
    val = val.slice(0,-1)
}
submit_func=()=>{
            
            try{
            
            result = eval(val)
            val = ""
            document.getElementById('input_history').innerText = result;
            input_display.value = val;
            console.log(result)
            }catch(err){
                setTimeout(() => {
                 input_display.value = val;
                }, 3000);
                input_display.style.fontSize = "50px"
                input_display.value = new Error("Invalid Input");
                // console.log(result)
            }
            // arr_history.append(result)
        }

// append_info=()=>{
//     display_info = document.getElementById('display_info').innerText = "Rad"
    
// }
// removeInfo=()=>{
//     display_info = document.getElementById('display_info')
//     document.getElementById('display').removeChild(display_info)  
// }
        
        


 




// function display(input){
//     document.getElementById('input_display').value = input
//     // if (eval(input).isInteger()){
//     //     // let newValue =+ input
//     //     // valueInt = 
        
//     // }
// }
