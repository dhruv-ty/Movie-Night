const movie1=document.getElementById("m1");
const movie2=document.getElementById("m2");
const movie3=document.getElementById("m3");
const screen=document.getElementsByClassName("screen");
const selectedseat=document.getElementsByClassName("seat");
const number=document.getElementById("number");
const pr=document.getElementById("pr");
const mname=document.getElementById("mname");
console.log(selectedseat);
let price=0;
let disp_price=0;
let no=0;
//console.log(screen);
//console.log(movie1);
let isplaced=new Array(selectedseat.length).fill(0);
let j=0;
for(let i=3;i<selectedseat.length;i++)
{
    selectedseat[i].addEventListener("click", ()=>{
        console.log(isplaced[i]);
        if(isplaced[i]==0){
                  selectedseat[i].style.backgroundColor='rgb(21, 153, 21)';isplaced[i]++;disp_price+=price;no++;number.innerHTML=no;}
        else{
                  selectedseat[i].style.backgroundColor='#444451';isplaced[i]=0;disp_price-=price;no--;number.innerHTML=no;}
        pr.innerHTML=disp_price + '  $';          
    });
}



    movie1.addEventListener("click" ,()=>{
    //screen[0].classList.add("up");
    deleteChild();
    price=10;
    mname.innerHTML="Inception";
    const screen1=document.getElementsByClassName("screen1");
    console.log(screen1);
    screen1[0].style.justifyContent='center';
    screen1[0].style.alignItems='center';
    screen1[0].style.display='inline';
    document.body.style.overflow='hidden';
    console.log(price);
    });

    movie2.addEventListener("click" ,()=>{
        //screen[0].classList.add("up");
        deleteChild();
        price=15;
        mname.innerHTML="Spiderman"
        const screen1=document.getElementsByClassName("screen1");
        console.log(screen1);
        screen1[0].style.justifyContent='center';
        screen1[0].style.alignItems='center';
        screen1[0].style.display='inline';
        document.body.style.overflow='hidden';
        console.log(price);
        });
    movie3.addEventListener("click" ,()=>{
            //screen[0].classList.add("up");
            deleteChild();
            price=8;
            mname.innerHTML="Forrest Gump";
            mname.style.marginLeft='2px';
            const screen1=document.getElementsByClassName("screen1");
            console.log(screen1);
            screen1[0].style.justifyContent='center';
            screen1[0].style.alignItems='center';
            screen1[0].style.display='inline';
            document.body.style.overflow='hidden';
            console.log(price);
            });

    function deleteChild() {
        var e = document.querySelector("div");
        console.log(e);
        e.innerHTML = "";
    }   




