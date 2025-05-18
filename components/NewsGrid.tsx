// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import Link from "next/link";
// import { FaSearch, FaFilter, FaSync } from "react-icons/fa";

// interface NewsItem {
//   title: string;
//   description: string;
//   url: string;
//   source: {
//     name: string;
//   };
//   publishedAt: string;
// }

// export default function NewsGrid() {
//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedSource, setSelectedSource] = useState<string>("all");
//   const [sources, setSources] = useState<string[]>([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);
//   const [techOnly, setTechOnly] = useState(true);

//   const fetchNews = useCallback(async () => {
//     try {
//       const response = await fetch(`/api/news?techOnly=${techOnly}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch news');
//       }
//       const data = await response.json();
//       setNews(data.articles);
      
//       // Extract unique sources
//       const uniqueSources = Array.from(new Set(data.articles.map((item: NewsItem) => item.source.name))) as string[];
//       setSources(uniqueSources);
//     } catch (err) {
//       setError('Failed to load news. Please try again later.');
//     } finally {
//       setLoading(false);
//       setIsRefreshing(false);
//     }
//   }, [techOnly]);

//   useEffect(() => {
//     fetchNews();
//   }, [fetchNews, techOnly]);

//   const handleRefresh = () => {
//     setIsRefreshing(true);
//     fetchNews();
//   };

//   const filteredNews = news.filter(item => {
//     const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesSource = selectedSource === "all" || item.source.name === selectedSource;
//     return matchesSearch && matchesSource;
//   });

//   if (loading && !isRefreshing) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, i) => (
//           <div key={i} className="bg-black/50 border border-white/[0.1] rounded-xl overflow-hidden animate-pulse p-6">
//             <div className="h-4 bg-gray-800 rounded w-1/4 mb-4" />
//             <div className="h-6 bg-gray-800 rounded w-3/4 mb-2" />
//             <div className="h-4 bg-gray-800 rounded w-full" />
//           </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-white/70">
//         <p>{error}</p>
//         <button 
//           onClick={handleRefresh}
//           className="mt-4 px-4 py-2 bg-violet-500/20 text-violet-400 rounded-lg hover:bg-violet-500/30 transition-colors"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//         <div className="relative w-full md:w-64">
//           <input
//             type="text"
//             placeholder="Search news..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-black/50 border border-white/[0.1] rounded-lg px-4 py-2 pl-10 text-white placeholder-white/50 focus:outline-none focus:border-violet-500/50"
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
//         </div>
        
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <select
//               value={selectedSource}
//               onChange={(e) => setSelectedSource(e.target.value)}
//               className="bg-black/50 border border-white/[0.1] rounded-lg px-4 py-2 pr-8 text-white appearance-none focus:outline-none focus:border-violet-500/50"
//             >
//               <option value="all">All Sources</option>
//               {sources.map((source) => (
//                 <option key={source} value={source}>{source}</option>
//               ))}
//             </select>
//             <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none" />
//           </div>
          
//           <div className="flex items-center gap-2">
//             <label className="text-sm text-white/70">Tech Only</label>
//             <input
//               type="checkbox"
//               checked={techOnly}
//               onChange={(e) => setTechOnly(e.target.checked)}
//               className="w-4 h-4 rounded border-white/[0.1] bg-black/50 text-violet-500 focus:ring-violet-500"
//             />
//           </div>
          
//           <button
//             onClick={handleRefresh}
//             disabled={isRefreshing}
//             className={`p-2 rounded-lg bg-black/50 border border-white/[0.1] hover:border-violet-500/50 transition-colors ${isRefreshing ? 'animate-spin' : ''}`}
//           >
//             <FaSync className="text-white/70" />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredNews.map((item, index) => (
//           <Link 
//             href={item.url} 
//             key={index}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group"
//           >
//             <div className="bg-black/50 border border-white/[0.1] rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-300 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="text-sm text-violet-400">{item.source.name}</span>
//                 <span className="text-sm text-white/60">
//                   {new Date(item.publishedAt).toLocaleDateString()}
//                 </span>
//               </div>
//               <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-white/70 line-clamp-3">
//                 {item.description}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="mt-8 text-center text-sm text-white/50">
//         <p>Disclaimer: TechThrusters is not responsible for the content of external news sources. The views and opinions expressed in these articles are those of the authors and do not necessarily reflect the official policy or position of TechThrusters.</p>
//       </div>
//     </div>
//   );
// } 