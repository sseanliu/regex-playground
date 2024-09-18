import React, { useState, useEffect } from 'react';

const RegexPlayground = () => {
  const [sentence, setSentence] = useState("The quick brown fox jumps over the lazy dog.");
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    try {
      const regex = new RegExp(pattern, flags);
      const newMatches = [...sentence.matchAll(regex)];
      setMatches(newMatches);
    } catch (error) {
      setMatches([]);
    }
  }, [sentence, pattern, flags]);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-2">Regex Playground from A to Z</h1>
      
      <div className="mb-4 text-sm">
        <p>Welcome to the Regex Playground! This tool helps you experiment with regular expressions in real-time. Here's how to use it:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Enter or modify the sentence in the "Sentence" field.</li>
          <li>Type your regular expression in the "Regex Pattern" field.</li>
          <li>Set any flags (like 'g' for global, 'i' for case-insensitive) in the "Flags" field.</li>
          <li>Watch as matches appear instantly below!</li>
        </ul>
        <p className="mt-2">Have fun exploring the power of regex!  - Sean</p>
      </div>
      
      <div className="mb-4">
        <label htmlFor="sentence" className="block mb-1">Sentence:</label>
        <input
          id="sentence"
          type="text"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="pattern" className="block mb-1">Regex Pattern:</label>
        <input
          id="pattern"
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="flags" className="block mb-1">Flags:</label>
        <input
          id="flags"
          type="text"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Matches:</h2>
        {matches.length > 0 ? (
          <ul className="list-disc pl-5">
            {matches.map((match, index) => (
              <li key={index}>
                Match {index + 1}: {match[0]} (Index: {match.index})
              </li>
            ))}
          </ul>
        ) : (
          <p>No matches found.</p>
        )}
      </div>
    </div>
  );
};

export default RegexPlayground;