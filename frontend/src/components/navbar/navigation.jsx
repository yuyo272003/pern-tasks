import {MdTaskAlt} from 'react-icons/md'
import {BiTask, BiUserCircle} from 'react-icons/bi'

export const publicRoutes = [
  {
    name: "Sobre Nosotros",
    path: "/about",
  },
  {
    name: "Iniciar Sesión",
    path: "/login",
  },
  {
    name: "Registrarse",
    path: "/register",
  },

]

export const privateRoutes = [
  {
    name: "Mis Tareas",
    path: "/tasks",
    icon: <BiTask className='w-5 h-5' />,
  },
  {
    name: "Añadir Tarea",
    path: "/tasks/new",
    icon: <MdTaskAlt className='w-5 h-5' />,
  },
  {
    name: "Mi Perfil",
    path: "/profile",
    icon: <BiUserCircle className='w-5 h-5' />,
  },
];