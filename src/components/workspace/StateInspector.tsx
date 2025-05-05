"use client";

export default function StateInspector({ state = {} }) {
  // Helper function to determine color based on variable type
  const getVariableColor = (value) => {
    if (typeof value === 'number') return 'bg-[#ff4081]';
    if (typeof value === 'string') return 'bg-[#8bc34a]';
    if (typeof value === 'boolean') return 'bg-[#ff9800]';
    if (value === null) return 'bg-[#9e9e9e]';
    if (Array.isArray(value)) return 'bg-[#673ab7]';
    if (typeof value === 'object') return 'bg-[#2196f3]';
    return 'bg-[#607d8b]';
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-[#2196f3] pb-2 border-b border-gray-200 mb-4">State Inspector</h2>
      
      {Object.keys(state).length === 0 ? (
        <div className="text-gray-500 p-4 border border-dashed border-gray-300 rounded text-center">No state variables</div>
      ) : (
        <div className="space-y-3">
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className="bg-white p-3 rounded shadow-sm border border-gray-100">
              <div className="text-[#2196f3] text-xs font-medium mb-1">{key}</div>
              {typeof value === 'object' && value !== null ? (
                <div className="font-mono text-sm bg-gray-50 p-2 rounded overflow-x-auto">
                  {JSON.stringify(value, null, 2)}
                </div>
              ) : (
                <div className={`inline-block px-2 py-1 rounded text-white text-sm ${getVariableColor(value)}`}>
                  {value === null ? 'null' : String(value)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
