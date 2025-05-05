"use client";

import { useState, useEffect } from "react";
import { blockCategories } from "@/lib/sampleData";

export default function BlockSidebar({ onDragStart }) {
  const [categories, setCategories] = useState(Object.keys(blockCategories));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    setCategories(Object.keys(blockCategories));
    setActiveCategory(Object.keys(blockCategories)[0]);
  }, []);

  const handleDragStart = (e, block) => {
    e.dataTransfer.setData("application/json", JSON.stringify(block));
  };

  // Map category to icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'notes':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        );
      case 'rhythm':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="18" r="3"></circle>
            <path d="M6 18V4"></path>
            <path d="M18 18V9"></path>
          </svg>
        );
      case 'control':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <path d="M22 7H2"></path>
            <path d="M7 12h10"></path>
            <path d="m7 17 10-10"></path>
          </svg>
        );
      case 'threads':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16a4 4 0 0 1 0-8"></path>
            <path d="M19 10a7 7 0 0 0-13-3"></path>
            <path d="M5 14a7 7 0 0 0 13 3"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20"></path>
            <path d="M2 12h20"></path>
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Sidebar header */}
      <div className="bg-[#2196f3] text-white p-4 flex items-center">
        <h2 className="text-lg font-bold">Blocks</h2>
      </div>
      
      {/* Category tabs */}
      <div className="flex overflow-x-auto bg-[#bbdefb] p-1">
        {categories.map(category => (
          <button
            key={category}
            className={`px-3 py-2 rounded-t text-sm font-medium flex items-center gap-1 ${
              activeCategory === category
                ? "bg-white text-[#2196f3]"
                : "bg-[#bbdefb] text-[#1976d2] hover:bg-[#90caf9]"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {getCategoryIcon(category)}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Blocks */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-white">
        {activeCategory && blockCategories[activeCategory]?.map(block => {
          const colorClass = block.color || getBlockColorClass(block.type);
          
          return (
            <div
              key={block.id}
              className={`${colorClass} p-3 rounded-md cursor-move shadow-sm hover:shadow-md transition-shadow`}
              draggable
              onDragStart={(e) => handleDragStart(e, block)}
            >
              <div className="font-medium text-white">{block.name}</div>
              <div className="text-xs text-white/80">{block.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Helper function to get color based on block type
function getBlockColorClass(type) {
  switch (type) {
    case 'note':
      return 'bg-[#ff9800]'; // Orange
    case 'rest':
      return 'bg-[#9c27b0]'; // Purple
    case 'tempo':
      return 'bg-[#9c27b0]'; // Purple
    case 'instrument':
      return 'bg-[#00bcd4]'; // Cyan
    case 'repeat':
    case 'forever':
      return 'bg-[#ff5722]'; // Deep Orange
    case 'thread-def':
    case 'start-thread':
      return 'bg-[#2196f3]'; // Blue
    case 'wait':
    case 'sync':
      return 'bg-[#ffc107]'; // Amber
    default:
      return 'bg-[#4caf50]'; // Green
  }
}
