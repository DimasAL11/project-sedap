import React, { useState } from "react";
import frameworkData from "./framework.json";

// Komponen Card untuk kebersihan struktur
const FrameworkCard = ({ item }) => (
  <div className="group relative">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
    <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner">
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300">
                {item.name.charAt(0)}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.name}
              </h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                EST. {item.details.releaseYear}
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag, index) => (
            <span key={index} className="text-[10px] px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-4">
          Developed by <span className="text-slate-300 font-semibold">{item.details.developer}</span>
        </div>
        <a
          href={item.details.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-900/20"
        >
          Visit Web 
          <svg className="w-3.5 h-3.5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);
    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Framework<span className="text-blue-500">Hub</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto italic">
            "Temukan alat yang tepat untuk membangun masa depan digital Anda."
          </p>
        </header>

        {/* Search & Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 bg-slate-900/50 p-4 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-md">
          <div className="md:col-span-2 relative">
            <input
              type="text"
              placeholder="Cari framework (misal: React, Fast...)"
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 pl-11 pr-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-5 h-5 text-slate-500 absolute left-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-all text-sm cursor-pointer"
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">Semua Kategori</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag}>{tag}</option>
              ))}
            </select>
            <div className="absolute right-4 top-4 pointer-events-none">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Menampilkan {filteredFrameworks.length} hasil
          </p>
        </div>

        {/* Framework Grid */}
        {filteredFrameworks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((item) => (
              <FrameworkCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-900/20 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500">Tidak ada framework yang cocok dengan pencarian Anda.</p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase">
            &copy; 2026 DevStack Explorer • Powered by Tailwind CSS
          </p>
        </footer>

      </div>
    </div>
  );
}