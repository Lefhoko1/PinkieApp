import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CoursesPage } from './components/CoursesPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { DashboardPage } from './components/DashboardPage';
import { CourseDetailPage } from './components/CourseDetailPage';

type PageType = 'home' | 'courses' | 'blog' | 'contact' | 'login' | 'signup' | 'dashboard' | 'course-detail' | 'blog-post';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [selectedBlogId, setSelectedBlogId] = useState<string>('');

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page as PageType);
    if (page === 'course-detail' && id) {
      setSelectedCourseId(id);
    }
    if (page === 'blog-post' && id) {
      setSelectedBlogId(id);
    }
    window.scrollTo(0, 0);
  };

  const handleLogin = (email: string, password: string) => {
    // In a real app, this would validate against a backend
    setIsLoggedIn(true);
    setUserName(email.split('@')[0]);
    setCurrentPage('dashboard');
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // In a real app, this would create an account in the backend
    setIsLoggedIn(true);
    setUserName(name);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'courses':
        return <CoursesPage isLoggedIn={isLoggedIn} onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupPage onSignup={handleSignup} onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardPage userName={userName} onNavigate={handleNavigate} />;
      case 'course-detail':
        return <CourseDetailPage courseId={selectedCourseId} isLoggedIn={isLoggedIn} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
