import Link from 'next/link';
import { Button, Card, SectionHeader } from '@vidacyber/ui';

export default function Page() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-transparent">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase animate-fade-in">
                        Future of Cybersecurity
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-slide-up">
                        <span className="text-white">Secure Your</span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Digital Universe</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Expert insights, real-time protection strategies, and comprehensive education for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <button className="px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-primary to-accent text-white shadow-neon hover:shadow-neon-hover hover:-translate-y-1 transition-all duration-300">
                            Get Started Now
                        </button>
                        <button className="px-8 py-3 rounded-lg font-bold bg-white/5 backdrop-blur border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Insights */}
            <section className="container mx-auto px-4">
                <SectionHeader title="Featured Insights" subtitle="Stay ahead with the latest trends and analysis in the cyber world." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Ransomware Evolution', content: 'Understanding the shift from encryption to data extortion tactics in 2025.' },
                        { title: 'AI in Defense', content: 'How machine learning models are predicting threats before they strike.' },
                        { title: 'Cloud Security', content: 'Best practices for securing hybrid cloud infrastructures.' }
                    ].map((item, idx) => (
                        <Card key={idx} title={item.title}>
                            {item.content}
                            <div className="mt-4">
                                <span className="text-primary text-sm font-semibold cursor-pointer hover:underline">Read full article &rarr;</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Trusted By */}
            <section className="w-full py-10 bg-white/5 border-y border-white/5 backdrop-blur-sm">
                <div className="container mx-auto text-center">
                    <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Trusted by Industry Leaders</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for logos */}
                        <div className="text-2xl font-bold font-mono text-white">TECH_CORP</div>
                        <div className="text-2xl font-bold font-mono text-white">SECURE_NET</div>
                        <div className="text-2xl font-bold font-mono text-white">GLOBAL_DATA</div>
                        <div className="text-2xl font-bold font-mono text-white">CYBER_DYNE</div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="container mx-auto px-4">
                <SectionHeader title="Why Choose Us" subtitle="We deliver precision, speed, and reliability." />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: '🛡️', title: 'Elite Protection', desc: 'State-of-the-art protocols to keep your data safe.' },
                        { icon: '⚡', title: 'Real-time Analysis', desc: 'Instant insights derived from global threat feeds.' },
                        { icon: '🎓', title: 'Expert Education', desc: 'Curriculum designed by top industry professionals.' }
                    ].map((feature, idx) => (
                        <div key={idx} className="p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all duration-300 hover:border-primary/50 group">
                            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-slate-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
