"use client";

export default function ASTVisualization({ ast, activeNodes = [] }) {
  const renderNode = (node, depth = 0) => {
    const isActive = activeNodes.includes(node.id);
    
    return (
      <div key={node.id} style={{ marginLeft: `${depth * 20}px` }}>
        <div 
          className={`my-1 p-2 rounded ${
            isActive 
              ? "bg-blue-600 text-white" 
              : "bg-gray-800 text-white"
          }`}
        >
          <div className="font-medium">{node.type}: {node.name || node.value}</div>
          {node.duration && <div className="text-xs">Duration: {node.duration}</div>}
          {node.count && <div className="text-xs">Count: {node.count}</div>}
          {node.threadName && <div className="text-xs">Thread: {node.threadName}</div>}
        </div>
        
        {node.children && node.children.map(child => renderNode(child, depth + 1))}
      </div>
    );
  };

  if (!ast) return <div>No AST available</div>;

  return (
    <div className="ast-visualization">
      {renderNode(ast)}
    </div>
  );
}
