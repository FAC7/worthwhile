import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'

export default (props) => {
  return (
      <ul>
      {props.roles
        ? props.roles.map(role => <HostListItem role={role} changeState={props.changeState} />)
        .filter(props.filterFunction)
        : props.candidates.map(candidate => <CandidateListItem candidate={candidate} changeState={props.changeState} />)
        .filter(props.filterFunction)
      }
      </ul>
  )
}
