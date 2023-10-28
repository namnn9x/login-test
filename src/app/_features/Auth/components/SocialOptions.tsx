import { FaceBook, Google, Linkedin } from "@/app/_components/Icons"


const width = '18'
const height = '18'

const socialOptions = [
 {
  icon: FaceBook,
  label: 'Facebook',
 },
 {
  icon: Google,
  label: 'Google',
 },
 {
  icon: Linkedin,
  label: 'Linkedin',
 }
]

const SocialOptions = () => {
 return (
  <div className='sm:pb-[10px] pb-10'>
   <p className="sm:mt-[1px] sm:mb-[1px] text-xs text-center mb-3 text-[#b1b6c0] font-normal" >Hoặc tiếp tục với:</p>
   <div className="flex justify-around">
    {socialOptions.map((item, index) => (
     <div key={index} className="flex items-center" >
      {<item.icon width={width} height={height} />}
      <label className="text-xs font-medium pt-[2px] pl-1" >{item.label}</label>
     </div>
    ))}
   </div>
  </div>
 )
}

export { SocialOptions }