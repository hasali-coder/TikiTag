
import { Camera } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-soft border-b border-warm-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <Camera className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TikiTag</h1>
              <p className="text-sm text-tiki-gray">Share memories together</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
