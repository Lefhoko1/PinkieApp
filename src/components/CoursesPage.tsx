import { Search, Clock, BarChart, Star, Lock, Filter, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CoursesPageProps {
  isLoggedIn: boolean;
  onNavigate: (page: string, courseId?: string) => void;
}

export function CoursesPage({ isLoggedIn, onNavigate }: CoursesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', count: 6 },
    { id: 'beginner', name: 'Beginner', count: 3 },
    { id: 'intermediate', name: 'Intermediate', count: 2 },
    { id: 'advanced', name: 'Advanced', count: 1 },
  ];

  const courses = [
    {
      id: '1',
      title: 'Python for Data Analytics',
      description: 'Master Python programming fundamentals and learn how to use pandas, NumPy, and matplotlib for data analysis.',
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY1NjA1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'beginner',
      duration: '6 weeks',
      lessons: 24,
      rating: 4.8,
      students: 1245,
      isPremium: true,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: '2',
      title: 'Data Visualization with Tableau',
      description: 'Create stunning and interactive dashboards that tell compelling data stories using Tableau.',
      image: 'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjU2NTQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'intermediate',
      duration: '4 weeks',
      lessons: 18,
      rating: 4.9,
      students: 892,
      isPremium: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: '3',
      title: 'Statistical Analysis Fundamentals',
      description: 'Learn essential statistical concepts and techniques for analyzing and interpreting data effectively.',
      image: 'https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwbWF0aGVtYXRpY3N8ZW58MXx8fHwxNzY1NzEzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'beginner',
      duration: '5 weeks',
      lessons: 20,
      rating: 4.7,
      students: 1567,
      isPremium: false,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: '4',
      title: 'Business Analytics & Intelligence',
      description: 'Apply analytics to real business problems and learn to make data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjU2MTExMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'intermediate',
      duration: '8 weeks',
      lessons: 32,
      rating: 4.9,
      students: 2103,
      isPremium: true,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: '5',
      title: 'SQL for Data Analysis',
      description: 'Master SQL queries and database management for extracting insights from relational databases.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTY5MDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'beginner',
      duration: '6 weeks',
      lessons: 22,
      rating: 4.8,
      students: 1876,
      isPremium: false,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: '6',
      title: 'Advanced Machine Learning',
      description: 'Dive deep into machine learning algorithms and build predictive models for complex problems.',
      image: 'https://images.unsplash.com/photo-1758612214882-03f8a1d7211f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTYxNTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      level: 'advanced',
      duration: '10 weeks',
      lessons: 40,
      rating: 4.9,
      students: 654,
      isPremium: true,
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.level === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCourseClick = (course: typeof courses[0]) => {
    if (course.isPremium && !isLoggedIn) {
      onNavigate('login');
    } else {
      onNavigate('course-detail', course.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white">50+ Expert Courses</span>
            </div>
            
            <h1 className="text-white mb-6">Explore Our Courses</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Comprehensive data analytics courses designed to help you master essential skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button className="px-6 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 flex items-center space-x-2 border border-gray-200">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700">Filters</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl transition-all duration-200 border ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                }`}
              >
                {category.name} <span className="opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {course.isPremium && !isLoggedIn && (
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-xs flex items-center space-x-2 shadow-lg">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Login Required</span>
                  </div>
                )}
                
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.gradient} text-white px-4 py-1.5 rounded-full text-xs capitalize shadow-lg`}>
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 pb-5 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChart className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm text-gray-900">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students.toLocaleString()})</span>
                  </div>
                  <span className="text-blue-600 group-hover:text-purple-600 text-sm transition-colors">
                    {course.isPremium && !isLoggedIn ? 'Login to Access →' : 'View Course →'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
}
