"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiX, FiSettings } from "react-icons/fi";

const KeyboardShortcuts = () => {
  const router = useRouter();
  const [showHelp, setShowHelp] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger if not typing in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Check for modifier keys (Ctrl, Alt, etc.)
      if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      switch (event.key.toLowerCase()) {
        case "h":
          event.preventDefault();
          console.log("Navigating to Home");
          router.push("/");
          break;
        case "c":
          event.preventDefault();
          console.log("Navigating to Community");
          router.push("/community");
          break;
        case "e":
          event.preventDefault();
          console.log("Navigating to Events");
          router.push("/events");
          break;
        case "m":
          event.preventDefault();
          console.log("Navigating to Meetup");
          router.push("/meetup");
          break;
        case "?":
          event.preventDefault();
          console.log("Toggling help");
          setShowHelp(!showHelp);
          break;
        case "escape":
          setShowHelp(false);
          break;
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [router, showHelp]);

  return (
    <>
      {/* Keyboard Shortcuts Indicator */}
      {showIndicator && (
        <div className="fixed bottom-4 right-4 z-[9998] bg-gradient-to-r from-orange-600 to-orange-700 text-white px-3 py-2 rounded-lg shadow-lg items-center gap-2 text-sm hidden md:flex">
          <FiSettings className="h-4 w-4" />
          <span>Press ? for shortcuts</span>
          <button
            onClick={() => setShowIndicator(false)}
            className="ml-2 text-white/70 hover:text-white"
          >
            <FiX className="h-3 w-3" />
          </button>
        </div>
      )}
      
      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm hidden md:flex items-center justify-center p-4">
          <div className="bg-neutral-900 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowHelp(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="h-5 w-5" />
            </button>
            
            <h2 className="text-xl font-bold mb-4 text-white">
              Keyboard Shortcuts
            </h2>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Home</span>
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono text-white">H</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Community</span>
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono text-white">C</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Events</span>
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono text-white">E</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Meetup</span>
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono text-white">M</kbd>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Show/Hide Help</span>
                <kbd className="px-2 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono text-white">?</kbd>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Press <kbd className="px-1 py-0.5 bg-white/10 border border-white/20 rounded text-xs text-white">ESC</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyboardShortcuts; 