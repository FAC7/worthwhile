import React, {Component} from 'react'
import List from '../List'
import {Well, Collapse} from 'react-bootstrap'

const liStyle = {
  listStyleType: 'none',
  color: 'white',
  fontSize: '1.7em',
  textDecoration: 'none',
  cursor: 'pointer'
}

export default class CollapsibleItem extends Component {
  constructor () {
    super()
    this.state = {open: false}
  }
  render () {
    return (
      <div>
        <a style={{textDecoration: 'none'}}>
          <li
            onClick={() => this.setState({open: !this.state.open})}
            style={liStyle}
          >
            {this.props.text}
          </li>
        </a>
        <Collapse in={this.state.open}>
          <div>
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
          </div>
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
