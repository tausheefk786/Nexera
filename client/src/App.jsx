import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import LayoutLoader from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import ("./pages/Admin/AdminLogin"))
const Dashboard= lazy(() => import ("./pages/Admin/Dashboard"))
const UserManagement= lazy(() => import ("./pages/Admin/UserManagement"))
const MessageMangement= lazy(() => import ("./pages/Admin/MessageMangement"))
const ChatManagement= lazy(() => import ("./pages/Admin/ChatManagement"))



let user = true;

const App = () => {
  return (
    <BrowserRouter>
      {/* The Suspense component shows a fallback while lazy components load */}
      <Suspense fallback={<LayoutLoader/>}>
        <Routes>
          {/* Protected routes for logged-in users */}
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatid" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          {/* Protected route for logged-out users (login page) */}
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />

          <Route path="/admin"  element ={<AdminLogin/>}/>
          <Route path="/admin/dashboard"  element ={<Dashboard/>}/>
           <Route path="/admin/dashboard"  element ={<Dashboard/>}/>
           <Route path="/admin/user-management"  element ={<UserManagement/>}/>
           <Route path="/admin/chats"  element ={<ChatManagement/>}/>
           <Route path="/admin/messages"  element ={<MessageMangement/>}/>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;