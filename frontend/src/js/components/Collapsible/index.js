import React, {Component} from 'react'
import List from '../List'
import {Well, Collapse} from 'react-bootstrap'

export default class CollapsibleItem extends Component {
  constructor () {
    super()
    this.state = {open: false}
  }
  render () {
    <div>
      <div onClick={() => this.setState({open: !this.state.open})}>{this.props.text}</div>
      <Collapse>
        <Well>
          <List
            candidates={this.props.candidates}
            changeState={this.props.changeState}
            filterFunction={this.props.filterFunction}
          />
        </Well>
      </Collapse>
    </div>
  }
}
