import { BookOpen, Award, Clock, TrendingUp, Sparkles, Play, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DashboardPageProps {
  userName: string;
  onNavigate: (page: string, courseId?: string) => void;
}

export function DashboardPage({ userName, onNavigate }: DashboardPageProps) {
  const enrolledCourses = [
    {
      id: '1',
      title: 'Python for Data Analytics',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY1NjA1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      lastAccessed: '2 hours ago',
      nextLesson: 'Working with Pandas DataFrames',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: '2',
      title: 'Data Visualization with Tableau',
      progress: 30,
      image: 'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjU2NTQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      lastAccessed: '1 day ago',
      nextLesson: 'Creating Interactive Charts',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const stats = [
    {
      icon: BookOpen,
      label: 'Courses Enrolled',
      value: '3',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Award,
      label: 'Certificates Earned',
      value: '1',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Clock,
      label: 'Hours Learned',
      value: '47',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
    },
    {
      icon: TrendingUp,
      label: 'Avg. Progress',
      value: '48%',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
    },
  ];

  const recentActivity = [
    {
      action: 'Completed',
      item: 'Introduction to NumPy',
      course: 'Python for Data Analytics',
      time: '2 hours ago',
      type: 'success',
    },
    {
      action: 'Started',
      item: 'Working with Pandas',
      course: 'Python for Data Analytics',
      time: '3 hours ago',
      type: 'info',
    },
    {
      action: 'Earned Certificate',
      item: 'SQL Fundamentals',
      course: 'SQL for Data Analysis',
      time: '2 days ago',
      type: 'achievement',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-blue-200 text-sm">Welcome back,</p>
              <h1 className="text-white">{userName}!</h1>
            </div>
          </div>
          <p className="text-xl text-blue-200 leading-relaxed max-w-2xl">
            Continue your learning journey and achieve your goals.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}} />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
          {/* Continue Learning */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900">Continue Learning</h2>
              <button
                onClick={() => onNavigate('courses')}
                className="text-blue-600 hover:text-purple-600 text-sm flex items-center space-x-2 transition-colors"
              >
                <span>Browse All</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => onNavigate('course-detail', course.id)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-56 h-44 md:h-auto overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h3 className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Next: {course.nextLesson}</span>
                    </p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className={`text-sm bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`}>
                          {course.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 rounded-full bg-gradient-to-r ${course.gradient} transition-all duration-500`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Last accessed {course.lastAccessed}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-gray-900 mb-6">Recent Activity</h3>
              <div className="space-y-5">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'achievement' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className={`${
                          activity.type === 'success' ? 'text-green-600' :
                          activity.type === 'achievement' ? 'text-amber-600' :
                          'text-blue-600'
                        }`}>
                          {activity.action}
                        </span>{' '}
                        {activity.item}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{activity.course}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('courses')}
                  className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 text-gray-700 border border-gray-100 hover:border-blue-200"
                >
                  Browse Courses
                </button>
                <button
                  onClick={() => onNavigate('blog')}
                  className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 text-gray-700 border border-gray-100 hover:border-blue-200"
                >
                  Read Blog Posts
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 rounded-xl transition-all duration-200 text-gray-700 border border-gray-100 hover:border-blue-200"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
