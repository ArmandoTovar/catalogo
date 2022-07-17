import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsFillSuitHeartFill } from "react-icons/bs";
import Styles from '../components/NextJsCarousel.module.css'
import { initializeApp } from 'firebase/app';
import Image from '../components/Image';
import {getDatabase ,get ,set , ref} from 'firebase/database'
import { getFirestore, collection, getDocs ,setDoc } from 'firebase/firestore/lite';
import 'animate.css';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRso2bsuBg_C6xikDxDSX1No0rtDORrhA",
  authDomain: "catalogo-c9174.firebaseapp.com",
  databaseURL: "https://catalogo-c9174-default-rtdb.firebaseio.com",
  projectId: "catalogo-c9174",
  storageBucket: "catalogo-c9174.appspot.com",
  messagingSenderId: "933763429423",
  appId: "1:933763429423:web:039f6ec1939f493b4882da"
};

const app = initializeApp(firebaseConfig);


// Get a list of cities from your database
function writeUserData() {
  const db = getDatabase();
  set(ref(db, 'Puntaje'), {
    f1: "2",
  });}

const data=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]
export default class NextJsCarousel extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      db:'',
      username:'img0',
      fullname:'0',
      selectedOption:'',
      description:''

    };
    this.interface = this.interface.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.consolet= this.consolet.bind(this)
    this.cambiarimg = this.cambiarimg.bind(this)
    this.cambiardes = this.cambiardes.bind(this)

  }
   componentDidMount(){
    this.setState({
      db: getDatabase(app)
    });
   }
  
  handleOptionChange(event) {
 
    this.setState({
      selectedOption: event.target.value,
   //   fullname:  event.target.name
    });
    this.insertData(event.target.value,this.state.description);

  }

  consolet(){
    console.log(this.state.selectedOption)
   }
   cambiarimg(event){
  
    this.setState({
      username:  'img'+event,
      selectedOption:''
    });

   }
   cambiardes(event){

    this.setState({
      description:  event.target.value
    });
    this.insertData("desc",event.target.value)

   }
  render() {
        return (
            <div>
              <div className={Styles.coment+" animate__zoomInUp animate__animated animate__delay-1s	"}>                          
                 <textarea className={Styles.textarea} placeholder='Indicaciones adicionales referente a secciones específicas ✏' value={this.state.description} onChange={this.cambiardes} id="w3review" name="w3review" rows="4" cols="50">
</textarea>

</div>
  
                             <form  id='form'>
                              

  <p id='clasificacion' className={Styles.clasificacion}>
    <input   id="radio1"  type="radio" name="estrellas" value="5" checked={this.state.selectedOption === '5'} onChange={this.handleOptionChange} />
    <label  htmlFor ="radio1">★</label>
    <input  id="radio2" checked={this.state.selectedOption === '4'} onChange={this.handleOptionChange}  type="radio" name="estrellas" value="4"/>
    <label  htmlFor ="radio2">★</label>
    <input   id="radio3" checked={this.state.selectedOption === '3'} onChange={this.handleOptionChange} type="radio" name="estrellas" value="3"/>
    <label htmlFor ="radio3">★</label>
    <input   id="radio4" checked={this.state.selectedOption === '2'} onChange={this.handleOptionChange} type="radio" name="estrellas" value="2"/>
    <label  htmlFor ="radio4">★</label>
    <input  id="radio5" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange} type="radio" name="estrellas" value="1"/>
    <label  htmlFor ="radio5">★</label></p>

    

</form>
              
              <Carousel className={Styles.carousel + " animate__bounceInUp animate__animated animate__delay-2s"}  onChange={this.cambiarimg} 
              showArrows={true}
              
              showThumbs={false} 
              showIndicators={false}  
              autoPlay={false} 
              dynamicHeight={true}>
                 
                 {
                  data.map((x)=>(
                    <div key={x}>         
                      <Image  placeholder="blur" blurDataURL="data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 100' enable-background='new 0 0 100 100' xml:space='preserve'%3E%3Crect fill='%2363a8f7' width='3' height='100' transform='translate(0) rotate(180 3 50)'%3E%3Canimate attributeName='height' attributeType='XML' dur='1s' values='30; 100; 30' repeatCount='indefinite'/%3E%3C/rect%3E%3Crect x='17' fill='%2363a8f7' width='3' height='100' transform='translate(0) rotate(180 20 50)'%3E%3Canimate attributeName='height' attributeType='XML' dur='1s' values='30; 100; 30' repeatCount='indefinite' begin='0.1s'/%3E%3C/rect%3E%3Crect x='40' fill='%2363a8f7' width='3' height='100' transform='translate(0) rotate(180 40 50)'%3E%3Canimate attributeName='height' attributeType='XML' dur='1s' values='30; 100; 30' repeatCount='indefinite' begin='0.3s'/%3E%3C/rect%3E%3Crect x='60' fill='%2363a8f7' width='3' height='100' transform='translate(0) rotate(180 58 50)'%3E%3Canimate attributeName='height' attributeType='XML' dur='1s' values='30; 100; 30' repeatCount='indefinite' begin='0.5s'/%3E%3C/rect%3E%3Crect x='80' fill='%2363a8f7' width='3' height='100' transform='translate(0) rotate(180 76 50)'%3E%3Canimate attributeName='height' attributeType='XML' dur='1s' values='30; 100; 30' repeatCount='indefinite' begin='0.1s'/%3E%3C/rect%3E%3C/svg%3E" width='1920px' height='7000px' src={`/img/img (${x}).png`} alt={`imag${x}`}/>
                   
                  
                  </div>

                  ))

                 }    
              </Carousel>

  

            </div>

        );
    }
    interface(event){
      
     
    }
    getAllInput(){

     return{
      username:this.state.username,
      name:this.state.selectedOption,
      desc:this.state.description
     }

    }
    insertData(val,desc){
      const db = this.state.db;
      const data = this.getAllInput();
      set (ref(db,'pedro/'+data.username),{
        Fullname : val,
        Description:desc,

      })

    }



};