import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  PresentationChartLineIcon,
  BeakerIcon,
  Cog6ToothIcon,
  ClockIcon,
  BookmarkIcon,
  ArrowRightCircleIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp, Login } from "@/pages/auth";
import {Portada} from "@/pages/estudio-mercado";
import {PortadaLaboratorios} from "@/pages/laboratorios";
import {PortadaAdministracion} from "@/pages/administracion";




const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    title : "Analisis",
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <PresentationChartLineIcon {...icon} />,
        name: "Estudio de Mercado",
        path: "/estudio-mercado",
        element: <Portada />,
      },
      {
        icon: <BeakerIcon {...icon} />,
        name: "laboratorios",
        path: "/laboratorios",
        element: <PortadaLaboratorios />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Administracion",
        path: "/administracion",
        element: <PortadaAdministracion />,
      },
     /*{{
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },}*/ 
      
    ],
  },
  /*{ 
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "login",
        path: "/login",
        element: <Login />,
      },
    ],
  },
  }*/
  {
    title: "panel usuario",
    layout: "auth",
    pages: [
      {
        icon: <ClockIcon {...icon} />,
        name: "Historial de consultas",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <BookmarkIcon {...icon} />,
        name: "Marcadores",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ArrowRightCircleIcon {...icon} />,
        name: "Cerrar Sesión",
        path: "/login",
        element: <Login />,
      },
    ],
  },
  
];

export default routes;
