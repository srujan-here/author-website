import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blogs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-24 space-y-6">
                    <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-[#1E1E24] dark:text-[#FAFAFA] opacity-90" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Chronicles
                    </h1>
                    <p className="text-[#1E1E24]/60 dark:text-[#FAFAFA]/60 text-lg md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed">
                        Reflections on leadership, life, and the quiet moments between the words.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link
                            key={blog.id}
                            to={`/blog/${blog.id}`}
                            className="group block bg-[#1E1E24]/5 dark:bg-[#1a1a1c] border border-[#1E1E24]/5 dark:border-[#FAFAFA]/5 hover:border-[#6B5B33]/20 dark:hover:border-[#BDB28E]/20 transition-all duration-500 p-8 flex flex-col justify-between min-h-[400px] shadow-sm hover:shadow-md"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center text-[10px] tracking-[0.2em] text-[#1E1E24]/40 dark:text-[#FAFAFA]/40 uppercase font-medium">
                                    <Calendar size={12} className="mr-2" />
                                    {blog.date}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-serif leading-tight text-[#1E1E24] dark:text-[#FAFAFA] group-hover:text-[#6B5B33] dark:group-hover:text-[#BDB28E] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {blog.title}
                                </h2>
                                <p className="text-[#1E1E24]/70 dark:text-[#FAFAFA]/70 text-sm leading-relaxed line-clamp-3 font-light">
                                    {blog.excerpt}
                                </p>
                            </div>

                            <div className="mt-12 flex items-center justify-between border-t border-[#1E1E24]/5 dark:border-[#FAFAFA]/5 pt-6">
                                <div className="flex items-center text-xs tracking-[0.15em] font-medium uppercase text-[#1E1E24] dark:text-[#FAFAFA] group-hover:translate-x-2 transition-transform duration-300">
                                    Read Story <ArrowRight size={14} className="ml-2 text-[#6B5B33] dark:text-[#BDB28E]" />
                                </div>
                                <div className="flex items-center text-[10px] tracking-widest text-[#1E1E24]/40 dark:text-[#FAFAFA]/40 uppercase">
                                    <Clock size={12} className="mr-2" />
                                    {blog.readTime}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
