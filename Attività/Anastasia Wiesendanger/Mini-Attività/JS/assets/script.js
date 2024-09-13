//let a = 2;
//let b = ["Matite", "Pennarelli", "Scrivania"] //variabile contiene
                                              //tutte queste info.
//console.log(b[b.lenght-1]);



//let a = 0;

//a+=2;

//console.log(a);
                                 
//if(a > 3 || a == 3 || a < 3) {    //Tutto quanto è vero
   //console.log("Vero");
//} else {
   //console.log("Falso");    //in ogni altro caos è falso
//};



//let a = 0;

//a+=3.1;

//console.log(a);
                                 
//if(a > 3) {    
   //console.log("Sono Maggiore");
//} else if (a < 3){
   //console.log("Sono Minore");    //in ogni altro caos è falso
//} else if (a == 3){
    //console.log("Sono 3!!");
//} else{
    //console.error("La condizione è errata! Controllami"); 
//}



//let a = 0;

//a++;

//if(a >= 1){
    //console.log("Siiiii")      
//}
                            //entrambe funzionano
//if(a == 1){
   // console.log("Yeeeee")
//}


//let a=0;

//for(let i=0; i < 10; i++){
   //console.log(i);
//}


//let a=5;

//for(let i=0; i <= 10; i+=1){    //parte da 5 e continua ad aggiungere 1
   // a+=1;                       //finche non abbiamo aggiunto 10 unità
    //console.log(a);
//}


//let a= 5;
//let b= ["Matite", "Scrivania", "Pennarelli" ];

//for(let i=0; i <= 2; i+=1){   
   //console.log(b[i]);
//}



//if (a < 3){
    //console.log("ciao")
//}
                             //entrambi sono visibili
//if (a == 0){
    //console.log("Hello")
//}




//console.log(document.getElementsByClassName("descrizione"));  //or ByTag/ById ("titolo")

const elemento = document.getElementById("titolo");
console.log(elemento.innerHTML);
elemento.innerHTML = "Buon giovedì!";
console.log(elemento.innerHTML);

// const Variabile = document.getElementsByClassName("genitore");
// console.log(Variabile);
// const mioFiglio = Variabile[0].appendChild(document.createElement("p"));
// mioFiglio.innerHTML = "sono nato";
// mioFiglio.setAttribute("class","bellezza");
// mioFiglio.setAttribute("id","primogenito");

let i = 0;

function ilMioBottone(){
     if(i < 1){
       const Variabile = document.getElementsByClassName("genitore");
       console.log(Variabile);
       const mioFiglio = Variabile[0].appendChild(document.createElement("p"));
       mioFiglio.innerHTML = "sono nato";
       mioFiglio.setAttribute("class","bellezza");
       mioFiglio.setAttribute("id","primogenito");  
       i ++; 
    }
}

const bottoncino = document.getElementById("bottone");
bottoncino.addEventListener("click", ilMioBottone);


