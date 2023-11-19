import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SkillsPage from "./Pages/SkillsPage";
import ExpreiencePage from "./Pages/ExperiencePage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Pages/LoginPage";
import DashboardLayout from "./Components/DashboardLayout/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SkillsDashboard from "./Pages/Dashboard/SkillsDashboard";
import Categories from "./Pages/Dashboard/Categories";
import ExperiencesDashboard from "./Pages/Dashboard/ExperiencesDashboard";
import ProjectsDashboard from "./Pages/Dashboard/ProjectsDashboard";
import ProfileDashboard from "./Pages/Dashboard/ProfileDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="experience" element={<ExpreiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="main" element={<Dashboard />} />
        <Route path="skills" element={<SkillsDashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="experiences" element={<ExperiencesDashboard />} />
        <Route path="projects" element={<ProjectsDashboard />} />
        <Route path="profile" element={<ProfileDashboard />} />
      </Route>
    </Routes>
  );
}
