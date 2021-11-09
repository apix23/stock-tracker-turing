import React from 'react'

const ProgressBar = ({ completed }: { completed: number }) => {
  const containerStyles = {
    height: '4px',
    width: '231px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: ' var(--core-primary-2)',
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  )
}

export default ProgressBar
