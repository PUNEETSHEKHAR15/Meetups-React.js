import AllMeetups from "./pages /AllMeetups";
import NewMeetups from "./pages /NewMeetups";
import FavouriteMeetup from "./pages /FavouriteMeetup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/layouts/Layout";
// import MainNavigation from "./Components/layouts/MainNavigation";
function App() {
  // const Layout = () => {
  //   return (
  //     <>
  //       <MainNavigation />
  //       <Outlet />
  //     </>)
  // }
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path="/" element={<AllMeetups />} />
              <Route path="/new-meetups" element={<NewMeetups />} />
              <Route path="/fav-meetups" element={<FavouriteMeetup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;  
