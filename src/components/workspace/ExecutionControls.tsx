"use client";

export default function ExecutionControls({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  onStepForward,
  onStepBackward,
  executionSpeed,
  onSpeedChange,
  currentStep,
  totalSteps
}) {
  return (
    <div className="mt-auto pt-2">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={onStepBackward}
            className="p-2 rounded-full bg-white text-[#2196f3] hover:bg-[#e3f2fd] border border-[#bbdefb] transition-colors"
            title="Step backward"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          
          {isPlaying ? (
            <button
              onClick={onPause}
              className="p-2 rounded-full bg-white text-[#2196f3] hover:bg-[#e3f2fd] border border-[#bbdefb] transition-colors" 
              title="Pause"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </button>
          ) : (
            <button
              onClick={onPlay}
              className="p-2 rounded-full bg-[#4caf50] text-white hover:bg-[#43a047] transition-colors" 
              title="Play"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          )}
          
          <button
            onClick={onStop}
            className="p-2 rounded-full bg-white text-[#2196f3] hover:bg-[#e3f2fd] border border-[#bbdefb] transition-colors" 
            title="Stop"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="6" width="12" height="12"></rect>
            </svg>
          </button>
          
          <button
            onClick={onStepForward}
            className="p-2 rounded-full bg-white text-[#2196f3] hover:bg-[#e3f2fd] border border-[#bbdefb] transition-colors" 
            title="Step forward"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 5 7 7-7 7"></path>
              <path d="M5 12h14"></path>
            </svg>
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Speed:</span>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.25"
              value={executionSpeed}
              onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
              className="w-24 accent-[#2196f3]"
            />
            <span className="text-sm w-8 text-gray-600">{executionSpeed}x</span>
          </div>
          
          <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded border border-gray-200">
            Step: {currentStep + 1} / {totalSteps}
          </div>
        </div>
      </div>
    </div>
  );
}
