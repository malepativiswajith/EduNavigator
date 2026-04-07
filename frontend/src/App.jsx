import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Pages */
import Colleges from "./pages/Colleges";
import CollegeDetail from "./pages/CollegeDetail";
import Exams from "./pages/Exams";
import ExamDetail from "./pages/ExamDetail";
import Placements from "./pages/Placements";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Promotions from "./pages/Promotions";
import Signup from "./pages/Signup";
import Scholarships from "./pages/Scholarships";
import CareerGuide from "./pages/CareerGuide";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

/* ✅ Correct Community Related Pages */
import Forums from "./pages/Forums";
import AskQuestion from "./pages/AskQuestion";
import CreatePost from "./pages/CreatePost";
import ForumThread from "./pages/ForumThread";

/* Mentorship */
import Mentors from "./pages/Mentors";
import MentorSignup from "./pages/MentorSignup";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Colleges />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/college/:id" element={<CollegeDetail />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/exam/:id" element={<ExamDetail />} />
        <Route path="/placements" element={<Placements />} />

        <Route path="/community" element={<Community />} />

        {/* ✅ Forums + Q&A Working */}
        <Route path="/forums" element={<Forums />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/community/post/:id" element={<ForumThread />} />

        <Route path="/resources" element={<Resources />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/career-guide" element={<CareerGuide />} />
        <Route path="/contact" element={<Contact />} />

        {/* Mentorship */}
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/mentor-signup" element={<MentorSignup />} />
      </Routes>
    </BrowserRouter>
  );
}
