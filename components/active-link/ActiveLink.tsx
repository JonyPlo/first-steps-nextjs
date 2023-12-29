'use client'

import Link from 'next/link'
// Recordar que para importar los modulos de css el archivo tiene que tener en el nombre el .module.css, por ejemplo Cards.module.css, de lo contrario no funciona
import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  path: string
  text: string
}

export const ActiveLink = ({ path, text }: Props) => {
  // El hook usePathname() es un hook que viene de Next, y es para obtener el nombre de la ruta de la pagina, por ejemplo si estamos en la ruta "http://localhost:3000/about" lo que me devolvera el hook es "/about"
  // Tener en cuenta que este hook solamente funciona en componentes del lado del cliente, de lo contrario dara error
  const pathName = usePathname()

  return (
    <Link
      className={`${style.link} ${pathName === path && style['active-link']}`}
      href={path}
    >
      {text}
    </Link>
  )
}
