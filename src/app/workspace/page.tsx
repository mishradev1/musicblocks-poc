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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Music Blocks 4</h1>
            <span className="ml-4 text-slate-500">Workspace</span>
          </div>
          <div className="flex gap-4">
            <select 
              className="bg-gray-700 text-white rounded px-3 py-1"
              value={selectedSample}
              onChange={(e) => handleSelectSample(Number(e.target.value))}
            >
              {samplePrograms.map((program, index) => (
                <option key={index} value={index}>
                  {program.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Main workspace */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel: Block sidebar */}
        <div className="w-64 bg-gray-900 border-r border-gray-800 overflow-y-auto">
          <BlockSidebar />
        </div>

        {/* Center panel: Code editor and AST visualization */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="h-1/2 overflow-hidden border-b border-gray-800">
            <CodeEditor code={code} onChange={handleCodeChange} />
          </div>
          <div className="h-1/2 flex overflow-hidden">
            <div className="w-1/2 border-r border-gray-800 overflow-auto p-4">
              <h2 className="text-xl font-bold mb-4">Abstract Syntax Tree</h2>
              <ASTVisualization 
                ast={ast} 
                activeNodes={currentStepData.activeNodes || []} 
              />
            </div>
            <div className="w-1/2 overflow-auto p-4">
              <h2 className="text-xl font-bold mb-4">Thread Visualization</h2>
              <ThreadVisualization 
                threads={currentStepData.threads || []} 
              />
            </div>
          </div>
        </div>

        {/* Right panel: State inspector */}
        <div className="w-64 bg-gray-900 border-l border-gray-800 overflow-y-auto">
          <StateInspector state={currentStepData.state || {}} />
        </div>
      </div>

      {/* Bottom panel: Execution controls and music visualization */}
      <div className="h-48 bg-gray-900 border-t border-gray-800 p-4">
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
