import React from 'react'
import ReactDOM from 'react-dom'
// const numberList=[1,2,3,4]
// const newNumberList=numberList.map((item=>{
//     return <li>{item}</li>
// }))

// from表单提交
// 1.1受控组件 input textare select 拥有自己的state 而react通过组建的私有state来管理自己的私有属性，结合两种
// class NameFrom extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             value:'null'
//         }
//         this.handleChange=this.handleChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     handleChange(event){
//         this.setState({
//             value:event.target.value
//         })
//     }
//     handleSubmit(event){
//         alert('tijiao:'+this.state.value)
//         event.preventDefult();
//     }
//     render(){
//         return (
//             <form  onSubmit={this.handleSubmit}>
//                 <label>
//                     <input type = 'text' value={this.state.value} onChange={this.handleChange}></input>
//                 </label>
//                 <input type='submit' value></input>
//             </form>
//         )
//     }
// }

// 1.2 textare通过value来绑定state
// class NameTextare extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//              value:'IQ能够撰写一篇'
//         }
//         this.handleChange=this.handleChange.bind(this)
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }
//     handleChange(event){
//         this.setState({
//             value:event.target.value
//         })
//     }
//     handleSubmit(event){
//         alert('titie:'+this.state.value)
//     }
    
//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                 <textarea value={this.state.value} onChange={this.handleChange} ></textarea>
//                 </label>
//                 <input type='submit' value="tijiao"></input>
//             </form>
//         )
//     }
// }

// 1.3多个控件输入
// class NameDouble extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isFlag:true,
//             numberOfGuests:2
//         }
//         this.handleChange=this.handleChange.bind(this)
//     }
//     handleChange(event){
//         let target=event.target
//         let value=target.type==='checkbox' ? target.checked : target.value
//         let name=target.name
//         this.setState({
//             [name]:value
//         })
//     }
//     render(){
//         return (
//             <form>
//                 <label>
//                     <input type="checkbox" name="isFlag" checked={this.state.isFlag} onChange={this.handleChange}></input>
//                 </label>
//                 <br/>
//                 <label>
//                     <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange}></input>
//                 </label>
//             </form>
//         )
//     }
// }
// ReactDOM.render(
    
//         <NameDouble></NameDouble>
//     ,
//     document.getElementById('app')

// )

// 2.1状态提升
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
  class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
  
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('app')
  );
