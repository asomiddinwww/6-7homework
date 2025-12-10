import logo from "../img/logo.png"
import card from "../img/cardimg.png"
import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="p-10 bg-[#5042bd] h-full w-[350px]  pr-20 fixed">
      <div>
        <div>
          <img src={logo} alt="" />
          <br />
          <hr className="text-[white]"/>
        </div>
        <div>
          <ul className="pt-10 pb-10 flex flex-col gap-2">
            <NavLink to={"/info"} className={({isActive}) => isActive ? "p-3  rounded-2xl bg-white pl-10 font-[600] text-[#5042bd]" : "text-white font-[600] pl-10 p-3"}>info</NavLink>
            <NavLink to={"/products"} className={({isActive}) => isActive ? "p-3  rounded-2xl bg-white pl-10 font-[600] text-[#5042bd]" : "text-white font-[600] pl-10 p-3"}>products</NavLink>
            <NavLink to={"/like"} className={({isActive}) => isActive ? "p-3  rounded-2xl bg-white pl-10 font-[600] text-[#5042bd]" : "text-white font-[600] pl-10 p-3"}>Like</NavLink>
            <NavLink to={"/shop"} className={({isActive}) => isActive ? "p-3  rounded-2xl bg-white pl-10 font-[600] text-[#5042bd]" : "text-white font-[600] pl-10 p-3"}>Shop</NavLink>
            <NavLink to={"/edit"} className={({isActive}) => isActive ? "p-3  rounded-2xl bg-white pl-10 font-[600] text-[#5042bd]" : "text-white font-[600] pl-10 p-3"}>Edit Card</NavLink>
          </ul>
        </div>
       <div className="pt-5">
         <div className="p-5 flex flex-col text-center justify-center bg-[white] pt-5 pb-5 rounded-2xl">
          <div className="flex items-center justify-center">
            <img className="w-[80%]" src={card} alt="" />
          </div>
          <div className="pb-3"><h1>Want to upgrade</h1></div>
          <div><button className="rounded-full text-[white] p-3 w-full bg-[#ff8157]">Upgrade now</button></div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Header