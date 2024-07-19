import background from "../assets/background.jpg"
export const Landing = () => {

  return (

    <div className="intro h-[90vh]  m-auto  flex">
      <div className="introduction flex justify-center items-center mt-[-10%]  w-[50%] p-8 ">
        <div className="intro ">
          <h3 className="text-2xl">Hi</h3>
          <h1 className="text-5xl my-5">Its me Rohan Thapa</h1>
          <h1 className="text-2xl">Aspiring React.Js Developer with strong front-end development skills in ReactJS, Redux, and JavaScript. Experienced in building
            dynamic web applications and managing complex data operations.</h1>
          <h4 className="text-xl mt-2">Learning !!!</h4>
        </div>
      </div>
      <div className="image flex items-center justify-center w-[50%]">
        <img className="w-[65%] rounded-full aspect-square" src={background} alt="" />
      </div>
    </div>
  )
}
