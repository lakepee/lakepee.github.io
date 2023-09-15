
let val ="";
// let arr_history = new Array()
let result =0;

const input_display = document.getElementById('input_display')
input=(value)=>{
        if(result){
            
            let r_s = result.toString()
            val = r_s +value
            input_display.value = val;
            result = 0
            val=""

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
    // let eElement = document.getElementById('display'); // some E DOM instance
    // let newF = document.createElement('div')
    // let newF2 = document.createElement('p')
    // let newText = document.createTextNode('RAD ON')
    // newF2.appendChild(newText)
    // newF.appendChild(newF2)
    // eElement.insertBefore(newF, eElement.firstChild);
    // if (value =="")

    if(result){
        let r_s = result.toString()
        val = value + r_s
        result = 0
        vs = val.replace('Math.','')
        input_display.value = vs ;
        val=""
    }
    else{
        let str = "I will Maths.(/ later to write to Maths.(/"
        console.log(str.replace(/Maths./g, ""));
        val  = val + value
        vs = val.replace('Math.','')
        console.log(vs);
        input_display.value = vs;
    }
}
rand_func=()=> {
    if (val.length){
        rounded = Math.round(Math.random()*1000000)/1000000
        val = val + rounded.toString()
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
    console.log(degree_toggle_btn)
    if (degree_toggle_btn == 0){
        document.getElementById('display_info').innerText = ""
        innerText.innerText = "Deg"
        if (val.length)
        {
        e_val = eval(val);
        e_val = eval(val) * (180 / Math.PI);
        
        }
        val = e_val.toString()
        input_display.value = val;
    }
    else {
        document.getElementById('display_info').innerText = "Rad"
        innerText.innerText = "Rad"
       if (val.length){
            e_val = eval(val);
            e_val = eval(val) * (Math.PI/180);
       }
       val = e_val.toString()
        console.log(val)
        input_display.value = val;

    }

}
delete_func=()=> console.log(val);
submit_func=()=>{
            console.log(val)
            result = eval(val)
            val = ""
            document.getElementById('input_history').innerText = result;
            input_display.value = val;
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
