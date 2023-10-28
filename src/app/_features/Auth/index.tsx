'use client'

import { Resigner } from "./components/Resigner"
import { FormAuth } from "./components/Form"
import { SocialOptions } from "./components/SocialOptions"
import Title from "./components/FormTitle"
import { Logo } from "@/app/_components/Icons"
import { Provider } from "./context"
import { HTMLAttributes, useState } from "react"
import { MODE_AUTH } from "./types"

const Auth = () => {
  const [mode, setMode] = useState(MODE_AUTH?.SIGN_IN)
  
  return (
    <div className="h-screen flex relative" >

      {/* Logo for tablet */}
      <div className="md:block md:absolute md:z-[60] hidden pt-8 pl-8">
          <Logo width="70" height="70" />
      </div>

      <div className="sm:w-[90%] sm:block sm:z-50 sm:top-2/4 sm:left-2/4 sm:translate-y-[-50%] sm:p-4 sm:translate-x-[-50%] 
      sm:absolute sm:rounded-xl sm:bg-white
      md:rounded-xl md:p-9 md:absolute md:w-[80%] md:bg-white 
      md:z-50 md:top-2/4 md:left-2/4 md:translate-y-[-50%] 
      md:translate-x-[-50%] w-[45%] relative flex">
        
        <div className={`md:hidden ${mode === MODE_AUTH.FORGOT_PASSWORD || mode === MODE_AUTH.SIGN_UP ? 'sm:hidden' : 'sm:flex'} sm:justify-center sm:p-0 pt-8 pl-8`}>
          <Logo width="70" height="70" />
        </div>
        <Provider
          props={{
            mode,
            setMode
          }}
        >
          <div className={`sm:m-auto sm:w-full md:m-auto ml-[36px] mr-[82px] w-[385px] h-full flex flex-col ${mode === MODE_AUTH.SIGN_UP && 'justify-end sm:pb-0 pb-9'}`}>
            <div className='h-[75%] flex items-end'>
              <div>
                <Title />
                <FormAuth />
              </div>
            </div>
            {mode !== MODE_AUTH.SIGN_UP ? <div className='sm:mt-2 md:mt-2 h-[25%] mt-30 flex flex-col justify-around'>
              <SocialOptions />
              <Resigner />
            </div> : null}
          </div>
        </Provider>
      </div>
      <div className="sm:w-full md:w-full w-[55%] relative">
        <img className="object-cover w-full sm:opacity-75 md:opacity-75 h-full" src="/img/work.png" />
        <div className="sm:hidden md:hidden bg-white w-[13rem] h-[25%] absolute bottom-0">
          <div className="bg-white w-[4.6rem] h-12 absolute bottom-0 left-52">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth