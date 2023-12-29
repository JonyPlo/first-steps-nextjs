//! NOTA: Si queremos que la carpeta que encierra las demas paginas como en este caso se llama "general" la encerramos entre parentesis (general) esto hara que la carpeta o el nombre "general" no sean parte de la ruta o URL de las paginas, por ejemplo sin parentesis la URL para llegar a la pagina About seria "localhost:3000/general/about" pero si al nombre de la carpeta lo encerramos entre parentesis entonces la ruta quedaría de esta forma 'localhost:3000/about'

import { NavBar } from '@/components'

// Snippet para crear este layout es "lrc"
export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main className='flex flex-col items-center p-24'>
        <span className='text-lg'>Hola Mundo</span>
        {children}
      </main>
    </>
  )
}
