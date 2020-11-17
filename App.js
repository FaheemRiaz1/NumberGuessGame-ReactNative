
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


  class App extends React.Component{
    //HERE I AM DECLARING A CONSTRUCTOR 
    constructor(){
          super();
    //HERE I AM DECLARING AN OBJECT WHICH HAS solution and array result
          this.state = {
              solution: "" ,
              ugn: Math.floor(Math.random()*100),
              sgn:"",
              result:"",
              hint:"",
              hint1:"",
              count:1,
              score:0,
              turn:1,
              disabled:""
  
          }
      }
    
      //HERE I AM ADDING EVENT LISTNER TO ALL BUTTONS
      onClick = button => {
        var z= this.state.ugn
        if(this.state.count===5){
          this.setState({
            hint:"You lost the game",
            result:z,       
          });
        }
  
        else if(button === "CE"){
          this.backspace()
        }//NOW IF I CLICK CE BUTTON IT WILL DELETE VERY LAST DIGIT NUMBER   
       
        else if(button === "reset"){
          this.reset()
        }//NOW IF I CLICK C BUTTON IT WILL RESET EVERYTHING
         else if(button === "="){
           this.calculate()
           //TASK#01
           var c=1;
           c=this.state.count+1
          this.setState({
            count:c,
            turn:c,
          })
         
        }//NOW IF I CLICK = BUTTON THE RESULT WILL BE DISPLAYED 
        else if(button === "h"){
          this.hint1()
        }
      
        else {
          this.setState({
            solution: 
                this.state.solution + button
           })
         }//THIS IS EVENT LISTNER FOR EVERYOTHER BUTTON e.g 1, 2, 3, 4, 5,... etc
      };
      hint1 = () =>{
        var ugn=this.state.ugn;
        var h=ugn;
        var h1=h;
        if(h<100){
            h=h%5;
            h+=2;
            h-=2;
            h+=ugn;
  
            h1=h;
            h1=ugn-5;
            var z ="Range is "+h1+" and "+h
            this.setState({
              hint1: z,
            });
        }  
      }
        //THIS ARROW FUNCTION WILL BE INVOLVE IN CALCULATING CORRECT RESULTS
      calculate = () => {
        console.log(this.state.ugn)
        var sgn=this.state.solution;
        var ugn=this.state.ugn;
        console.log(ugn,sgn)
        var s=this.state.score
        if(ugn==sgn){
          this.setState({
            result: "Correct",
            score:100
  
          });
        }
        else{
          this.setState({
            result: "Wrong",
            solution:"",
            score:"0"
           
          })
        }
      };
  
      buttonClick=(e)=>{
        e.preventDefault();
        this.setState({button:e.target.name, countClick:this.state.countClick+1});
      } 
      
      //THIS WILL SET THE STATE OF THE INPUT TEXT TO EMPTY STRING
      //TASK#03
      reset = () => {
          this.setState({
              solution: "",
              hint:"",
              hint1:"",
              result:"",
              score:"",
              turn:"",
          })
      }; 
  render() {
     return (
     
        <View style={styles.cbody}>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.solution}</Text>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.result}</Text>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.hint}</Text>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.hint1}</Text>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.score}</Text>
          <Text style={{padding:15,textAlign:"center",fontSize:20}}>{this.state.turn}</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{width:100}}><Button  title="reset" onPress={ this.onClick.bind(this,'reset')}/></View>

       </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{width:33}}><Button  title="1" onPress={ this.onClick.bind(this,'1')}/></View>
          <View style={{width:33}}><Button  title="2" onPress={this.onClick.bind(this,'2')}/></View>
          <View style={{width:33}}><Button  title="3" onPress={this.onClick.bind(this,'3')}/></View>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{width:33}}><Button  title="4" onPress={this.onClick.bind(this,'4')}/></View>  
          <View style={{width:33}}><Button  title="5" onPress={this.onClick.bind(this,'5')}/></View>
          <View style={{width:33}}><Button title="6" onPress={this.onClick.bind(this,'6')}/></View>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <View style={{width:33}}><Button  title="7" onPress={this.onClick.bind(this,'7')}/></View>
          <View style={{width:33}}><Button  title="8" onPress={this.onClick.bind(this,'8')}/></View>
          <View style={{width:33}}><Button  title="9" onPress={this.onClick.bind(this,'9')}/></View>
        </View>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{width:33}}><Button  title="0" onPress={this.onClick.bind(this,'0')}/></View>
            <View style={{width:33}}><Button  title="h" onPress={this.onClick.bind(this,'h')}/></View>
            <View style={{width:33}}><Button  title="=" onPress={this.onClick.bind(this,'=')}/></View>
         </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  cbody:{
  borderRadius:1,
  borderColor:"black",
  alignItems:"center",
  },
});
export default App;
