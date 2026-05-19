import React from 'react';
import Logo from '../../Shared/Logo';

const Footer = () => {
    return (
        <footer className="bg-black text-white">

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <Logo />
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Reliable delivery service built for speed, safety and trust.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="hover:text-[#caeb66] cursor-pointer">Services</li>
                            <li className="hover:text-[#caeb66] cursor-pointer">Coverage</li>
                            <li className="hover:text-[#caeb66] cursor-pointer">Pricing</li>
                            <li className="hover:text-[#caeb66] cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    {/* Contact / Social */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Connect</h3>

                        <p className="text-gray-400 text-sm mb-4">
                            support@delivery.com
                        </p>

                        <div className="flex gap-3">

                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#caeb66] hover:text-black transition cursor-pointer">
                                <span>f</span>
                            </div>

                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#caeb66] hover:text-black transition cursor-pointer">
                                <span>in</span>
                            </div>

                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#caeb66] hover:text-black transition cursor-pointer">
                                <span>yt</span>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </div>

            </div>

        </footer>
    );
};

export default Footer;