import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-5 flex item-cinter justify-between ">
      <div className="flex items-center sm:gap-6 lg:px-8">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">
            Blog <span className="text-blue-500">Marshal</span>
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">Home</Link>
            <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/dashboard">Dashboard</Link> 
        </div>
      </div> 
      <div className="flex items-center gap-4"> 
        <Button>LogIn</Button>
        <Button variant="secondary">SignUp</Button> 
      </div> 
    </nav> 
  );
}; 