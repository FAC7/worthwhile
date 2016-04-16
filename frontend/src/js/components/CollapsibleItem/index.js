import React, {Component} from 'react'
import List from '../List'
import {Well, Collapse} from 'react-bootstrap'

export default class CollapsibleItem extends Component {
  constructor () {
    super()
    this.state = {open: false}
  }
  render () {
    return (
      <div style={collapsibleStyle}>
        <div onClick={() => this.setState({open: !this.state.open})}>{this.props.text}</div>
        <Collapse in={this.state.open}>
          <Well>
            {this.props.candidates
              ? <List candidates={this.props.candidates}
                changeState={this.props.changeState}
                filterFunction={this.props.filterFunction}
              />
              : <List roles={this.props.roles}
                changeState={this.props.changeState}
                filterFunction={this.props.filterFunction}
              />
            }
          </Well>
        </Collapse>
      </div>
    )
  }
}

CollapsibleItem.propTypes = {
  text: React.PropTypes.string,
  candidates: React.PropTypes.array,
  roles: React.PropTypes.array,
  changeState: React.PropTypes.func,
  filterFunction: React.PropTypes.func
}

const collapsibleStyle = {
  backgroundColor: '#0075b2',
  width: '90%',
  margin: '5vh auto 2vh auto',
  height: '8vh',
  paddingBottom: '8px'
}
