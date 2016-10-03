import React from 'react';
import ReactDom from 'react-dom'

class Questions extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <p>hello world</p>
      </div>
    )
  }
}

ReactDom.render(<Questions/>, document.getElementById('root'));
