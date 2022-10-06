import React from 'react'
import { Button } from 'semantic-ui-react'

// const ButtonExampleConditionals = () => (
  
//   <Button.Group>
//     <Button>Cancel</Button>
//     <Button.Or />
//     <Button positive>Save</Button>
//   </Button.Group>
// )

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
// export default ButtonExampleConditionals
// export { }