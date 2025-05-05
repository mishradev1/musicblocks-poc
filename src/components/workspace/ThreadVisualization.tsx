"use client";

export default function ThreadVisualization({ threads = [] }) {
  if (threads.length === 0) {
    return <div className="text-gray-500">No active threads</div>;
  }

  return (
    <div className="space-y-4">
      {threads.map(thread => (
        <div 
          key={thread.id}
          className={`p-3 rounded border ${getThreadStatusStyle(thread.status)}`}
        >
          <div className="flex justify-between mb-2">
            <span className="font-medium">{thread.id}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusBadgeStyle(thread.status)}`}>
              {thread.status}
            </span>
          </div>
          
          {thread.position && (
            <div className="text-sm">
              Current position: <span className="font-mono">{thread.position}</span>
            </div>
          )}
          
          {thread.remaining !== undefined && (
            <div className="text-sm">
              Waiting: {thread.remaining} beats
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
      return 'border-green-500 bg-green-900/20';
    case 'waiting':
      return 'border-yellow-500 bg-yellow-900/20';
    case 'completed':
      return 'border-gray-500 bg-gray-800/50';
    case 'ready':
      return 'border-blue-500 bg-blue-900/20';
    default:
      return 'border-gray-600 bg-gray-800';
  }
}

function getStatusBadgeStyle(status) {
  switch (status) {
    case 'running':
      return 'bg-green-500 text-black';
    case 'waiting':
      return 'bg-yellow-500 text-black';
    case 'completed':
      return 'bg-gray-500 text-white';
    case 'ready':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-gray-600 text-white';
  }
}
