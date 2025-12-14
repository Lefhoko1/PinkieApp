import { Calendar, User, Clock, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string, blogId?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const blogPosts = [
    {
      id: '1',
      title: '10 Essential Python Libraries for Data Analysis',
      excerpt: 'Discover the most powerful Python libraries that every data analyst should know, from pandas to seaborn.',
      image: 'https://images.unsplash.com/photo-1667372531881-6f975b1c86db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzY1NjA1OTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Sarah Johnson',
      date: 'December 10, 2025',
      readTime: '8 min',
      category: 'Python',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: '2',
      title: 'Data Visualization Best Practices for 2025',
      excerpt: 'Learn how to create compelling visualizations that effectively communicate insights to stakeholders.',
      image: 'https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0c3xlbnwxfHx8fDE3NjU2NTQ3MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Michael Chen',
      date: 'December 8, 2025',
      readTime: '6 min',
      category: 'Visualization',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: '3',
      title: 'Getting Started with Statistical Analysis',
      excerpt: 'A beginner-friendly guide to understanding statistical concepts and applying them to real-world data.',
      image: 'https://images.unsplash.com/photo-1743183988574-e8b4d2e5830a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwbWF0aGVtYXRpY3N8ZW58MXx8fHwxNzY1NzEzNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emily Davis',
      date: 'December 5, 2025',
      readTime: '10 min',
      category: 'Statistics',
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: '4',
      title: 'How to Build Your First Data Analytics Dashboard',
      excerpt: 'Step-by-step tutorial on creating interactive dashboards that drive business decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NTY5MDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'David Martinez',
      date: 'December 3, 2025',
      readTime: '12 min',
      category: 'Dashboards',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: '5',
      title: 'Machine Learning vs Traditional Analytics: When to Use Each',
      excerpt: 'Understanding the differences and knowing when to apply machine learning techniques.',
      image: 'https://images.unsplash.com/photo-1758612214882-03f8a1d7211f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NTYxNTg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Lisa Wang',
      date: 'December 1, 2025',
      readTime: '15 min',
      category: 'Machine Learning',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: '6',
      title: 'SQL Query Optimization Techniques',
      excerpt: 'Master advanced SQL techniques to improve query performance and database efficiency.',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjU2MTExMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'James Brown',
      date: 'November 28, 2025',
      readTime: '9 min',
      category: 'SQL',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white">Latest Insights & Tutorials</span>
            </div>
            
            <h1 className="text-white mb-6">Our Blog</h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Insights, tutorials, and best practices from data analytics experts.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <div
          onClick={() => onNavigate('blog-post', featuredPost.id)}
          className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl mb-16 cursor-pointer transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative overflow-hidden h-80 lg:h-auto">
              <ImageWithFallback
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
            </div>
            
            <div className="p-10 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${featuredPost.gradient} text-white rounded-full text-sm shadow-lg`}>
                  <Tag className="w-3.5 h-3.5" />
                  <span>Featured Post</span>
                </div>
              </div>
              
              <h2 className="text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime} read</span>
                </div>
              </div>
              
              <button className="group/btn text-blue-600 hover:text-purple-600 flex items-center space-x-2 transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate('blog-post', post.id)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white px-4 py-1.5 rounded-full text-xs shadow-lg`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex flex-col gap-3 text-xs text-gray-500 mb-5 pb-5 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <button className="group/btn text-blue-600 hover:text-purple-600 text-sm flex items-center space-x-2 transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
