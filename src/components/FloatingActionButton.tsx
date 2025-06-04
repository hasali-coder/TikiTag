
import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FloatingActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-warm hover:shadow-lg transform hover:scale-110 transition-all duration-200 z-40"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
};

export default FloatingActionButton;
