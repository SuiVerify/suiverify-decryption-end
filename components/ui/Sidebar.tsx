"use client";

import { useRouter, usePathname } from "next/navigation";
import { LogOut, LayoutDashboard, FileKey } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/head_logo.png";
import { Button } from "@/components/ui/button";
import { ConnectButton } from "@mysten/dapp-kit";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("adminUsername");
    router.push("/adminLogin");
  };

  const navItems = [
    {
      name: "Overview",
      path: "/admin/overview",
      icon: LayoutDashboard,
    },
    {
      name: "Decrypt Documents",
      path: "/admin",
      icon: FileKey,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname === path;
  };

  return (
    <div className="flex flex-col h-screen bg-primary text-white w-64 border-r border-primary-dark">
      {/* Logo */}
      <div className="p-6 border-b border-primary-dark">
        <Image src={Logo} alt="SuiVerify" className="w-16 h-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium",
                active
                  ? "bg-white text-primary shadow-lg"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Connect Wallet */}
      <div className="p-4 border-t border-primary-dark w-full">
        <div className="w-full [&>*]:w-full">
          <ConnectButton
            connectText="Connect Wallet"
            className="w-full [&>*]:w-full [&>button]:w-full [&>div]:w-full [&>div>button]:w-full [&>button]:bg-white [&>button]:text-primary [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-lg [&>button]:hover:bg-white/90 [&>button]:transition-colors [&>button]:font-medium [&>button]:border-[3px] [&>button]:border-white [&>button]:shadow-[0.1em_0.1em_0_0_rgb(0_0_0)] [&>button]:block"
          />
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-primary-dark">
        <Button
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="w-full bg-error-red text-white border-error-red hover:bg-error-red/90"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
