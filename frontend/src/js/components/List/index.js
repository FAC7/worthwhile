import React from 'react'
import HostListItem from '../HostListItem'
import CandidateListItem from '../CandidateListItem'

export default (props) => {
  return (
    <div>
      <ul>
      {props.roles
        ? props.roles.map(role => <HostListItem role={role} changeState={props.changeState} />)
        : props.candidates.map(candidate => <CandidateListItem candidate={candidate} changeState={props.changeState} />)
      }
      </ul>
    </div>
  )
}
