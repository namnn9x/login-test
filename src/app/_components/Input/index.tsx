'use client'
import { ChangeEvent, useState } from 'react'
import { ClosedEyeIcon, OpenEyeIcon } from "../Icons"

interface IInput {
  id: string,
  name: string,
  value: string
  title?: string,
  placeHolder?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
  isPassword?: boolean,
}

const Input = ({
  id,
  name,
  value,
  title,
  placeHolder,
  onChange,
  isPassword = false,
}: IInput) => {
  const [show, setShow] = useState(true)

  const showModePassWord = () => {
    return (
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        <span onClick={() => setShow((prev) => !prev)}>
          {show ? <OpenEyeIcon width='15' /> : <ClosedEyeIcon width='15' />}
        </span>
      </div>
    )
  }

  return (
    <div className="py-2">
      <div className='mb-1'>
        <span className="text-base text-[#474c55] font-semibold">{title ? title : ''}</span>
      </div>
      <div className='relative'>
        <input
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeHolder ? placeHolder : ''}
          type={show ? 'text' : 'password'}
          className="text-md block px-3 py-2 
      rounded-[4px] w-full bg-white border-2 
    border-gray-300 placeholder-[#b1b6c0] 
    focus:placeholder-gray-500 
    focus:bg-white 
    focus:border-[#c8ccd3] 
      focus:outline-none"/>

        {isPassword && showModePassWord()}
      </div>
    </div>
  )
}

export default Input