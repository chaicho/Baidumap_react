import React from 'react'
import { Button } from 'semantic-ui-react'


export class ButtonExampleToggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }
  
  render() {
    // const active = this.state.active
    // console.log(active)
    return (
      <Button toggle active={this.props.active} onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    )
  }
}

export  {ButtonExampleToggle as Displaybutton};
