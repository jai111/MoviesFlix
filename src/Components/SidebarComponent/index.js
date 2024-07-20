import { ChevronLast, ChevronFirst, LogOutIcon } from "lucide-react"
import { createContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "Store/userSlice"

export const SidebarContext = createContext()

export default function SidebarComponent({ children }) {

  const [expanded, setExpanded] = useState(true)
  const email = useSelector(state => state.user.email);
  const name = email?.split('@')[0]
  const nvaigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () =>{
    dispatch(logout())
    nvaigate('/login')
  }

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between">
          <div></div>
          <h2 className={`overflow-hidden transition-all text-3xl font-bold text-primary
           ${
              expanded ? "w-50" : "w-0"
            }`} >Watchlists</h2>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-primary-light hover:bg-primary-dark"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <div className="p-3 bg-primary-dark rounded font-bold">{name?.slice(0,2).toUpperCase()}</div>
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{email?.split('@')[0]}</h4>
              <span className="text-xs text-gray-600">{email}</span>
            </div>
            <LogOutIcon className="cursor-pointer" size={20} onClick={handleLogout} />
          </div>
        </div>
      </nav>
    </aside>
  )
}