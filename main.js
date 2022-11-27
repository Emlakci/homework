//Q1 dİV

const changefontsize=()=>{
    var x = parseFloat(window.getComputedStyle(text1).getPropertyValue("font-size"));
    console.log(x);
    let y=x+1;
    y=y+"px";
    console.log(y);
    toString(y); console.log(typeof(y));
    let text=document.getElementById("text1");
    text.style.fontSize=y
}

const defaultfontsize=()=>{
    let text=document.getElementById("text1");
    text.style.fontSize="10px"
}

//Q2 dİV
const volume=(a)=>{
    var result = a*a*a;
    console.log(result)
    document.getElementById("display").value=result
};
const getValue=()=>{
    let number = Number(document.getElementById("cube").value);
    console.log(number)
    volume(number);  
}
const clearAll=()=>{
    document.getElementById("display").value=null;
    document.getElementById("cube").value=null;
}

//Q3 dİV
const check=(q,w)=>{
    let result2="";
    if(q>=18 && w=="TR"){
        result2="Alkol kullanabilirsin 👍";
    } else if(q<18 && w=="TR"){
        result2="Büyü de Gel Çocuk!!! 👎 ";
        } else if(q>=21 && w=="USA"){
            result2="Alkol kullanabilirsin 👍";
            } else if (q<21 && w=="USA"){
                result2="Büyü de Gel Çocuk!!! 👎 ";
            } else {
                result2="Ülke ve yaş giriniz!!!"
            }
            console.log(result2);
            document.getElementById("display2").value=result2;
}

const getValues=()=>{
    let country = document.getElementById("country").value;
    let age = document.getElementById("age").value;
    console.log(country,age);
    check(age,country);
}
const clearAll2=()=>{
    document.getElementById("age").value=null;
    document.getElementById("country").value=null;
    document.getElementById("display2").value=null;
}

//Q4 DİV   




//Q5 DİV
var arr=[];
function summation(k){
    var t=0;
    for(var i=0;i<k.length;i++){
        t += Number(k[i]);
        console.log(t)
        document.getElementById("display5").value=t;
    };
};    
const getValues5=()=>{
    let nmb1= document.getElementById("nmb1").value;
    let nmb2= document.getElementById("nmb2").value;
    let nmb3= document.getElementById("nmb3").value;
    let nmb4= document.getElementById("nmb4").value;
    console.log(nmb1,nmb2,nmb3,nmb4);
    arr[0]=nmb1;
    arr[1]=nmb2;
    arr[2]=nmb3;
    arr[3]=nmb4;
    console.log(arr);
    summation(arr);
};
const clearAll5=()=>{
    arr.length=0;
    document.getElementById("nmb1").value=null;
    document.getElementById("nmb2").value=null;
    document.getElementById("nmb3").value=null;
    document.getElementById("nmb4").value=null;
    document.getElementById("display5").value=null;

}    
