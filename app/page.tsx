"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    
    if (isAuthenticated === 'true') {
      // If authenticated, redirect to admin page
      router.push('/admin');
    } else {
      // If not authenticated, redirect to login page
      router.push('/adminLogin');
    }
  }, [router]);

  // Show a loading state while checking authentication
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#0A1628]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#00BFFF] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#9DB4CE]">Loading...</p>
      </div>
    </div>
  );
}
