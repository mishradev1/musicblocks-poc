"use client";

export default function StateInspector({ state = {} }) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">State Inspector</h2>
      
      {Object.keys(state).length === 0 ? (
        <div className="text-gray-500">No state variables</div>
      ) : (
        <div className="space-y-2">
          {Object.entries(state).map(([key, value]) => (
            <div key={key} className="p-2 bg-gray-800 rounded">
              <div className="text-xs text-gray-400">{key}</div>
              <div className="font-mono">
                {typeof value === 'object' 
                  ? JSON.stringify(value, null, 2)
                  : String(value)
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
