import { Routes, Route } from "react-router-dom";

import MainLayout from "./MainLayout";

import Home from "./pages/users/Home/Home";

import Community from "./pages/users/community/Community";

import Login from "./pages/authentication/login/Login";

import Signup from "./pages/authentication/signup/Signup";

import EventsPage from "./pages/Events/EventsPage";

import Blogs from "./pages/users/blogs/Blogs";

import SingleBlog from "./pages/users/blogs/SingleBlog";

import AlumniPage from "./pages/users/Alumni/AlumniPage";

import Gallery from "./components/users/Gallery/Gallery";

import Profile from "./pages/UserAccount/Profile/Profile";

import UserAccountDashboard from "./pages/UserAccount/UserAccountDashboard/UserAccountDashboard";

import UserCommunity from "./pages/UserAccount/Community/UserCommunity";

import UserProjects from "./pages/UserAccount/UserProjects/UserProjects";

import UserSettings from "./pages/UserAccount/UserSettings/UserSettings";

import UserBlogs from "./pages/UserAccount/UserBlogs/UserBlogs";

import AdminDashboard from "./pages/AdminPages/AdminDashboard/AdminDashboard";

import AdminUsers from "./pages/AdminPages/AdminUsers/AdminUsers";

import AdminCommunities from "./pages/AdminPages/AdminCommunities/AdminCommunities";

import AdminEvents from "./pages/AdminPages/AdminEvents/AdminEvents";

import AdminBlogs from "./pages/AdminPages/AdminBlogs/AdminBlogs";

import AdminTestmonials from "./pages/AdminPages/AdminTestmonials/AdminTestmonials";
import Communities from "./pages/users/community/Communities";
import AdminProjects from "./pages/AdminPages/AdminProjects/AdminProjects";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="community" element={<Communities/>}/>
        {/* User Account Routes */}
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/dashboard" element={<UserAccountDashboard />} />
        <Route path="/account/community" element={<UserCommunity />} />
        <Route path="/account/projects" element={<UserProjects />} />
        <Route path="/account/user-settings" element={<UserSettings />} />
        <Route path="/account/blogs" element={<UserBlogs />} />

        {/* Admin Routes */}

        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/users" element={<AdminUsers/>} />
        <Route path="/admin/communities" element={<AdminCommunities/>} />
        <Route path="/admin/events" element={<AdminEvents/>} />
        <Route path="/admin/projects" element={<AdminProjects/>} />

        <Route path="/admin/blogs" element={<AdminBlogs/>} />

        <Route path="/admin/testmonials" element={<AdminTestmonials/>} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;
