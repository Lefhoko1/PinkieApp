
import { ArrowRight, BarChart3, BookOpen, Award, Users, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import content from '../content.json';

interface HomePageProps {
  onNavigate: (page: string) => void;
}


export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    { icon: Target, title: content.homepage.features.feature1Title, description: content.homepage.features.feature1Desc, gradient: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: content.homepage.features.feature2Title, description: content.homepage.features.feature2Desc, gradient: 'from-purple-500 to-pink-500' },
    { icon: Award, title: content.homepage.features.feature3Title, description: content.homepage.features.feature3Desc, gradient: 'from-amber-500 to-orange-500' },
    { icon: Users, title: content.homepage.features.feature4Title, description: content.homepage.features.feature4Desc, gradient: 'from-green-500 to-emerald-500' },
  ];
  const stats = [
    { number: content.homepage.stats.studentsEnrolled, label: content.homepage.stats.studentsEnrolledLabel },
    { number: content.homepage.stats.expertCourses, label: content.homepage.stats.expertCoursesLabel },
    { number: content.homepage.stats.successRate, label: content.homepage.stats.successRateLabel },
    { number: content.homepage.stats.supportAvailable, label: content.homepage.stats.supportAvailableLabel },
  ];
  const courses = content.coursesList;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">{content.homepage.hero.badge}</span>
              </div>
              <h1 className="text-gray-900">{content.homepage.hero.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{content.homepage.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('courses')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{content.homepage.hero.exploreCourses}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('signup')}
                  className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  {content.homepage.hero.startFreeTrial}
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="text-gray-900">{content.homepage.hero.joinStudents}</p>
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">{content.homepage.hero.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTY5MDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Data Analytics Dashboard"
                  className="rounded-2xl"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Course Completion</p>
                    <p className="text-gray-900">95% Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200/50 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-600">{content.homepage.features.whyChooseUs}</span>
            </div>
            <h2 className="text-gray-900 mb-4">{content.homepage.features.everythingYouNeed}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.homepage.features.everythingYouNeedDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-gray-900 mb-2">{content.homepage.featuredCourses.title}</h2>
              <p className="text-gray-600">{content.homepage.featuredCourses.subtitle}</p>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="group px-6 py-3 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 flex items-center space-x-2"
            >
              <span>{content.homepage.featuredCourses.viewAll}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Python for Data Analytics',
                image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY1NjA1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                level: 'Beginner',
                duration: '6 weeks',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Data Visualization Mastery',
                image: 'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjU2NTQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                level: 'Intermediate',
                duration: '4 weeks',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Statistical Analysis Fundamentals',
                image: 'https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwbWF0aGVtYXRpY3N8ZW58MXx8fHwxNzY1NzEzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                level: 'Beginner',
                duration: '5 weeks',
                gradient: 'from-amber-500 to-orange-500',
              },
            ].map((course, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-1.5 bg-gradient-to-r ${course.gradient} text-white rounded-full text-xs`}>
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  
                  <h3 className="text-gray-900 mb-4">{course.title}</h3>
                  
                  <button
                    onClick={() => onNavigate('courses')}
                    className="group/btn text-blue-600 hover:text-blue-700 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
            {courses.slice(0, 3).map((course, index) => (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col items-start hover:shadow-lg transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white from-blue-500 to-cyan-500`}>
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-2">{course.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{course.level}</span>
                  <span>&bull;</span>
                  <span>{course.duration}</span>
                </div>
                <button
                  onClick={() => onNavigate('courses')}
                  className="group/btn text-blue-600 hover:text-blue-700 flex items-center space-x-2"
                >
                  <span>{content.homepage.featuredCourses.learnMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
                  </button>
