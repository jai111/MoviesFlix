

import { useState } from 'react'
import { BookmarkIcon, HomeIcon} from 'lucide-react'
import SidebarComponent from 'Components/SidebarComponent'
import { SidebarItem } from 'Components/SidebarItem'
import { Link } from 'react-router-dom'

export default function Sidebar () {

    const [active, setActive] = useState(0)
  
   const items = [
    {
        icon: <HomeIcon/>,
        value: 'Home',
        link: '/'
    },
    {
        icon: <BookmarkIcon/>,
        value: 'Favourites',
        link: '/favourites'
    }
   ]


    return(
        <SidebarComponent>
            {
                items.map((item, id) =>{
                    
                    return(
                        <Link to = {item.link} key={id}>
                            <SidebarItem
                                key={id}
                                text = {item.value}
                                onItemClick={()=>setActive(id)}
                                active={active === id}
                                icon={item.icon}
                            />
                        </Link>
                    )
                })
            }
        </SidebarComponent>
    )
}