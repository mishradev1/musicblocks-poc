"use client";

import { useEffect, useRef } from "react";

export default function CodeEditor({ code, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.value = code;
    }
  }, [code]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="h-full relative">
      <h2 className="text-xl font-bold p-4 bg-gray-800">Code Editor</h2>
      <textarea
        ref={editorRef}
        className="w-full h-[calc(100%-4rem)] p-4 bg-gray-900 text-white font-mono resize-none outline-none border-0 focus:ring-0"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
}
