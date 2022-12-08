import { Festivals } from './pages/festivals';
import { Artists } from './pages/artists'
import { Help } from './pages/help'
import { Magazine } from './pages/magazine'
import { Home } from './pages/home'
import { Log_In } from './pages/log_in';


export const routes = [
    {
        path: '/',
        element: Home,
        isExact: true
    },
    {
        path: '/festivals',
        element: Festivals,
        isExact: true
    },
    {
        path: '/artists',
        element: Artists,
        isExact: true
    },
    {
        path: '/help',
        element: Help,
        isExact: true
    },
    {
        path: '/magazine',
        element: Magazine,
        isExact: true
    },
    {
        path: '/login',
        element: Log_In,
        isExact: true
    }


]