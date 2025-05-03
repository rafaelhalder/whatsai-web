// src/Components/Layout/UserMenu.jsx
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, UserRound, LogIn, UserPlus, LogOut, Settings } from 'lucide-react';
import toast from 'react-hot-toast';
import { userAuthStore } from '../features/auth/store/authStore';

function UserMenu() {
    const user = userAuthStore((state) => state.user);
    const token = userAuthStore((state) => state.token);
    const logout = userAuthStore((state) => state.logout);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    
    // Close menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
              setIsMenuOpen(false);
          }
      };

      if (isMenuOpen) {
          document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [isMenuOpen]);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const handleLogout = async () => {
        logout();
        toast.success("Logout realizado com sucesso!");
        setIsMenuOpen(false);
    };
    
    return (
      <div className="relative" ref={menuRef}>
          <button 
              className="flex flex-row items-center justify-center p-4 shadow-lg rounded-full border transition-colors duration-300 bg-white/20 border-gray-300 hover:border-black"
              onClick={toggleMenu}
              aria-label="User menu"
              aria-expanded={isMenuOpen}
          >
              <div>
                  <Menu className="text-black mr-1.5" />
              </div>
              <div>
                  <UserRound className="text-black" />
              </div>
          </button>

          {isMenuOpen && (
              <div 
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 bg-white text-black"
              >
                  {!token ? (
                      <>
                          <Link
                              to="/login"
                              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              <LogIn className="mr-2 h-4 w-4" />
                              Login
                          </Link>
                          <Link 
                              to="/register"
                              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              <UserPlus className="mr-2 h-4 w-4" />
                              Sign Up
                          </Link>
                      </>
                  ) : (
                      <>
                          <div className="px-4 py-2 text-sm font-medium border-b border-gray-200">
                              {user?.name || "User"}
                          </div>
                          <Link 
                              to="/profile"
                              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              <UserRound className="mr-2 h-4 w-4" />
                              Profile
                          </Link>
                          <Link 
                              to="/settings"
                              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
                              onClick={() => setIsMenuOpen(false)}
                          >
                              <Settings className="mr-2 h-4 w-4" />
                              Settings
                          </Link>
                          <div className="my-1 border-t border-gray-200"></div>
                          <button 
                              className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                              onClick={handleLogout}
                          >
                              <LogOut className="mr-2 h-4 w-4" />
                              Logout
                          </button>
                      </>
                  )}
              </div>
          )}
      </div>
  );
}

export default UserMenu;