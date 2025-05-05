"use client";

export default function MusicVisualization({ notes = [], isPlaying }) {
  const pianoNotes = ["C", "D", "E", "F", "G", "A", "B"];
  const octaves = [3, 4, 5];
  const allNotes = [];
  
  for (const octave of octaves) {
    for (const note of pianoNotes) {
      allNotes.push(`${note}${octave}`);
    }
  }

  return (
    <div className="flex-1 overflow-hidden">
      <h2 className="text-lg font-bold mb-2">Music Visualization</h2>
      
      <div className="piano-roll flex flex-col h-[80px] overflow-y-auto border border-gray-700 rounded">
        {/* Piano roll visualization */}
        {allNotes.slice().reverse().map(noteKey => {
          const activeNote = notes.find(n => n.note === noteKey);
          return (
            <div key={noteKey} className="flex items-center h-6 border-t border-gray-800">
              <div className="w-10 text-xs pr-2 text-right text-gray-400">{noteKey}</div>
              <div className="flex-1 h-full">
                {activeNote && (
                  <div 
                    className={`h-full bg-blue-500 rounded-sm ${isPlaying ? 'animate-pulse' : ''}`}
                    style={{ opacity: 0.8 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-2 text-sm text-gray-300">
        {notes.length > 0 
          ? `Current notes: ${notes.map(n => n.note).join(', ')}`
          : 'No notes playing'}
      </div>
    </div>
  );
}
