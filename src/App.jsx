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
import SkillCategories from "./Pages/Dashboard/Categories/SkillCategories";
import ProjectCategories from "./Pages/Dashboard/Categories/ProjectCategories";
import SkillsPageAdmin from "./Pages/SkillsPageAdmin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="skills/me" element={<SkillsPageAdmin />} />
        <Route path="experience" element={<ExpreiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="main" element={<Dashboard />} />
        <Route path="skills" element={<SkillsDashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/skills" element={<SkillCategories />} />
        <Route path="categories/projects" element={<ProjectCategories />} />
        <Route path="experiences" element={<ExperiencesDashboard />} />
        <Route path="projects" element={<ProjectsDashboard />} />
      </Route>
    </Routes>
  );
}
