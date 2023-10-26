
interface AuthTitle {
 title: string,
 desc: string,
}

const AuthTitle = ({
 title,
 desc,
}: AuthTitle) => {
 return (
  <div className='mb-4'>
   <div className="text-base font-medium text-black" >{title}</div>
   <div className="text-gray-400 text-xs" >{desc}</div>
  </div>
 )
}

export default AuthTitle