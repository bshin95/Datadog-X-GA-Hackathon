import { Component } from "react"
import React from "react"
import styled from "styled-components"

const Bar = styled.div`
  text-align: center;
`

const Button = styled.button`
  padding: 0.75rem;
  margin: 1rem;
  background-color: white;
  border: 3px solid lavender;
  color: black;
  text-transform: uppercase;
  height: inherit;
  width: inherit;
`

class Input extends Component {
  state = {
    text: "",
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({ text: "" })
    this.props.onSendMessage(this.state.text)
  }

  render() {
    return (
      <Bar className="Input">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Chat with your co-workers!"
            autoFocus={true}
          />
          <Button>Send</Button>
        </form>
      </Bar>
    )
  }
}

export default Input
