import React from 'react'
import { memo } from 'react'


// usememo is used for to stop unneccessar re render.
// here usecallbackChild is child componenet got render because of we are changing state parent compoenent .
// To stop it we can use memo express default memo( -- ) .here function is also got rendred because as we passed fucntion as props as state changed so whole componenet will re render .
// if we don't want to re render func unneccessary we will used hook useCallback.
// if we want to render or change state we will pass in dependencies  

function UseCallbackChild({func}) {

    console.log(func)
  return (
    <div>

        CHild
      
    </div>
  )
}

export default memo(UseCallbackChild)
