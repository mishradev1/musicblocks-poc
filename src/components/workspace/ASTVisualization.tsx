"use client";

export default function ASTVisualization({ ast, activeNodes = [] }) {
  // Get color based on node type
  const getNodeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'note':
        return 'bg-[#ff9800]'; // Orange
      case 'program':
        return 'bg-[#4caf50]'; // Green
      case 'threaddefinition':
        return 'bg-[#2196f3]'; // Blue
      case 'startthread':
        return 'bg-[#2196f3]'; // Blue
      case 'repeat':
        return 'bg-[#ff5722]'; // Deep Orange
      case 'wait':
        return 'bg-[#ffc107]'; // Amber
      case 'tempo':
        return 'bg-[#9c27b0]'; // Purple
      case 'rest':
        return 'bg-[#9c27b0]'; // Purple
      default:
        return 'bg-[#607d8b]'; // Blue Grey
    }
  };
  
  const renderNode = (node, depth = 0) => {
    const isActive = activeNodes.includes(node.id);
    const nodeColor = getNodeColor(node.type);
    
    return (
      <div key={node.id} style={{ marginLeft: `${depth * 20}px` }}>
        <div 
          className={`my-1 p-2 rounded shadow-sm ${
            isActive 
              ? `${nodeColor} text-white ring-2 ring-offset-2 ring-[#2196f3]` 
              : `${nodeColor} text-white`
          }`}
        >
          <div className="font-medium">{node.type}: {node.name || node.value}</div>
          <div className="text-xs text-white/80 flex flex-wrap gap-2">
            {node.duration && <span className="bg-[#ff4081] px-1 rounded">Duration: {node.duration}</span>}
            {node.count && <span className="bg-[#ff4081] px-1 rounded">Count: {node.count}</span>}
            {node.threadName && <span className="bg-[#ff4081] px-1 rounded">Thread: {node.threadName}</span>}
          </div>
        </div>
        
        {node.children && node.children.map(child => renderNode(child, depth + 1))}
      </div>
    );
  };

  if (!ast) return <div className="text-gray-500">No AST available</div>;

  return (
    <div className="ast-visualization bg-white p-4 border border-gray-200 rounded shadow-sm">
      {renderNode(ast)}
    </div>
  );
}
