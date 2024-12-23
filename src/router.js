import PrivateRoute from "./component/PrivateRoute";
import About from "./pages/about/About";
import Article from "./pages/article/Article";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Setting from "./pages/panel/Setting";

const routes = [
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/article', element: <Article/>, children:[
    {path: 'react' , element:<h4>مقاله مربوط به ریکت</h4>},
    {path: 'js' , element:<h4>مقاله مربوط به جاوا اسکریپت</h4>},
    {path: 'php' , element:<h4>مقاله مربوط به پی اچ پی </h4>},
  ]},
  {path: '/login', element: <Login/>},
  {path: '/panel', element: <PrivateRoute> <Panel/> </PrivateRoute>},
  {path: '/setting', element: <PrivateRoute> <Setting/> </PrivateRoute>},
  {path: '/course/:courseId', element: <Course/>},
]
export default routes;