import React from 'react'
import PropTypes from 'prop-types'

const ButtonComponent = ({categoria}) => {
  return (
    <button>
        {categoria}
    </button>
    
  )
}

ButtonComponent.propTypes = {}

export default ButtonComponent