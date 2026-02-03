import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import authorImg from '../assets/vivek_kar.jpeg';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find(b => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!blog) {
            navigate('/blogs');
        }
    }, [blog, navigate]);

    if (!blog) return null;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 transition-colors duration-300">
            <div className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    to="/blogs"
                    className="group inline-flex items-center text-[10px] tracking-[0.2em] text-[#1E1E24]/50 dark:text-[#FAFAFA]/50 uppercase font-medium hover:text-[#6B5B33] dark:hover:text-[#BDB28E] transition-colors mb-12"
                >
                    <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Chronicles
                </Link>

                {/* Header Metadata */}
                <div className="flex items-center space-x-6 text-[10px] tracking-[0.2em] text-[#1E1E24]/40 dark:text-[#FAFAFA]/40 uppercase font-medium mb-8">
                    <div className="flex items-center">
                        <Calendar size={12} className="mr-2 text-[#1E1E24]/20 dark:text-[#FAFAFA]/20" />
                        {blog.date}
                    </div>
                    <div className="flex items-center">
                        <Clock size={12} className="mr-2 text-[#1E1E24]/20 dark:text-[#FAFAFA]/20" />
                        {blog.readTime}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-serif leading-[1.15] text-[#1E1E24] dark:text-[#FAFAFA] opacity-95 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {blog.title}
                </h1>

                {/* Divider */}
                <div className="w-full h-px bg-[#1E1E24]/5 dark:bg-[#FAFAFA]/5 mb-16"></div>

                {/* Intro / Blockquote */}
                <div className="mb-16">
                    <p className="text-xl md:text-2xl font-serif italic text-[#1E1E24]/60 dark:text-[#FAFAFA]/60 leading-relaxed">
                        {blog.intro}
                    </p>
                </div>

                {/* Main Content */}
                <article className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
                    <div className="text-[#1E1E24]/80 dark:text-[#FAFAFA]/80 leading-relaxed space-y-8 font-light text-lg">
                        {blog.content.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                            <p key={index} className="opacity-90">
                                {paragraph.trim().startsWith('-') ? (
                                    <span className="block pl-4 border-l border-[#1E1E24]/10 dark:border-[#FAFAFA]/10 italic">{paragraph.trim()}</span>
                                ) : (
                                    paragraph.trim()
                                )}
                            </p>
                        ))}
                    </div>
                </article>

                {/* Footer Divider */}
                <div className="w-full h-px bg-[#1E1E24]/5 dark:bg-[#FAFAFA]/5 my-24"></div>

                {/* Author Profile */}
                <div className="flex items-center justify-between group">
                    <div className="flex items-center space-x-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#1E1E24]/10 dark:border-[#FAFAFA]/10">
                            <img
                                src={authorImg}
                                alt="Vivek Kar"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm tracking-[0.2em] font-semibold uppercase text-[#1E1E24] dark:text-[#FAFAFA]">
                                Vivek Kar
                            </h3>
                            <p className="text-[10px] tracking-widest text-[#1E1E24]/40 dark:text-[#FAFAFA]/40 uppercase">
                                Author & Leader
                            </p>
                        </div>
                    </div>

                    {/* Like/Dislike placeholders (simplified as per request) */}
                    <div className="flex items-center space-x-4 opacity-30 grayscale pointer-events-none">
                        <div className="px-4 py-2 border border-[#1E1E24]/10 dark:border-[#FAFAFA]/10 text-xs tracking-widest">
                            {/* Simplified as requested */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
