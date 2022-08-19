import React from 'react'

const Alert = (prop) => {
  return (
    prop.alert &&
    <div className={`alert alert-${prop.alert.type}`}>
      {prop.alert.msg}
    </div>
  )
}

export default Alert
