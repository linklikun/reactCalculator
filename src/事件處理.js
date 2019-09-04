import React from 'react'
import ReactDOM from 'react-dom'
class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isFlag:false
        }
        this.handleClick=this.handleClick.bind(this)
    }
    render(){
        
        return (
            
            <button onClick={this.handleClick}>
                {this.state.isFlag ? 'on':'off' }
            </button>
        )
        
    }
    handleClick(){
        // console.log(this);
        this.setState({
            isFlag:!this.state.isFlag
        },function () {
            // console.log(this);
            
        })
    }

}



ReactDOM.render(
    <div>
        <Toggle></Toggle>
    </div>,
    document.getElementById('app')

)
