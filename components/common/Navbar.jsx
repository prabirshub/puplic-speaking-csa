
// next image
import { navLink } from "@/constants"
import Image from "next/image"
import Link from "next/link"



const Navbar = () => {
  return (
    <header>
      <div>
      <div>
        <h2>LOGO</h2>
      </div>
      <nav>
        <ul>
          {
            navLink.map((item) => {
              return <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            })
          }
        </ul>
      </nav>
      </div>
     </header>
  )
}
export default Navbar