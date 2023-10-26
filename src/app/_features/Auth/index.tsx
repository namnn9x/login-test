import { Resigner } from "./Resigner"
import { Form } from "./Form"
import { SocialLogin } from "./SocialLogin"
import Title from "./Title"

const Auth = () => {
  return (
    <div className="h-screen flex relative" >
      <div className="w-[45%]">
        <div>
          {/* Icon */}
        </div>
        <div>
          <Title
            title="Đăng nhập"
            desc='Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng'
          />
          <Form />
          <SocialLogin />
          <Resigner />
        </div>
      </div>
      <div className="w-[55%] relative">
        <img className="w-full h-full" src="/img/work.png" />
        <div className="bg-white w-48 h-40 absolute bottom-0">
          <div className="bg-white w-20 h-12 absolute bottom-0 left-48">
          </div>
        </div>
      </div>
    </div>
  )
}

export { Auth }