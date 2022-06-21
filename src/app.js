import { LightningElement,track } from "lwc";

export default class App extends LightningElement {

@track item
@track resultado
@track resultado1
@track resultado2




qtdade(event){
this.item=Number(event.target.value);
}

pedido(){
this.resultado= this.item * 28;   
this.resultado1= this.item * 8; 
this.resultado2= this.item * 10; 
}

iscadernoazul=true;
iscadernovermelho= false;
iscadernoamarelo=false;

cazul(){
  this.iscadernoazul=true;
  this.iscadernovermelho=false;
  this.iscadernorosa=false;
}

cvermelho(){

 this.iscadernoazul=false;
 this.iscadernovermelho=true;
 this.iscadernorosa=false;
}

crosa(){
 this.iscadernoazul=false;
 this.iscadernovermelho=false;
 this.iscadernorosa=true;

}


}
