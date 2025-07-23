import Link from "next/link"
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialIcon = [
    {icon: <FaGithub/>, path: ''},
    {icon: <FaLinkedin/>, path: ''},
    {icon: <FaInstagram/>, path: ''},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socialIcon.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })
        }
    </div>
  )
}

export default Socials
