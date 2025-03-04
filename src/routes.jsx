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

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Community />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* User Account Routes */}
        <Route path="/account/profile" element={<Profile />} />
        <Route path="/account/dashboard" element={<UserAccountDashboard />} />
        <Route path="/account/community" element={<UserCommunity />} />
        <Route path="/account/projects" element={<UserProjects />} />
        <Route path="/account/user-settings" element={<UserSettings />} />
      </Route>
    </Routes>
  );
};


export default AppRoutes;
