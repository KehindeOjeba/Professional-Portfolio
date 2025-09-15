import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const socialIcon = [
    {icon: <FaGithub/>, path: 'https://github.com/KehindeOjeba'},
    {icon: <FaLinkedin/>, path: 'https://www.linkedin.com/in/kehinde-ojeba-3020b621a'},
    {icon: <FaInstagram/>, path: ''},
]
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socialIcon.map((item, index) => {
                
                return(
                    <a key={index} href={item.path} className={iconStyles}  target="_blank"
          rel="noopener noreferrer">
                        {item.icon}
                    </a>
                )
            })
        }
    </div>

    //  <div className={containerStyles}>
    //   {socialIcon.map((item, index) => {
    //     const isExternal = item.path.startsWith("http");

    //     if (isExternal) {
    //       // 🔹 Use <a> for external links
    //       return (
    //         <a
    //         target="_blank"
    //           rel="noopener noreferrer"
    //           key={index}
    //           href={item.path}
    //           className={iconStyles}
    //         >
    //           {item.icon}
    //         </a>
    //       );
    //     } else {
    //       // 🔹 Use <Link> for internal routes
    //       return (
    //         <Link key={index} href={item.path} className={iconStyles}>
    //           {item.icon}
    //         </Link>
    //       );
    //     }
    //   })}
    // </div>
  )
}

export default Socials
