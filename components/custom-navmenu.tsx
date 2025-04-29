"use client"

import * as React from "react"
import Link from "next/link"
import { ExternalLink, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function CustomNavMenu() {
  // State to track which dropdown is open
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  
  // Function to toggle dropdown visibility
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent click events inside dropdowns from closing them
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <nav className="relative z-10">
      <ul className="flex items-center">
        {/* IT Process & Business Certifications */}
        <li className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('it-process');
            }} 
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors",
              activeDropdown === 'it-process' ? "bg-gray-800 text-cyan-400" : ""
            )}
          >
            IT Process & Business Certifications
            <ChevronDown 
              className={cn(
                "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
                activeDropdown === 'it-process' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {activeDropdown === 'it-process' && (
            <div 
              className="absolute left-0 top-full mt-1 w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
              onClick={handleDropdownClick}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">IT Process & Business Certifications</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Master IT governance, project management, and digital transformation with our expert-led programs.
                </p>
                <ul className="grid gap-3">
                  <CustomListItem title="IT Service Management & Governance" href="/it-process-business/it-service" />
                  <CustomListItem title="Project & Program Management" href="/it-process-business/project-program" />
                  <CustomListItem title="Quality & Process Improvement" href="/it-process-business/quality-process" />
                  <CustomListItem title="Risk & Security Management" href="/it-process-business/risk-security" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/it-process-business"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Tech & Finance Academy */}
        <li className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('tech-finance');
            }} 
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors",
              activeDropdown === 'tech-finance' ? "bg-gray-800 text-cyan-400" : ""
            )}
          >
            Tech & Finance Academy
            <ChevronDown 
              className={cn(
                "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
                activeDropdown === 'tech-finance' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {activeDropdown === 'tech-finance' && (
            <div 
              className="absolute left-0 top-full mt-1 w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
              onClick={handleDropdownClick}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Tech & Finance Academy</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Master in-demand tech and finance skills to launch or advance your career in these high-growth fields.
                </p>
                <ul className="grid gap-3">
                  <CustomListItem title="IT & Development" href="/tech-finance/it-dev" />
                  <CustomListItem title="Finance & Analytics" href="/tech-finance" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/tech-finance"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Human Capital & HR Trainings */}
        <li className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('human-capital');
            }} 
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors",
              activeDropdown === 'human-capital' ? "bg-gray-800 text-cyan-400" : ""
            )}
          >
            Human Capital & HR Trainings
            <ChevronDown 
              className={cn(
                "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
                activeDropdown === 'human-capital' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {activeDropdown === 'human-capital' && (
            <div 
              className="absolute left-0 top-full mt-1 w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
              onClick={handleDropdownClick}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Human Capital & HR Trainings</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Develop critical HR expertise and leadership capabilities for organizational success.
                </p>
                <ul className="grid gap-3">
                  <CustomListItem title="Behavioral Training" href="/human-capital/behavioral" />
                  <CustomListItem title="HR Professional Development" href="/human-capital/hr-professional" />
                  <CustomListItem title="Leadership Development" href="/human-capital/leadership-dev" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/human-capital"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Career Development Packages */}
        <li className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('career-dev');
            }} 
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors",
              activeDropdown === 'career-dev' ? "bg-gray-800 text-cyan-400" : ""
            )}
          >
            Career Development Packages
            <ChevronDown 
              className={cn(
                "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
                activeDropdown === 'career-dev' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {activeDropdown === 'career-dev' && (
            <div 
              className="absolute left-0 top-full mt-1 w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
              onClick={handleDropdownClick}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">Career Development Packages</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Tailored programs for every career stage - from students to executives.
                </p>
                <ul className="grid gap-3">
                  <CustomListItem title="Graduate Launch Package" href="/career-development" />
                  <CustomListItem title="Career Accelerator Package" href="/career-development" />
                  <CustomListItem title="Executive Growth Package" href="/career-development" />
                  <CustomListItem title="Career Transition Package" href="/career-development" />
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/career-development"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center"
                  >
                    Know More
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* About Us */}
        <li className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleDropdown('about-us');
            }} 
            className={cn(
              "flex items-center h-10 px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-colors",
              activeDropdown === 'about-us' ? "bg-gray-800 text-cyan-400" : ""
            )}
          >
            About Us
            <ChevronDown 
              className={cn(
                "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
                activeDropdown === 'about-us' ? "rotate-180" : ""
              )}
            />
          </button>
          
          {activeDropdown === 'about-us' && (
            <div 
              className="absolute left-0 top-full mt-1 w-[400px] p-4 bg-gray-950/80 backdrop-blur-md border border-gray-800 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-200"
              onClick={handleDropdownClick}
            >
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-3">About Us</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Learn more about The Neo Veda Academy and our mission to transform professional education.
                </p>
                <ul className="grid gap-3">
                  <CustomListItem title="Mission" href="#mission" />
                  <CustomListItem title="Vision" href="#vision" />
                  <CustomListItem title="Our Approach" href="#approach" />
                  <CustomListItem title="Our Team" href="#team" />
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}

interface CustomListItemProps {
  title: string;
  href: string;
}

const CustomListItem: React.FC<CustomListItemProps> = ({ title, href }) => {
  return (
    <li>
      <Link
        href={href}
        className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-cyan-400"
      >
        <div className="text-sm font-medium leading-none text-gray-100">{title}</div>
      </Link>
    </li>
  )
}