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
  
  const noteToColor = (note) => {
    const noteMap = {
      "C": "#ff9800", // Orange
      "D": "#4caf50", // Green
      "E": "#2196f3", // Blue
      "F": "#9c27b0", // Purple
      "G": "#e91e63", // Pink
      "A": "#00bcd4", // Cyan
      "B": "#ffc107", // Amber
    };
    
    const noteName = note.charAt(0);
    return noteMap[noteName] || "#ff9800";
  };

  return (
    <div className="flex-1 overflow-hidden">
      <h2 className="text-lg font-bold mb-2 text-[#2196f3]">Music Visualization</h2>
      
      <div className="piano-roll flex flex-col h-[80px] overflow-y-auto border border-gray-300 bg-white rounded">
        {/* Piano roll visualization */}
        {allNotes.slice().reverse().map(noteKey => {
          const activeNote = notes.find(n => n.note === noteKey);
          return (
            <div key={noteKey} className="flex items-center h-6 border-t border-gray-100">
              <div className="w-10 text-xs pr-2 text-right text-gray-500">{noteKey}</div>
              <div className="flex-1 h-full pl-1">
                {activeNote && (
                  <div 
                    className={`h-full rounded-sm ${isPlaying ? 'animate-pulse' : ''}`}
                    style={{ backgroundColor: noteToColor(noteKey), opacity: 0.8 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-2 text-sm text-gray-600 bg-white px-3 py-1 rounded border border-gray-200 inline-block">
        {notes.length > 0 
          ? `Playing: ${notes.map(n => n.note).join(', ')}`
          : 'No notes playing'}
      </div>
    </div>
  );
}
