import './button.css'


const Button = () => {
  onclick=()=>{
    let hei = document.querySelector(".height input");
    let wei = document.querySelector(".weight input");
    let mainDiv=document.querySelector(".inputs .yourbmi"); 
    if(mainDiv.innerHTML!==null){
      mainDiv.innerHTML=null;
    } 
      if(wei!==null&&hei!==null){
        let w=wei.value;
        let h=hei.value/100;
        let BMI=w/(h*h);
        let div= document.createElement("div");
        div.classList="bmi";
        let text=document.createTextNode("Your BMI Is  :   ");
        div.appendChild(text);
        div.append(BMI);
        mainDiv.appendChild(div);
        let YourBmi=document.querySelector(".bmi");
        if(BMI<=18.5){
          YourBmi.style="background-color:rgb(1, 1, 104)";
        }else if(BMI>18.5&&BMI<=24.9){
          YourBmi.style="background-color:rgb(3, 105, 173)";
        }else if(BMI>24.9&&BMI<=29.9){
          YourBmi.style="background-color:rgb(248, 187, 74)";
        }else if(BMI>29.9&&BMI<=34.9){
          YourBmi.style="background-color:rgb(240, 121, 3)";
        }else{
          YourBmi.style="background-color:rgb(255, 0, 0)";
        }
    }

  }
  return (
    <div className="button">Click To Confirm</div>
  )
}
export default Button