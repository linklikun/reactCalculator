import React from 'react'
import row from '../css/Row.scss'
export default class Row extends React.Component {
    constructor(props){
        super(props)

        this.handleChange=this.handleChange.bind(this)
    
    }
    handleChange(e){
        this.props.onheadleCaculator(e.currentTarget.innerText)
        console.log(e.currentTarget.innerText);
    }
    render(){
    const operators=['(',')','%','C',7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+']
    const keyWords=operators.map((item)=>{
      return (<span className="calculatorItem" onClick={this.handleChange}  value={item} key={item.toString()}>{item}</span>)
    }
    )
    // console.log(keyWords);
    
    return (
        <div>
        <ul className="calculatorUl">
          {keyWords}
        </ul>
        </div>
      )
    }
  }