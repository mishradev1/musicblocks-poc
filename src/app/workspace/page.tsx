"use client";

import { useState } from "react";
import CodeEditor from "@/components/workspace/CodeEditor";
import ASTVisualization from "@/components/workspace/ASTVisualization";
import ExecutionControls from "@/components/workspace/ExecutionControls";
import ThreadVisualization from "@/components/workspace/ThreadVisualization";
import MusicVisualization from "@/components/workspace/MusicVisualization";
import StateInspector from "@/components/workspace/StateInspector";
import BlockSidebar from "@/components/workspace/BlockSidebar";
import { samplePrograms } from "@/lib/sampleData";

export default function WorkspacePage() {
  const [code, setCode] = useState(samplePrograms[0].code);
  const [ast, setAst] = useState(samplePrograms[0].ast);
  const [isPlaying, setIsPlaying] = useState(false);
  const [executionSpeed, setExecutionSpeed] = useState(1);
  const [currentStep, setCurrentStep] = useState(0);
  const [threads, setThreads] = useState([]);
  const [programState, setProgramState] = useState({});
  const [activeNodes, setActiveNodes] = useState([]);
  const [selectedSample, setSelectedSample] = useState(0);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    // In a real implementation, we would parse the code to generate AST
    // For now, we'll just use the sample AST
  };

  const handlePlay = () => {
    setIsPlaying(true);
    // Simulate execution with a timer
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= samplePrograms[selectedSample].executionSteps.length - 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000 / executionSpeed);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setActiveNodes([]);
  };

  const handleStepForward = () => {
    if (currentStep < samplePrograms[selectedSample].executionSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelectSample = (index) => {
    setSelectedSample(index);
    setCode(samplePrograms[index].code);
    setAst(samplePrograms[index].ast);
    setCurrentStep(0);
    setActiveNodes([]);
  };

  // Update visualization data based on current step
  const currentStepData = samplePrograms[selectedSample].executionSteps[currentStep] || {};
  
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2196f3] text-white p-2 shadow-md flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-[#1976d2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-[#1976d2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-[#1976d2] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="6" width="12" height="12"></rect>
              </svg>
            </button>
            <h1 className="text-xl font-bold ml-4">Music Blocks 4</h1>
          </div>
          <div className="flex gap-4">
            <select 
              className="bg-white text-[#2196f3] rounded px-3 py-1 border-none"
              value={selectedSample}
              onChange={(e) => handleSelectSample(Number(e.target.value))}
            >
              {samplePrograms.map((program, index) => (
                <option key={index} value={index}>
                  {program.name}
                </option>
              ))}
            </select>
            <button className="bg-white text-[#2196f3] px-3 py-1 rounded hover:bg-[#e3f2fd] transition-colors">
              Save
            </button>
            <button className="bg-white text-[#2196f3] px-3 py-1 rounded hover:bg-[#e3f2fd] transition-colors">
              Help
            </button>
          </div>
        </div>
      </header>

      {/* Main workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel: Block sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <BlockSidebar onDragStart={(e, block) => e.dataTransfer.setData("application/json", JSON.stringify(block))} />
        </div>

        {/* Center panel: Code editor and block canvas */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="h-1/2 overflow-hidden border-b border-gray-200 bg-[#f5f5f5]">
            <div className="h-full p-4">
              <div className="h-full rounded-md border border-gray-300 bg-white p-2 overflow-auto">
                <div className="relative mb-4">
                  <div className="bg-[#4caf50] text-white px-4 py-2 inline-block rounded-t-md">
                    start
                  </div>
                  <div className="ml-8 mt-2">
                    <div className="bg-[#00bcd4] text-white px-4 py-2 inline-block rounded-md mb-2">
                      set instrument guitar
                    </div>
                    <div className="ml-8">
                      <div className="flex items-start mb-2">
                        <div className="bg-[#ff9800] text-white px-4 py-2 rounded-md">
                          note
                        </div>
                        <div className="bg-[#ff4081] text-white px-4 py-2 rounded-md ml-2">
                          1
                        </div>
                        <div className="bg-[#ff4081] text-white px-4 py-2 rounded-md ml-2">
                          4
                        </div>
                      </div>
                      <div className="flex items-start ml-8 mb-2">
                        <div className="bg-[#8bc34a] text-white px-4 py-2 rounded-md">
                          pitch
                        </div>
                        <div className="bg-[#8bc34a] text-white px-4 py-2 rounded-md ml-2">
                          sol
                        </div>
                        <div className="bg-[#ff4081] text-white px-4 py-2 rounded-md ml-2">
                          4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/2 flex overflow-hidden">
            <div className="w-1/2 border-r border-gray-200 overflow-auto p-4">
              <h2 className="text-xl font-bold mb-4 text-[#2196f3]">Abstract Syntax Tree</h2>
              <ASTVisualization 
                ast={ast} 
                activeNodes={currentStepData.activeNodes || []} 
              />
            </div>
            <div className="w-1/2 overflow-auto p-4">
              <h2 className="text-xl font-bold mb-4 text-[#2196f3]">Thread Visualization</h2>
              <ThreadVisualization 
                threads={currentStepData.threads || []} 
              />
            </div>
          </div>
        </div>

        {/* Right panel: State inspector */}
        <div className="w-64 bg-white border-l border-gray-200 overflow-y-auto">
          <StateInspector state={currentStepData.state || {}} />
        </div>
      </div>

      {/* Bottom panel: Execution controls and music visualization */}
      <div className="h-48 bg-[#f5f5f5] border-t border-gray-200 p-4">
        <div className="flex flex-col h-full">
          <MusicVisualization 
            notes={currentStepData.notes || []} 
            isPlaying={isPlaying} 
          />
          <ExecutionControls 
            isPlaying={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onStop={handleStop}
            onStepForward={handleStepForward}
            onStepBackward={handleStepBackward}
            executionSpeed={executionSpeed}
            onSpeedChange={setExecutionSpeed}
            currentStep={currentStep}
            totalSteps={samplePrograms[selectedSample].executionSteps.length}
          />
        </div>
      </div>
    </div>
  );
}
