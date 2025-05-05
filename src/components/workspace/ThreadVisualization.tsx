"use client";

export default function ThreadVisualization({ threads = [] }) {
  if (threads.length === 0) {
    return <div className="text-gray-500 p-4 border border-dashed border-gray-300 rounded bg-white text-center">No active threads</div>;
  }

  return (
    <div className="bg-white p-4 border border-gray-200 rounded shadow-sm space-y-4">
      {threads.map(thread => (
        <div 
          key={thread.id}
          className={`p-3 rounded shadow-sm ${getThreadStatusStyle(thread.status)}`}
        >
          <div className="flex justify-between mb-2 items-center">
            <span className="font-medium">{thread.id}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusBadgeStyle(thread.status)}`}>
              {thread.status}
            </span>
          </div>
          
          {thread.position && (
            <div className="text-sm bg-white/40 p-1 px-2 rounded">
              <span className="text-xs font-medium">Position:</span> <span className="font-mono">{thread.position}</span>
            </div>
          )}
          
          {thread.remaining !== undefined && (
            <div className="text-sm mt-1 bg-white/40 p-1 px-2 rounded">
              <span className="text-xs font-medium">Waiting:</span> {thread.remaining} beats
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function getThreadStatusStyle(status) {
  switch (status) {
    case 'running':
      return 'border-l-4 border-l-[#4caf50] bg-[#e8f5e9]';
    case 'waiting':
      return 'border-l-4 border-l-[#ffc107] bg-[#fff8e1]';
    case 'completed':
      return 'border-l-4 border-l-[#9e9e9e] bg-[#f5f5f5]';
    case 'ready':
      return 'border-l-4 border-l-[#2196f3] bg-[#e3f2fd]';
    default:
      return 'border-l-4 border-l-[#9e9e9e] bg-[#f5f5f5]';
  }
}

function getStatusBadgeStyle(status) {
  switch (status) {
    case 'running':
      return 'bg-[#4caf50] text-white';
    case 'waiting':
      return 'bg-[#ffc107] text-black';
    case 'completed':
      return 'bg-[#9e9e9e] text-white';
    case 'ready':
      return 'bg-[#2196f3] text-white';
    default:
      return 'bg-[#9e9e9e] text-white';
  }
}
