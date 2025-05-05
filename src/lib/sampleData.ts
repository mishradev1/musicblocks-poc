// Sample data for Music Blocks 4 POC

export const samplePrograms = [
  {
    name: "Simple Melody",
    description: "A simple melody program playing C major scale",
    code: `// Simple melody program
play note C4 for 1/4
play note D4 for 1/4
play note E4 for 1/4
play note F4 for 1/4
play note G4 for 1/4
play note A4 for 1/4
play note B4 for 1/4
play note C5 for 1/4`,
    ast: {
      type: "Program",
      id: "program1",
      children: [
        { type: "Note", id: "note1", value: "C4", duration: 0.25 },
        { type: "Note", id: "note2", value: "D4", duration: 0.25 },
        { type: "Note", id: "note3", value: "E4", duration: 0.25 },
        { type: "Note", id: "note4", value: "F4", duration: 0.25 },
        { type: "Note", id: "note5", value: "G4", duration: 0.25 },
        { type: "Note", id: "note6", value: "A4", duration: 0.25 },
        { type: "Note", id: "note7", value: "B4", duration: 0.25 },
        { type: "Note", id: "note8", value: "C5", duration: 0.25 }
      ]
    },
    executionSteps: [
      {
        activeNodes: ["note1"],
        threads: [{ id: "t1", status: "running", position: "note1" }],
        state: { currentNote: "C4" },
        notes: [{ note: "C4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note2"],
        threads: [{ id: "t1", status: "running", position: "note2" }],
        state: { currentNote: "D4" },
        notes: [{ note: "D4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note3"],
        threads: [{ id: "t1", status: "running", position: "note3" }],
        state: { currentNote: "E4" },
        notes: [{ note: "E4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note4"],
        threads: [{ id: "t1", status: "running", position: "note4" }],
        state: { currentNote: "F4" },
        notes: [{ note: "F4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note5"],
        threads: [{ id: "t1", status: "running", position: "note5" }],
        state: { currentNote: "G4" },
        notes: [{ note: "G4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note6"],
        threads: [{ id: "t1", status: "running", position: "note6" }],
        state: { currentNote: "A4" },
        notes: [{ note: "A4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note7"],
        threads: [{ id: "t1", status: "running", position: "note7" }],
        state: { currentNote: "B4" },
        notes: [{ note: "B4", duration: 0.25, active: true }]
      },
      {
        activeNodes: ["note8"],
        threads: [{ id: "t1", status: "running", position: "note8" }],
        state: { currentNote: "C5" },
        notes: [{ note: "C5", duration: 0.25, active: true }]
      },
      {
        activeNodes: [],
        threads: [{ id: "t1", status: "completed", position: null }],
        state: { currentNote: null },
        notes: []
      }
    ]
  },
  {
    name: "Concurrent Melodies",
    description: "A program with two concurrent melody threads",
    code: `// Concurrent melodies program
thread "melody1" {
  play note C4 for 1/4
  play note E4 for 1/4
  play note G4 for 1/4
  play note C5 for 1/4
}

thread "melody2" {
  wait 1/4
  play note E3 for 1/4
  play note G3 for 1/4
  play note C4 for 1/4
}

start thread "melody1"
start thread "melody2"`,
    ast: {
      type: "Program",
      id: "program2",
      children: [
        {
          type: "ThreadDefinition",
          id: "thread1",
          name: "melody1",
          children: [
            { type: "Note", id: "note1", value: "C4", duration: 0.25 },
            { type: "Note", id: "note2", value: "E4", duration: 0.25 },
            { type: "Note", id: "note3", value: "G4", duration: 0.25 },
            { type: "Note", id: "note4", value: "C5", duration: 0.25 }
          ]
        },
        {
          type: "ThreadDefinition",
          id: "thread2",
          name: "melody2",
          children: [
            { type: "Wait", id: "wait1", duration: 0.25 },
            { type: "Note", id: "note5", value: "E3", duration: 0.25 },
            { type: "Note", id: "note6", value: "G3", duration: 0.25 },
            { type: "Note", id: "note7", value: "C4", duration: 0.25 }
          ]
        },
        { type: "StartThread", id: "start1", threadName: "melody1" },
        { type: "StartThread", id: "start2", threadName: "melody2" }
      ]
    },
    executionSteps: [
      {
        activeNodes: ["start1", "start2"],
        threads: [
          { id: "main", status: "completed", position: null },
          { id: "melody1", status: "ready", position: null },
          { id: "melody2", status: "ready", position: null }
        ],
        state: { threadsStarted: ["melody1", "melody2"] },
        notes: []
      },
      {
        activeNodes: ["note1", "wait1"],
        threads: [
          { id: "melody1", status: "running", position: "note1" },
          { id: "melody2", status: "waiting", position: "wait1", remaining: 0.25 }
        ],
        state: { currentNotes: { melody1: "C4" } },
        notes: [{ note: "C4", duration: 0.25, active: true, thread: "melody1" }]
      },
      {
        activeNodes: ["note2", "note5"],
        threads: [
          { id: "melody1", status: "running", position: "note2" },
          { id: "melody2", status: "running", position: "note5" }
        ],
        state: { currentNotes: { melody1: "E4", melody2: "E3" } },
        notes: [
          { note: "E4", duration: 0.25, active: true, thread: "melody1" },
          { note: "E3", duration: 0.25, active: true, thread: "melody2" }
        ]
      },
      {
        activeNodes: ["note3", "note6"],
        threads: [
          { id: "melody1", status: "running", position: "note3" },
          { id: "melody2", status: "running", position: "note6" }
        ],
        state: { currentNotes: { melody1: "G4", melody2: "G3" } },
        notes: [
          { note: "G4", duration: 0.25, active: true, thread: "melody1" },
          { note: "G3", duration: 0.25, active: true, thread: "melody2" }
        ]
      },
      {
        activeNodes: ["note4", "note7"],
        threads: [
          { id: "melody1", status: "running", position: "note4" },
          { id: "melody2", status: "running", position: "note7" }
        ],
        state: { currentNotes: { melody1: "C5", melody2: "C4" } },
        notes: [
          { note: "C5", duration: 0.25, active: true, thread: "melody1" },
          { note: "C4", duration: 0.25, active: true, thread: "melody2" }
        ]
      },
      {
        activeNodes: [],
        threads: [
          { id: "melody1", status: "completed", position: null },
          { id: "melody2", status: "completed", position: null }
        ],
        state: { currentNotes: {} },
        notes: []
      }
    ]
  },
  {
    name: "Time-Based Program",
    description: "A program demonstrating time-based instructions",
    code: `// Time-based program
tempo 120 BPM

repeat 4 times {
  play note C4 for 1/8
  rest for 1/8
  play note E4 for 1/8
  rest for 1/8
}`,
    ast: {
      type: "Program",
      id: "program3",
      children: [
        { type: "Tempo", id: "tempo1", value: 120 },
        {
          type: "Repeat",
          id: "repeat1",
          count: 4,
          children: [
            { type: "Note", id: "note1", value: "C4", duration: 0.125 },
            { type: "Rest", id: "rest1", duration: 0.125 },
            { type: "Note", id: "note2", value: "E4", duration: 0.125 },
            { type: "Rest", id: "rest2", duration: 0.125 }
          ]
        }
      ]
    },
    executionSteps: [
      {
        activeNodes: ["tempo1"],
        threads: [{ id: "main", status: "running", position: "tempo1" }],
        state: { tempo: 120 },
        notes: []
      },
      {
        activeNodes: ["repeat1"],
        threads: [{ id: "main", status: "running", position: "repeat1" }],
        state: { tempo: 120, iterations: 1, totalIterations: 4 },
        notes: []
      },
      {
        activeNodes: ["note1"],
        threads: [{ id: "main", status: "running", position: "note1" }],
        state: { tempo: 120, iterations: 1, totalIterations: 4, currentNote: "C4" },
        notes: [{ note: "C4", duration: 0.125, active: true }]
      },
      {
        activeNodes: ["rest1"],
        threads: [{ id: "main", status: "running", position: "rest1" }],
        state: { tempo: 120, iterations: 1, totalIterations: 4 },
        notes: []
      },
      {
        activeNodes: ["note2"],
        threads: [{ id: "main", status: "running", position: "note2" }],
        state: { tempo: 120, iterations: 1, totalIterations: 4, currentNote: "E4" },
        notes: [{ note: "E4", duration: 0.125, active: true }]
      },
      {
        activeNodes: ["rest2"],
        threads: [{ id: "main", status: "running", position: "rest2" }],
        state: { tempo: 120, iterations: 1, totalIterations: 4 },
        notes: []
      },
      // Additional iterations would follow but abbreviated for brevity
      {
        activeNodes: ["repeat1"],
        threads: [{ id: "main", status: "running", position: "repeat1" }],
        state: { tempo: 120, iterations: 2, totalIterations: 4 },
        notes: []
      },
      {
        activeNodes: [],
        threads: [{ id: "main", status: "completed", position: null }],
        state: { tempo: 120, iterations: 4, totalIterations: 4 },
        notes: []
      }
    ]
  }
];

// Block categories for the sidebar
export const blockCategories = {
  notes: [
    { id: "note-c4", type: "note", name: "C4", description: "Play C4 note" },
    { id: "note-d4", type: "note", name: "D4", description: "Play D4 note" },
    { id: "note-e4", type: "note", name: "E4", description: "Play E4 note" },
    { id: "note-f4", type: "note", name: "F4", description: "Play F4 note" },
    { id: "note-g4", type: "note", name: "G4", description: "Play G4 note" },
    { id: "note-a4", type: "note", name: "A4", description: "Play A4 note" },
    { id: "note-b4", type: "note", name: "B4", description: "Play B4 note" }
  ],
  rhythm: [
    { id: "rest-quarter", type: "rest", name: "Rest 1/4", description: "Quarter note rest" },
    { id: "rest-half", type: "rest", name: "Rest 1/2", description: "Half note rest" },
    { id: "tempo-120", type: "tempo", name: "Tempo 120", description: "Set tempo to 120 BPM" },
    { id: "tempo-90", type: "tempo", name: "Tempo 90", description: "Set tempo to 90 BPM" }
  ],
  control: [
    { id: "repeat", type: "repeat", name: "Repeat", description: "Repeat blocks n times" },
    { id: "forever", type: "forever", name: "Forever", description: "Loop forever" },
    { id: "wait", type: "wait", name: "Wait", description: "Wait for duration" }
  ],
  threads: [
    { id: "thread-def", type: "thread-def", name: "Define Thread", description: "Define a new thread" },
    { id: "start-thread", type: "start-thread", name: "Start Thread", description: "Start a defined thread" },
    { id: "sync", type: "sync", name: "Sync", description: "Synchronize threads" }
  ]
};
