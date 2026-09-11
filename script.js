// let a=true

// console.log(!a)
// let x=2
// console.log(x%2)
// let s=true
// let verifiermoy= function(moy,s){
//     if(moy>=18 && s===true){return "Exellent"}
//     else if(moy>= 15 && s===true){
//         return "Bien"
//     }
//     else if(moy>= 12 && s===true){
//         return "A.Bien"
//     }
//     else if(moy>=10 && s===true){
//         return "passable"
//     }
//     else{return "failed"}
// }

// let b1=1 ,b2=20 ,b3=20 ,b4=15
// let classementm= function(n1,n2,n3,n4){
//     // if((){b=false}
// // n1 *=2
// // n2 *=3
// // n3 *=4
// // n4 *=5
// let moy=(2*n1+3*n2+4*n3+5*n4)/14
// if (moy>=16 && (n1<=5 && n2<=5 && n3<=5 && n4<=5) )
//     {return "passe avec mention" }
//  else if(moy>=10 && (n1<=5 && n2<=5 && n3<=5 && n4<=5)){return moy 
    
//  }
//  else{
//     return "passez au rattrapage"}
// }
// console.log(classementm (b1,b2,b3,b4))

// let tab=["pain" , "lait"]
// tab.unshift("oeufs")
// tab.push("eau")
// console.log(tab)
// tab.pop()
// console.log(tab)
// console.log(tab.shift)
// console.log(tab)
// for(let i=1;i<=20;i++)
// {if(i>5){
//     console.log(i+ "est plus grand que 5")
// }
// else{
//     console.log(i +"est plus petit ou egal a 5")}
// }
// let np=0 ,p=0
// for(let i=1;i<=30;i++){
//     if((i%2)==0){p +=1
//     console.log(i+ " est pair")}
//     else{ np +=1
//          console.log(i+ "est impair")}
// }
// console.log("le nombre de valeurs paires  est:"+p+
//      " et le nombre de valeurs impaires est:"+np)
// let somme =0;
// let nombre =1;
// while(somme<11)
//     {
//         somme += nombre
//         console.log("nombre=" ,nombre, "et la somme ",somme)
//         nombre++
//     } 

// do{age=20}
// while(age<0)
//     console.log(age)

// let jour=jeudi

// switch(jour){
//     case"dimanche":
//     console.log("dimanche")
//     break
//  case"lundi":
//     console.log("lundi")
//     break

//  case"mardi":
//     console.log("mardi")
//     break
//  case"mercredi":
//     console.log("mercredi")
//     break
//  case"jeudi":
//     console.log("jeudi")
//     break
//  case"vendredi":
//     console.log("vendredi")
//     break
//  case"samedi":
//     console.log("samedi")
//     break

// }
// let tab=[10,12,20,17,16]
// let A_note= function(tab){
//     for( let i=0; i<(tab.length) ; i++)
//     {
//         console.log("les notes" +tab[i] )

//     }
// }

// let C_moy= function(tab)
// {let s=0
//     for(let i=0; i<(tab.length) ; i++)
//     {
//          s += tab[i]
//     }
 
// console.log("la moyenne est:")
// return s/ tab.length
// }

// let Vresults= function(tab){
//     for( let i=0; i<(tab.length) ; i++)
// {if(tab[i]>=10){console.log("le resultat est:Admis")}
//     else{console.log("le resultat est:Ajourner")}
// }
//                            }

// let mention= function(tab)
// { for( let i=0; i<(tab.length) ; i++){
//      if (tab[i] >= 19) return "Excellent";
//     if (tab[i] >= 17) return "Très Bien";
//     if (tab[i]>= 14) return "Bien";
//     if (tab[i] >= 12) return "Assez Bien";
//     if (tab[i] >= 10) return "Passable";
// }

// }
// console.log(A_note(tab))
// console.log(C_moy(tab))
// console.log(Vresults(tab))
// console.log(mention(tab))

// let fruits=["pomme","banane","orange","fraise"];
// console.log(fruits)

// fruits.push("kiwi")
// console.log(fruits)

// fruits.unshift("mangue")
// console.log(fruits)

// fruits.shift()
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// for(i=0; i<fruits.length; i++ ){
//     if(fruits[i]==="orange"){
//         fruits[i]="pastesque"
//     }
// }
// console.log(fruits)

// let verifier= function(fruits)
// {let trouve=false
// for(i=0; i<fruits.length; i++){
//     if(fruits[i]==="banane"){
//         trouve=true
//     };
//      if((fruits[i].length)>5)
//         console.log("les fruits avec plus de 5 lettres: ",fruits[i])
// }
// return trouve
// }

// let afficher= function(fruits){
//     // pos fraise
//     for(i=0; i<fruits.length; i++){
// if(fruits[i]==="fraise") 
//     console.log( "fruits[",i++,"]")
//     }

//     console.log(fruits)

//     console.log("le nombre de fruits est:",fruits.length)

   
// }

// console.log(verifier(fruits))
//  afficher(fruits)

// let student=["soundous" , 15]

// let etudiant={ nom: "DEMBELE",
//     moyenne: 15,
//     estAdmis: true,
// }
// console.log(etudiant)
// console.log(etudiant.nom)
// console.log(etudiant['moyenne'])

// etudiant.estAdmis=true
// console.log(etudiant)

// delete etudiant.moyenne
// console.log(etudiant)

// let personne={
//     prenom: 'douaa' ,
//     direBonjour(){
//         console.log("bonjour;  je m'appelle:"+personne.prenom)
//     }
// }

// personne.direBonjour()

// let voiture = {
//     marque: "audi",
//     vitesse :0,
//     accelerer(){
//         this.vitesse+= 10;
//         console.log(this.marque+" roule maintenant a :",this.vitesse)
//     }

// }

// voiture.accelerer()

// let x="javascript";
// let classe={
//     nom: "classe a" ,
//     professeur : {nom: "Aissata", matiere: "fullstack js",
//         change(classe,x){
//             this.matiere=x
//         }
//     },
//     etudiants : ["douaa", "adem" ,"noursine"]
// }

// console.log( classe.professeur.nom)
// console.log(classe.etudiants[1])

// change(classe,"javascript")

// let etudiants=[
//    { nom: "adem", note:14},
//    {nom: "farouk" , note:17},
//    {nom: "noursine", note: 13}
// ]

// for(i=0; i<etudiants.length; i++){
//     console.log( etudiants[i].nom+ ":"   +etudiants[i].note)
// }

// etudiants.forEach((e)=>{
// console.log(et.nom +"a eu la note"+ et.note);
// });

// let notes= etudiants.map( (e)=>{
//     return a;
// })
// console.log(notes)

// let admis= etudiants.filter((e)=> {return et.note>=10})
// console.log(admis)

// let premieradmis =etudiants.find((e) =>{
//     return e.note>=10;
// })
// console.log(premieradmis)

// let produits=[{nom:"clavier", prix:2500, stock:5},
//     {nom: "souris", prix:1200 ,stock:0 },
//     {nom:"ecran", prix:45000, stock:3},
//     {nom:"casque", prix:3500, stock:8},
//     {nom:"webcam", prix:"6000", stock:0},
    
// ]
// console.log("1 er produit:" +produits[0].nom)

//  function afficher(produits){ 
    
//     produits.forEach((e)=>{

//        if(e.nom ==="ecran") console.log( "prix ecran:"+ e.prix);

//        if(e.nom ==="casque") console.log("stock casque:", e.stock );

//     console.log(e.nom + "coute" + e.prix)
// });

// }
// afficher(produits)


// let nomp=produits.map((e)=>{
// return e.nom
// })
// console.log(nomp)

// let pdispo= produits.filter((e) =>{
//     return e.stock>0
// })
// console.log(pdispo)



// let p3k= produits.find((e) =>{
//     return e.prix>3000
// })
// console.log(p3k)

// let p_5k= produits.filter((e) =>{
    
//     return( e.prix>5000 && e.stock>0)
// })
// console.log(p_5k)

// let pnondispo1= produits.find((e) =>{
//     if (e.stock==0)return e.nom 
// })
// console.log(pnondispo1)


//  let nombers=[5, 30, 20]

// let somme= nombers.reduce((s,n1)=>{
//     return s+n1
// },0)

// let produits=[{nom:"clavier", prix:2500, stock:5},
//     {nom: "souris", prix:1200 ,stock:0 },
//     {nom:"ecran", prix:45000, stock:3},
//     {nom:"casque", prix:3500, stock:8},
//     {nom:"webcam", prix:6000, stock:0},
// ]

// let n= produits.reduce((s,i) =>{
//     return s+ i.prix
// },0)
// console.log(n)

// let nombretrie = [...nombers].sort((a,b) => a-b)
// console.log(nombretrie)
// console.log(nombers)

// f.push("sidi")
// f.push("sara")
// console.log()
// class etudiant{
//     constructor(nom,note){
//         if(typeof nom !== "string"){
//             throw new TypeError('Le nom doit etre un charactere')
//         };
//         if(typeof note !== 'number'){
//             throw new TypeError('La notedoit etre un nombre')
//         };
//         this.nom = nom;
//         this.note =note;
//     }

//     afficherNom(){
//         console.log("le nom de l'etudiant est :" +this.nom + this.note)
//     }
// }

// let e1= new etudiant("salim" ,22)
// let e2= new etudiant("diaba" , 22)
// e2.afficherNom()




// class file{
//     constructor(){
//         this.t =[]
//     }
//     empty(){
//         return this.t.length === 0;
//     }

//     ef(e){
//         this.t.push(e)
//     }

//     df(){
//        if(this.empty()){
//         console.log("file vide")
//         return null
//        } 
//        else{
//         // let e =this.t[0]
//         //     this.t.shift()};
//         //     return e

//          let e = this.t[0];
//         this.t.shift();
//         return e;
//       } }


// first(){
//     if (this.empty()) {
//         console.log('file vide') 
//         return null    
//     }
//     let fr= this.t[this.t.length-1]
//     return this.t[this.t.length-1]
// }

// Last(){
//     if(this.empty()){
//         console.log('file vide')
//         return null
//     }
//     let l= this.t[0]
//     return l
// }
// size(){
//     let i=0
//     this.t.forEach((e)=> {
// i+=1
// return i

//     })
// }

// display(){
// this.t.forEach((e)=>
// {console.log(this.t[e])})
// }

// clear1(){
//     this.t.forEach((e)=>{
// this.df()

//     })
//     console.log(this)
// }

// totalpages(){
//     let t= this.t.reduce((s,i)=>{
//         return s+ i.pages
//     },0)
//     console.log(t)
// }
// }



// class element{
//     constructor(nom, pages , proprio){
//          if(typeof nom !== "string"){
//             throw new TypeError('Le nom doit etre un sting')
//         };
//         if(typeof pages !== "number"){
//             throw new TypeError('Les pages doivent etre un nombre')
//         };
//          if(typeof proprio !== "string"){
//             throw new TypeError('Le nom du proprieataire doit etre un sting')
//         };
//         this.nom = nom;
//         this.pages = pages
//         this.proprio = proprio 
//         }
//     }

// let impression= new file()


// let e1= new element("rapport.pdf",10 ,"amine")
// let e2= new element("CV.docx" , 2, "Sara")
// let e3= new element("Projet.pdf" ,25 ,"Yacine")
// let e4= new element ("factures.pdf",3 ,"Douaa")
// let e5= new element('Presentation.pptx',15,"Ikram")
// impression.ef(e1)
// impression.ef(e2)
// impression.ef(e3)
// impression.ef(e4)
// impression.ef(e5)
// console.log(impression)

// console.log("1 ere impression: "+impression.Last().nom)

// console.log( "derniere impression: "+impression.first().nom)

// console.log("1 er document: "+impression.t[0].nom)


// let e6= new element("examen.pdf", 8, "salim")
// impression.ef(e6)
// console.log(impression)


// impression.df()
// console.log(impression)

// impression.clear()

// impression.totalpages()

// class stack{
//     constructor(){
//         this.t=[]
//     }

//     vide(){
//         return("la taille de la pile"+this.t.length)
//     }

//     empiler(e){
//         this.t.push(e)
//     }

//     depiler(){
//     //    let e = this.t[this.t.length-1]
//        this.t.pop()
//     }
// }

// let s= new stack

// s.vide
// console.log(s)

// s.empiler(10)
// s.empiler(20)
// console.log(s)

// s.depiler()
// console.log(s)



// function bublesort(t){
//    let  n=t.length;
//     for(i=0;i<n ;i++){
//     for(j=0; j<n-i-1 ;j++){ 
//         if(t[j]>t[j+1]){
//         let x=t[j]
//         t[j]=t[j+1]
//         t[j+1]=x
//     };


//     }
// }
// return t
// }

// bublesort(t)
// console.log(t)



// function triu(t,n){
//     let i=0
//     while((i<t.length) && (trouve===false))
//     {
//         if(t[i]===n){

//             trouve=true
//             let x=i
//             console.log("valeur trouvee a la positon:")
//             return x
//         }
//         else{
//             i +=1
//         };
//     }
//      if(trouve===false){
//             console.log("le tableau ne contient pas cette valeur")
//         };
// }

// console.log( triu(t,3))


// faux
// function trio(t,x){
//     let n= t.length-1 ,i=0
// while(trouve===false && i<n){
// n=Math.floor(n)
// if(t[n]=x){
//     trouve= true
//     console.log("trouve")

// }else{
//     n=Math.floor(n)
//     if(t[n]<x){

//     if(t[n]==x){
//         trouve=true

//     }
// }

// };

// i+=1
// }
// }

// function rbinaire(t,n){
//     let debut=0, fin=t.length-1
//     while(debut<=fin){
//         let milieu= Math.floor((debut+fin)/2)
//         if(t[milieu]===n){
//             return milieu
//         }
//         if(t[milieu]<n){
//             debut= milieu+1
//         }else{
//             fin=milieu-1
//         }
//     }
//     return -1
// }
// let t=[5,3,4,1], x=1
// console.log(rbinaire(t,3)
// )

// function compteavant(n){
//     if(n===0){
//         console.log("cas de base")
//         return 0
//     }
//     n=compteavant(n-1)
//     // return n+ compteavant(n-1)
// }

function fibonacci(n){
        
    if(n==0 ){
        return 0
    } 
    if(n==1){
        
        return 1
    }
    else{
    return fibonacci(n-1)+fibonacci(n-2)
    
    }
    
}

console.log(fibonacci(6))