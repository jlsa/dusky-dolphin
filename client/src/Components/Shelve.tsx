import React, { FunctionComponent, Children } from 'react';

type ShelveProps = {
  name: string,
  showNumber?: boolean
}

const Shelve: FunctionComponent<ShelveProps> = ({name, showNumber = false, children}) => {
  const n = Children.toArray(children).length
  return (
    <>
      <h2><strong>{ name }{showNumber && (<span>( {n} )</span>)}</strong></h2>
        <div className="cards">
          {children}
        </div>
    </>
  )
}

export default Shelve;