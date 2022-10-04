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
  state = {}

  handleClick = () =>{
    this.props.onClick()
    this.setState((prevState) => ({ active: !prevState.active }))
    // console.log('gg')
  }
  
  render() {
    const {active} = this.state
    console.log(active)
    return (
      <Button toggle active={active} onClick={this.handleClick}>
        {this.props.text}
      </Button>
    )
  }
}

export  {ButtonExampleToggle as Displaybutton};
// export default ButtonExampleConditionals
// export { }