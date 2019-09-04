import React from 'react'
import ReactDOM from 'react-dom'
import Row from './compoent/Row.jsx'
import index  from './css/index.scss'
function Content(props) {
    return (<div className="content">
      <p>{props.arr.input}</p>
      <p>{props.arr.result}</p>
      </div>
    )
}
class Calculator extends React.Component{
    constructor(props){
      super(props)
      this.state={
        input:'',
        result:''
      }
      this.headleCaculator=this.headleCaculator.bind(this)
    }
    headleCaculator(msg){
      console.log(typeof(msg)+'--'+msg)
      // this.setState({
      //   result:this.state.result+msg
      // },function(){
      //   console.log(this.state.result+'---');
        
      // })
      switch (msg) {
        case '=':
          this.setState({
            result:eval(this.state.input)
          },function(){
            console.log(this.state.result);
            
          })
          break;
        case 'C':
          this.setState({
            input:'',
            result:''
          })
          break;
        case '+':
          this.setState({
            input:this.state.input+msg
          },function(){
            console.log(this.state.input);
            
          })
          break
        case '-':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case '*':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case '/':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case '(':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case ')':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case '%':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        case '.':
            this.setState({
              input:this.state.input+msg
            },function(){
              console.log(this.state.input);
              
            })
          break;
        default:
          this.setState({
            input:this.state.input+parseFloat(msg)
          },function(){
            console.log(this.state.input);
            
          })
          break;
      }

      
      
    }
    render(){
      return (
        <div className="container">
          <Content arr={this.state}></Content>
          <Row onheadleCaculator={this.headleCaculator}></Row>
        </div>
      )
    }
}
  ReactDOM.render(
    <Calculator />,
    document.getElementById('app')
  );
  