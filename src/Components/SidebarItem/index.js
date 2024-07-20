
import { SidebarContext } from "Components/SidebarComponent"
import { useContext } from "react"

export function SidebarItem({ icon, text, active, onItemClick }) {

    const { expanded } = useContext(SidebarContext)
    
    return (
      <li
        className={`
          relative flex items-center py-2 px-3 my-1 mt-5
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-primary-dark to-primary-light text-primary"
              : "hover:bg-primary-light text-gray-600"
          }
      `}
      onClick={onItemClick}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
  
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-primary-dark text-black text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    )
  }