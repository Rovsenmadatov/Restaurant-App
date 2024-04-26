import React from 'react'

const Container = ({children,designs}) => {
  return (
    <div className={`${designs} max-w-[1440px] mx-auto p-5`}>
    {children}
    </div>
  )
}

export default Container
