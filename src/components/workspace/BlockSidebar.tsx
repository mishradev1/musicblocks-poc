"use client";

import { useState, useEffect } from "react";
import { blockCategories } from "@/lib/sampleData";

export default function BlockSidebar() {
  const [categories, setCategories] = useState(Object.keys(blockCategories));
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    setCategories(Object.keys(blockCategories));
    setActiveCategory(Object.keys(blockCategories)[0]);
  }, []);

  const handleDragStart = (e, block) => {
    e.dataTransfer.setData("application/json", JSON.stringify(block));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Blocks</h2>
      
      <div className="space-y-4">
        <div className="flex gap-1">
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 py-1 rounded text-sm ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="space-y-2">
          {activeCategory && blockCategories[activeCategory]?.map(block => (
            <div
              key={block.id}
              className="bg-gray-800 p-3 rounded cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, block)}
            >
              <div className="font-medium">{block.name}</div>
              <div className="text-xs text-gray-400">{block.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
