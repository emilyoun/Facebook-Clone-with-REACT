import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

// {title} is es6. it used to be (props) and at line 7. {props.title}
function SidebarRow({src, Icon, title}) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
