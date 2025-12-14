import { Play, Lock, CheckCircle, Clock, BarChart, Award, Download, Sparkles, Star, User } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CourseDetailPageProps {
  courseId: string;
  isLoggedIn: boolean;
  onNavigate: (page: string) => void;
}

export function CourseDetailPage({ courseId, isLoggedIn, onNavigate }: CourseDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'resources'>('overview');

  const course = {
    id: courseId,
    title: 'Python for Data Analytics',
    description: 'Master Python programming fundamentals and learn how to use pandas, NumPy, and matplotlib for data analysis. This comprehensive course covers everything from basic syntax to advanced data manipulation techniques.',
    image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY1NjA1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    instructor: 'Dr. Sarah Johnson',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 24,
    students: 1245,
    rating: 4.8,
  };

  const modules = [
    {
      title: 'Introduction to Python',
      lessons: [
        { id: 1, title: 'Getting Started with Python', duration: '15 min', isCompleted: true, isFree: true },
        { id: 2, title: 'Variables and Data Types', duration: '20 min', isCompleted: true, isFree: true },
        { id: 3, title: 'Control Flow and Loops', duration: '25 min', isCompleted: false, isFree: false },
      ],
    },
    {
      title: 'Working with NumPy',
      lessons: [
        { id: 4, title: 'NumPy Arrays Basics', duration: '18 min', isCompleted: false, isFree: false },
        { id: 5, title: 'Array Operations', duration: '22 min', isCompleted: false, isFree: false },
        { id: 6, title: 'Broadcasting and Indexing', duration: '20 min', isCompleted: false, isFree: false },
      ],
    },
    {
      title: 'Data Analysis with Pandas',
      lessons: [
        { id: 7, title: 'Introduction to Pandas', duration: '16 min', isCompleted: false, isFree: false },
        { id: 8, title: 'DataFrames and Series', duration: '24 min', isCompleted: false, isFree: false },
        { id: 9, title: 'Data Cleaning Techniques', duration: '28 min', isCompleted: false, isFree: false },
      ],
    },
    {
      title: 'Data Visualization',
      lessons: [
        { id: 10, title: 'Matplotlib Basics', duration: '19 min', isCompleted: false, isFree: false },
        { id: 11, title: 'Creating Advanced Plots', duration: '26 min', isCompleted: false, isFree: false },
        { id: 12, title: 'Seaborn for Statistical Visualization', duration: '23 min', isCompleted: false, isFree: false },
      ],
    },
  ];

  const resources = [
    { name: 'Python Cheat Sheet.pdf', size: '2.4 MB', type: 'PDF', gradient: 'from-red-500 to-orange-500' },
    { name: 'Sample Datasets.zip', size: '15.8 MB', type: 'ZIP', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Code Examples.py', size: '856 KB', type: 'Python', gradient: 'from-green-500 to-emerald-500' },
    { name: 'Additional Resources.pdf', size: '1.2 MB', type: 'PDF', gradient: 'from-purple-500 to-pink-500' },
  ];

  const handleLessonClick = (lesson: any) => {
    if (lesson.isFree || isLoggedIn) {
      console.log('Playing lesson:', lesson.title);
    } else {
      onNavigate('login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm mb-6 shadow-lg shadow-blue-500/30">
                <Sparkles className="w-4 h-4" />
                <span>{course.level}</span>
              </div>
              
              <h1 className="text-white mb-6">{course.title}</h1>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 text-sm text-blue-200 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BarChart className="w-5 h-5" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Certificate included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                </div>
              </div>
              
              {isLoggedIn ? (
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
                  Continue Learning
                </button>
              ) : (
                <button
                  onClick={() => onNavigate('login')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Login to Enroll
                </button>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-2 mb-8 bg-gray-100 p-1.5 rounded-xl">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'resources', label: 'Resources' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 px-6 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                <h3 className="text-gray-900 mb-6">What You'll Learn</h3>
                <ul className="space-y-4 mb-10">
                  {[
                    'Master Python programming fundamentals',
                    'Work efficiently with NumPy arrays and operations',
                    'Analyze and manipulate data using Pandas',
                    'Create stunning visualizations with Matplotlib and Seaborn',
                    'Apply statistical analysis techniques',
                    'Build real-world data analytics projects',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-gray-900 mb-4">Course Description</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  This comprehensive Python for Data Analytics course is designed for beginners who want to start their journey in data science. You'll learn the essential skills needed to analyze, visualize, and interpret data using Python's most powerful libraries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through hands-on projects and practical exercises, you'll gain real-world experience working with actual datasets. By the end of this course, you'll be able to confidently use Python for your data analytics projects and be prepared to tackle more advanced topics.
                </p>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                {modules.map((module, moduleIndex) => (
                  <div key={moduleIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-5 border-b border-gray-100">
                      <h4 className="text-gray-900">
                        Module {moduleIndex + 1}: {module.title}
                      </h4>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          onClick={() => handleLessonClick(lesson)}
                          className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-all duration-200 ${
                            lesson.isFree || isLoggedIn ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
                          }`}
                        >
                          <div className="flex items-center space-x-4 flex-1">
                            {lesson.isCompleted ? (
                              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                            ) : lesson.isFree || isLoggedIn ? (
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Play className="w-5 h-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Lock className="w-5 h-5 text-gray-400" />
                              </div>
                            )}
                            <div>
                              <p className="text-gray-900">{lesson.title}</p>
                              {lesson.isFree && !isLoggedIn && (
                                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full mt-1 inline-block">Free Preview</span>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 ml-4">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100">
                {isLoggedIn ? (
                  <>
                    <h3 className="text-gray-900 mb-6">Course Resources</h3>
                    <div className="space-y-4">
                      {resources.map((resource, index) => (
                        <div
                          key={index}
                          className="group flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-14 h-14 bg-gradient-to-br ${resource.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Download className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-gray-900">{resource.name}</p>
                              <p className="text-sm text-gray-500 mt-1">
                                {resource.type} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <button className="px-5 py-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-10 h-10 text-gray-400" />
                    </div>
                    <h4 className="text-gray-900 mb-3">Login to Access Resources</h4>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                      Course resources are available to enrolled students only.
                    </p>
                    <button
                      onClick={() => onNavigate('login')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      Login Now
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24 border border-gray-100">
              <h4 className="text-gray-900 mb-6">Instructor</h4>
              <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-gray-900">{course.instructor}</p>
                  <p className="text-sm text-gray-600">Data Science Expert</p>
                </div>
              </div>

              <h4 className="text-gray-900 mb-4">Course Stats</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Students</span>
                  <span className="text-gray-900">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-gray-900">{course.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="text-gray-900">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Level</span>
                  <span className="text-gray-900">{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
