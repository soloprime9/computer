import React from 'react';

const SectionA = () => (
  <div className="bg-gray-50 text-gray-800 p-6 lg:p-12">
    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">SECTION A</h1>

    <div className="space-y-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          1. Define Artificial Intelligence. Is it different from intelligence?
        </h2>
        <p>
          Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that
          typically require human intelligence, such as visual perception, speech recognition, decision-making,
          and language translation. AI is distinct from human intelligence, as it is a machine-based system
          designed to simulate human-like intelligence.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          2. Describe the Turing test for intelligence.
        </h2>
        <p>
          The Turing test is a method for determining whether a machine is capable of thinking like a human being.
          The test involves a human evaluator engaging in natural language conversations with both a human and a
          machine, without knowing which is which. If the evaluator cannot reliably distinguish the machine from
          the human, the machine is said to have passed the Turing test.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          3. Differentiate between uninformed search and informed search.
        </h2>
        <p>
          Uninformed search algorithms, such as Breadth-First Search (BFS) and Depth-First Search (DFS), explore
          a problem space without any additional information about the problem. In contrast, informed search
          algorithms, such as Best-First Search and A* Search, use heuristics or additional knowledge to guide
          the search towards more promising areas of the problem space.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          4. For a tic-tac-toe game, draw a game tree from the root node (initial stage) to the leaf node (win or lose).
        </h2>
        <p>
          A game tree for a tic-tac-toe game represents all possible moves and their outcomes. The root node
          represents the initial state of the game, while the leaf nodes represent the possible outcomes (win,
          lose, or draw). Each internal node represents a possible move, and the edges represent the possible
          transitions between moves.
        </p>
      </div>

      {/* More questions styled similarly */}
    </div>
  </div>
);

export default SectionA;
