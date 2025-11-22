"use client";

import { ConnectButton } from "@mysten/dapp-kit";
import { useRouter, usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/head_logo.png";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    const isAdminRoute = pathname.startsWith('/admin');
    
    const handleLogout = () => {
        localStorage.removeItem('adminAuthenticated');
        localStorage.removeItem('adminUsername');
        router.push('/adminLogin');
    };
    return (
        <div className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-primary/20">
            {/* Navigation Bar */}
            <nav className="px-4 sm:px-6 py-3 sm:py-4 relative z-50">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Image src={Logo} alt="SuiVerify" className="w-12 sm:w-14 h-auto" />
                    </div>

                    {/* Right Side - Balance and Connect Wallet */}
                    <div className="flex items-center space-x-4 relative z-50">
                        {/* Logout Button - Only show on admin routes */}
                        {isAdminRoute && (
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                size="sm"
                                className="bg-error-red text-white border-error-red hover:bg-error-red/90"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                Logout
                            </Button>
                        )}

                        <ConnectButton
                            connectText="Connect Wallet"
                            className="[&>button]:bg-primary [&>button]:text-white [&>button]:px-6 [&>button]:py-2 [&>button]:rounded-lg [&>button]:hover:bg-primary-dark [&>button]:transition-colors [&>button]:font-medium [&>button]:border-[3px] [&>button]:border-primary [&>button]:shadow-[0.1em_0.1em_0_0_rgb(0_0_0)]"
                        />

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2">
                            <svg className="w-6 h-6 text-charcoal-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default DashboardHeader