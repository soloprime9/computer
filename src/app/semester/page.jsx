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


     




  <div className="bg-gray-50 text-gray-800 p-2 lg:p-12">

  <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">
      10 Marks Important Questions
    </h1>

    

    <div className="space-y-8">
    
      {/* Definition of AI */}
      <div className="bg-white shadow-md rounded-lg p-6 shadow">
      <h2 className="text-2xl font-extrabold text-center text-blue-500 mb-8 shadow pb-3">
      <strong className='text-black mr-5 justify-start'>Question 1.</strong>   AI Overview: Definition, Types, and History
    </h2>
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
          1. Definition of Artificial Intelligence (AI)
        </h2>
        <p>
          Artificial Intelligence (AI) refers to the ability of machines, especially computers, to perform tasks
          that typically require human intelligence. These tasks include understanding language, recognizing images,
          solving problems, making decisions, and learning from data.
        </p>
        <p>
          For example, virtual assistants like <strong>Siri</strong> or <strong>Alexa</strong> use AI to
          understand your voice commands, and self-driving cars use AI to navigate roads and avoid obstacles.
        </p>
     

      {/* Types of AI */}
      
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
          2. Types of Artificial Intelligence
        </h2>
        <p>
          AI can be categorized into three types based on its capabilities:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Narrow AI (Weak AI):</strong> Designed to perform a single task very well, like
            <strong> Google Search</strong> or facial recognition software.
          </li>
          <li>
            <strong>General AI (Strong AI):</strong> A system that can perform any intellectual task that a human
            can do. This type of AI doesn’t exist yet but is the goal of AI research.
          </li>
          <li>
            <strong>Super AI:</strong> Hypothetical AI that surpasses human intelligence in every field. It is
            smarter than humans in creativity, decision-making, and even emotions. (Think of robots in movies like
            <strong> "Terminator"</strong> or <strong>"Avengers: Age of Ultron"</strong>.)
          </li>
        </ul>
     

      {/* History of AI */}
      
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
          3. History of Artificial Intelligence
        </h2>
        <p>
          The history of AI spans decades, from ancient myths to modern advancements. Here’s a simplified timeline:
        </p>
        <ol className="list-decimal pl-6">
          <li>
            <strong>Ancient Times:</strong> Concepts of intelligent machines appeared in myths, such as the Greek
            mechanical man, Talos.
          </li>
          <li>
            <strong>1940s-1950s:</strong> Alan Turing proposed the idea of "thinking machines" and created the
            <strong> Turing Test</strong> to measure machine intelligence.
          </li>
          <li>
            <strong>1956:</strong> The term <strong>Artificial Intelligence</strong> was coined at the Dartmouth
            Conference, marking the official birth of AI.
          </li>
          <li>
            <strong>1960s-1970s:</strong> AI programs like <strong>ELIZA</strong> (an early chatbot) were created.
            Basic AI applications began appearing in problem-solving and research.
          </li>
          <li>
            <strong>1980s (AI Winter):</strong> Progress slowed due to lack of funding and expensive technology.
          </li>
          <li>
            <strong>1990s:</strong> AI made a comeback with faster computers. IBM's <strong>Deep Blue</strong> beat
            world chess champion Garry Kasparov in 1997.
          </li>
          <li>
            <strong>2000s-Present:</strong> AI grew rapidly with big data and advanced computing. Innovations like
            <strong> Siri, AlphaGo</strong>, and self-driving cars emerged.
          </li>
        </ol>
      

      {/* Real-Life Applications */}
      
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4 shadow">
          4. Real-World Applications of AI
        </h2>
        <p>
          AI has numerous real-life applications that make life easier and more efficient:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Healthcare:</strong> AI systems like IBM Watson help doctors diagnose diseases like cancer.
          </li>
          <li>
            <strong>Education:</strong> AI-powered platforms like Khan Academy provide personalized learning
            experiences.
          </li>
          <li>
            <strong>Transportation:</strong> Self-driving cars like Tesla use AI for navigation and safety.
          </li>
          <li>
            <strong>Entertainment:</strong> Platforms like Netflix use AI to recommend movies and shows based on
            your interests.
          </li>
          <li>
            <strong>Customer Support:</strong> AI chatbots provide 24/7 support on platforms like Amazon.
          </li>
        </ul>
      </div>
    </div>
  </div>


  
  
  
  
  
  

    <div className="bg-white shadow-md rounded-lg p-6 shadow lg:p-12 space-y-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-extrabold text-blue-600 text-center mb-8">
      <strong className='text-black mr-5 justify-start'>Question 2.</strong> Forward and backward chaining First order logic Resolution in Detail
      </h2>

      {/* Forward and Backward Chaining */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">
          1. Forward and Backward Chaining
        </h2>
        <p>
          Chaining is like solving a puzzle using clues to figure out what’s true or what you need to do next. It
          can be done in two ways:
        </p>

        {/* Forward Chaining */}
        <h3 className="text-xl font-bold text-gray-700 mt-4">Forward Chaining</h3>
        <p>
          Forward chaining starts with <strong>facts</strong> and applies <strong>rules</strong> to reach a
          conclusion.
        </p>
        <p className="mt-4">
          <strong>Example:</strong> Imagine you’re a doctor diagnosing a patient:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Fact: The patient has a fever.</li>
            <li>Rule: Fever + sore throat = flu.</li>
            <li>Fact: The patient has a sore throat.</li>
            <li>Conclusion: The patient might have the flu.</li>
          </ul>
        

        {/* Backward Chaining */}
        <h3 className="text-xl font-bold text-gray-700 mt-6">Backward Chaining</h3>
        <p>
          Backward chaining starts with the <strong>goal</strong> and works backward to check if it’s true using
          facts and rules.
        </p>
        <p className="mt-4">
          <strong>Example:</strong> Checking loan eligibility:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Goal: Is the person eligible for a loan?</li>
            <li>Rule: Good credit score → Loan eligibility.</li>
            <li>Facts: No debt and steady job.</li>
            <li>Conclusion: Eligible for the loan.</li>
          </ul>
        
      </div>

      {/* First-Order Logic */}
      <div>
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">2. First-Order Logic (FOL)</h2>
        <p>
          First-Order Logic (FOL) is a smarter way to describe the world using <strong>objects</strong>,{" "}
          <strong>predicates</strong>, and <strong>quantifiers</strong>.
        </p>
        <p className="mt-4">
          <strong>Example:</strong> "All humans are mortal."</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Object: Humans.</li>
            <li>Predicate: Mortal.</li>
            <li>FOL Statement: ∀x (Human(x) → Mortal(x)).</li>
          </ul>
          If "Socrates is a human," FOL concludes that "Socrates is mortal."
        
      </div>

      {/* Resolution */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">3. Resolution</h2>
        <p>
          Resolution solves logical problems by breaking them into smaller pieces and finding contradictions.
        </p>
        <p className="mt-4">
          <strong>Example:</strong> "If it rains, I’ll carry an umbrella."</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Rule: If it rains (R), then carry an umbrella (U).</li>
            <li>Fact: It is raining.</li>
            <li>Conclusion: I must carry an umbrella.</li>
          </ul>
        
      </div>

      {/* Quick Recap */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-500 mb-4">Quick Recap</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Forward Chaining:</strong> Start with facts, apply rules, and find the conclusion.
          </li>
          <li>
            <strong>Backward Chaining:</strong> Start with the goal and work backward to verify it.
          </li>
          <li>
            <strong>First-Order Logic:</strong> Use objects, predicates, and quantifiers to describe relationships.
          </li>
          <li>
            <strong>Resolution:</strong> Combine statements to solve problems and find contradictions.
          </li>
        </ul>
      </div>
    </div>






    <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-extrabold text-blue-600 text-center mb-8">
      <strong className='text-black mr-5 justify-start'>Question 3.</strong> Forward and backward chaining First order logic Resolution in Detail
      </h2>
        <p>
          Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that
          typically require human intelligence, such as visual perception, speech recognition, decision-making,
          and language translation. AI is distinct from human intelligence, as it is a machine-based system
          designed to simulate human-like intelligence.
        </p>
     

      {/* Add Intelligent Agents */}
      
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Intelligent Agents (3 marks)
        </h2>
        <p>
          Intelligent Agents are software programs that can sense their environment and take actions accordingly.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Types of Intelligent Agents:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Simple Reflex Agent:</strong> Reacts to the current state of the environment.
          </li>
          <li>
            <strong>Model-Based Reflex Agent:</strong> Uses a model of the environment to decide their actions.
          </li>
          <li>
            <strong>Goal-Based Agent:</strong> Takes actions to achieve specific goals.
          </li>
          <li>
            <strong>Utility-Based Agent:</strong> Chooses actions based on their utility or usefulness.
          </li>
        </ul>
      

      {/* Add Agent Communication */}
      
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Agent Communication (3 marks)
        </h2>
        <p>
          Agent Communication is the process by which agents exchange messages.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Types of Agent Communication:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Request:</strong> One agent requests something from another agent.
          </li>
          <li>
            <strong>Inform:</strong> One agent informs another agent about something.
          </li>
          <li>
            <strong>Query:</strong> One agent asks another agent for information.
          </li>
        </ul>
      

      {/* Add Negotiation and Bargaining */}
      
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Negotiation and Bargaining (4 marks)
        </h2>
        <p>
          Negotiation and Bargaining are processes by which agents reach agreements.
        </p>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Types of Negotiation:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Distributive Negotiation:</strong> One agent distributes something to another agent.
          </li>
          <li>
            <strong>Integrative Negotiation:</strong> Agents work together to find a mutually beneficial solution.
          </li>
          <li>
            <strong>Mixed Negotiation:</strong> A combination of distributive and integrative negotiation.
          </li>
        </ul>
        <h3 className="text-xl font-bold text-gray-700 mt-6">Negotiation Strategies:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Concession:</strong> One agent gives in to the demands of another agent.
          </li>
          <li>
            <strong>Compromise:</strong> Agents find a middle ground.
          </li>
          <li>
            <strong>Cooperation:</strong> Agents work together to achieve a common goal.
          </li>
        </ul>
      
      <h1 className='text-2xl font-semibold text-blue-500 mb-4'>Quick Definition</h1>

            <h2 className="text-xl font-bold text-gray-700 mt-6">Intelligent Agents
      Definition: 
      </h2>
      <p>Intelligent Agents ek software program hain jo apne environment ko sense karte hain aur uske anusaar actions lete hain.</p>
      <h2 className="text-xl font-bold text-gray-700 mt-6">Agent Communication
      Definition:</h2>

      <p>Agent Communication ek process hai jismein agents apne messages ko exchange karte hain.
        </p>
      
      <h2 className="text-xl font-bold text-gray-700 mt-6">Negotiation and Bargaining
      Definition:
      </h2>
      <p> Negotiation and Bargaining ek process hai jismein agents apne interests ko achieve karne ke liye negotiate karte hain.</p>
    </div>
 




    <div className="bg-white shadow-md rounded-lg p-6">
    <h2 className="text-2xl font-extrabold text-blue-600 text-center mb-8">
            <strong className='text-black mr-5 justify-start'>Question 4.</strong> Applications of ai NLP Robotics Machine translation Speech recognition in Detail
      </h2>
        <p>
          Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that
          typically require human intelligence, such as visual perception, speech recognition, decision-making,
          and language translation. AI is distinct from human intelligence, as it is a machine-based system
          designed to simulate human-like intelligence.
        </p>
      

      {/* Applications of AI */}
      
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Applications of AI (10 Marks)
        </h2>

        {/* NLP */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-2">1. Natural Language Processing (NLP) (2.5 Marks)</h3>
          <p>
            <strong>Definition:</strong> NLP is an AI technique that enables computers to understand and generate 
            human language.
          </p>
          <p className="mt-2">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Sentiment Analysis</li>
            <li>Text Summarization</li>
            <li>Machine Translation</li>
            <li>Chatbots</li>
          </ul>
          <p className="mt-2">
            <strong>Importance:</strong> NLP helps computers understand human language and interact with humans effectively.
          </p>
        </div>

        {/* Robotics */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-2">2. Robotics (2.5 Marks)</h3>
          <p>
            <strong>Definition:</strong> Robotics is an AI technique that enables the design, building, and programming 
            of robots.
          </p>
          <p className="mt-2">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Industrial Automation</li>
            <li>Service Robotics</li>
            <li>Autonomous Vehicles</li>
            <li>Healthcare Robotics</li>
          </ul>
          <p className="mt-2">
            <strong>Importance:</strong> Robotics allows robots to perform tasks for humans, increasing productivity.
          </p>
        </div>

        {/* Machine Translation */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-2">3. Machine Translation (2 Marks)</h3>
          <p>
            <strong>Definition:</strong> Machine Translation is an AI technique that enables computers to translate 
            from one language to another.
          </p>
          <p className="mt-2">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Language Translation Software</li>
            <li>Website Localization</li>
            <li>Document Translation</li>
            <li>Multilingual Chatbots</li>
          </ul>
          <p className="mt-2">
            <strong>Importance:</strong> Machine Translation helps humans communicate across different languages.
          </p>
        </div>

        {/* Speech Recognition */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-500 mb-2">4. Speech Recognition (3 Marks)</h3>
          <p>
            <strong>Definition:</strong> Speech Recognition is an AI technique that enables computers to recognize 
            human speech.
          </p>
          <p className="mt-2">
            <strong>Applications:</strong>
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Virtual Assistants</li>
            <li>Voice-Controlled Devices</li>
            <li>Speech-to-Text Software</li>
            <li>Voice Recognition Systems</li>
          </ul>
          <p className="mt-2">
            <strong>Importance:</strong> Speech Recognition allows humans to interact with computers using voice commands.
          </p>
        </div>
      </div>




    
  
    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">SECTION B</h1>

    <div className="space-y-8">
      {/* Question 1: Intelligent Agents */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 1: Intelligent Agents (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700">Definition:</h3>
        <p>
          Intelligent Agents ek software program hain jo apne environment ko sense karte hain aur uske anusaar actions lete hain.
        </p>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Types:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Simple Reflex Agent:</strong> Ye agent sirf current state ko dekhte hain aur uske anusaar actions lete hain.</li>
          <li><strong>Model-Based Reflex Agent:</strong> Ye agent current state aur future state ko dekhte hain aur uske anusaar actions lete hain.</li>
          <li><strong>Goal-Based Agent:</strong> Ye agent apne goals ko achieve karne ke liye actions lete hain.</li>
          <li><strong>Utility-Based Agent:</strong> Ye agent apne actions ko utility ke basis par choose karte hain.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Characteristics:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Autonomy:</strong> Intelligent Agents apne decisions khud lete hain.</li>
          <li><strong>Reactivity:</strong> Intelligent Agents apne environment ko sense karte hain aur uske anusaar actions lete hain.</li>
          <li><strong>Proactivity:</strong> Intelligent Agents apne goals ko achieve karne ke liye actions lete hain.</li>
          <li><strong>Social ability:</strong> Intelligent Agents dusre agents ke saath interact kar sakte hain.</li>
        </ul>
      </div>

      {/* Question 2: Agent Communication */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 2: Agent Communication (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700">Definition:</h3>
        <p>Agent Communication ek process hai jismein agents apne messages ko exchange karte hain.</p>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Types:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Request:</strong> Ek agent dusre agent se kuch request karta hai.</li>
          <li><strong>Inform:</strong> Ek agent dusre agent ko kuch inform karta hai.</li>
          <li><strong>Query:</strong> Ek agent dusre agent se kuch query karta hai.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Communication Protocols:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Agent Communication Language (ACL):</strong> ACL ek standard protocol hai jo agents ke beech communication ke liye use hota hai.</li>
          <li><strong>Knowledge Query and Manipulation Language (KQML):</strong> KQML ek protocol hai jo agents ke beech knowledge sharing ke liye use hota hai.</li>
        </ul>
      </div>

      {/* Question 3: Negotiation and Bargaining */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 3: Negotiation and Bargaining (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700">Definition:</h3>
        <p>
          Negotiation and Bargaining ek process hai jismein agents apne interests ko achieve karne ke liye negotiate karte hain.
        </p>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Types:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Distributive Negotiation:</strong> Ek agent dusre agent se kuch distribute karta hai.</li>
          <li><strong>Integrative Negotiation:</strong> Agents work together to find a mutually beneficial solution.</li>
          <li><strong>Mixed Negotiation:</strong> A combination of distributive and integrative negotiation.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Negotiation Strategies:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li><strong>Concession:</strong> Ek agent dusre agent ke demands ko accept karta hai.</li>
          <li><strong>Compromise:</strong> Agents find a middle ground.</li>
          <li><strong>Cooperation:</strong> Agents work together to achieve a common goal.</li>
        </ul>
      </div>

      {/* Question 4: Applications of AI */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 4: Applications of AI (10 marks)
        </h2>

        <h3 className="text-xl font-bold text-gray-700">NLP:</h3>
        <p><strong>Definition:</strong> NLP ek AI technique hai jo computers ko human language ko samajhne aur generate karne ki capability deti hai.</p>
        <h4 className="text-lg font-bold text-gray-600 mt-2">Applications:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>Sentiment Analysis</li>
          <li>Text Summarization</li>
          <li>Machine Translation</li>
          <li>Chatbots</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Robotics:</h3>
        <p><strong>Definition:</strong> Robotics ek AI technique hai jo robots ko design, build, aur program karne ki capability deti hai.</p>
        <h4 className="text-lg font-bold text-gray-600 mt-2">Applications:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>Industrial Automation</li>
          <li>Service Robotics</li>
          <li>Autonomous Vehicles</li>
          <li>Healthcare Robotics</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Machine Translation:</h3>
        <p><strong>Definition:</strong> Machine Translation ek AI technique hai jo computers ko ek language se dusre language mein translate karne ki capability deti hai.</p>
        <h4 className="text-lg font-bold text-gray-600 mt-2">Applications:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>Language Translation Software</li>
          <li>Website Localization</li>
          <li>Document Translation</li>
          <li>Multilingual Chatbots</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-700 mt-4">Speech Recognition:</h3>
        <p><strong>Definition:</strong> Speech Recognition ek AI technique hai jo computers ko human speech ko recognize karne ki capability deti hai.</p>
        <h4 className="text-lg font-bold text-gray-600 mt-2">Applications:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>Virtual Assistants</li>
          <li>Voice-Controlled Devices</li>
          <li>Speech-to-Text Software</li>
          <li>Voice Recognition Systems</li>
        </ul>
      </div>
    </div>



  


 

    <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">SECTION C</h1>

    <div className="space-y-8">
      {/* Question 1 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 1: Intelligent Agents ki Limitations (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Limitations:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Complexity:</strong> Intelligent Agents ki complexity bahut zyada ho sakti hai, jisse unhein design aur implement karna mushkil ho sakta hai.
          </li>
          <li>
            <strong>Uncertainty:</strong> Intelligent Agents ke decisions mein uncertainty ho sakta hai, jisse unhein galat decisions lene ki sambhavna ho sakti hai.
          </li>
          <li>
            <strong>Lack of Common Sense:</strong> Intelligent Agents ko common sense ki kami ho sakti hai, jisse unhein real-world situations mein galat decisions lene ki sambhavna ho sakti hai.
          </li>
          <li>
            <strong>Dependence on Data:</strong> Intelligent Agents ki performance data ki quality par nirbhar karti hai, jisse unhein galat decisions lene ki sambhavna ho sakti hai.
          </li>
        </ul>
      </div>

      {/* Question 2 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 2: Agent Communication ki Challenges (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Challenges:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Language Barrier:</strong> Agent Communication mein language barrier ek bada challenge hai, jisse agents ko ek dusre ki language samajhne mein mushkil ho sakti hai.
          </li>
          <li>
            <strong>Semantic Ambiguity:</strong> Agent Communication mein semantic ambiguity ek bada challenge hai, jisse agents ko ek dusre ki intentions samajhne mein mushkil ho sakti hai.
          </li>
          <li>
            <strong>Trust Issues:</strong> Agent Communication mein trust issues ek bada challenge hai, jisse agents ko ek dusre par trust karne mein mushkil ho sakti hai.
          </li>
          <li>
            <strong>Scalability:</strong> Agent Communication mein scalability ek bada challenge hai, jisse agents ko ek dusre ke saath communicate karne mein mushkil ho sakti hai.
          </li>
        </ul>
      </div>

      {/* Question 3 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 3: Negotiation and Bargaining ki Strategies (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Strategies:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Concession:</strong> Ek agent dusre agent ke demands ko accept karta hai.
          </li>
          <li>
            <strong>Compromise:</strong> Agents find a middle ground.
          </li>
          <li>
            <strong>Cooperation:</strong> Agents work together to achieve a common goal.
          </li>
          <li>
            <strong>Competitive Bargaining:</strong> Agents apne interests ko achieve karne ke liye compete karte hain.
          </li>
        </ul>
      </div>

      {/* Question 4 */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 4: Applications of AI ki Future Scope (10 marks)
        </h2>
        <h3 className="text-xl font-bold text-gray-700 mt-4">Future Scope:</h3>
        <ul className="list-disc ml-6 mt-2">
          <li>
            <strong>Healthcare:</strong> AI ki madad se healthcare mein patient care improve kiya ja sakta hai.
          </li>
          <li>
            <strong>Education:</strong> AI ki madad se education mein student learning experience improve kiya ja sakta hai.
          </li>
          <li>
            <strong>Transportation:</strong> AI ki madad se transportation mein autonomous vehicles develop kiye ja sakte hain.
          </li>
          <li>
            <strong>Cybersecurity:</strong> AI ki madad se cybersecurity mein threat detection aur prevention improve kiya ja sakta hai.
          </li>
        </ul>
      </div>
    </div>






    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
    <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          Question 5: Applications of AI ki Future Scope (10 marks)
        </h2>
      <p className="text-lg mb-6">
        Robots ek mechanical ya electronic device hain jo automatically tasks perform kar sakte hain. Ve sensors, actuators, aur control systems se equipped hote hain jo unhein environment ko sense karne, decisions lene, aur actions lene ki capability dete hain.
      </p>
      <h2 className="text-2xl font-bold mb-4">Types of Robots</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Industrial Robots: Ye robots manufacturing aur production processes mein use hote hain.</li>
        <li className="mb-2">Service Robots: Ye robots human ke liye services provide karte hain, jaise ki healthcare, education, aur hospitality.</li>
        <li className="mb-2">Autonomous Robots: Ye robots apne decisions khud lete hain aur apne actions khud perform karte hain.</li>
        <li className="mb-2">Humanoid Robots: Ye robots human ki tarah dikhte hain aur human ki tarah actions perform kar sakte hain.</li>
      </ul>
      <h1 className="text-3xl font-bold mb-4">What is Robotics?</h1>
      <p className="text-lg mb-6">
        Robotics ek branch of science aur engineering hai jo robots ki design, construction, aur operation se related hai. Robotics mein computer science, electrical engineering, mechanical engineering, aur artificial intelligence ki concepts ka use kiya jata hai.
      </p>
      <h2 className="text-2xl font-bold mb-4">Applications of Robotics</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Manufacturing: Robotics ki madad se manufacturing processes mein productivity aur efficiency badhai ja sakti hai.</li>
        <li className="mb-2">Healthcare: Robotics ki madad se healthcare mein patient care improve kiya ja sakta hai.</li>
        <li className="mb-2">Space Exploration: Robotics ki madad se space exploration mein autonomous vehicles aur robots ka use kiya ja sakta hai.</li>
        <li className="mb-2">Service Industry: Robotics ki madad se service industry mein customer service aur support improve kiya ja sakta hai.</li>
      </ul>
    </div>




    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
    <h2 className="text-2xl font-extrabold text-blue-600 text-center mb-8">
      <strong className='text-black mr-5 justify-start'>IMP Question .</strong>  Discuss Branch-and-bound search algorithm.
      </h2>
      <p className="text-lg mb-6">
        Branch-and-bound search algorithm ek popular uninformed search algorithm hai jo graph ya tree mein optimal solution khojne ke liye upyog kiya jata hai.
      </p>
      <h2 className="text-2xl font-bold mb-4">Branch-and-Bound Algorithm ka Karya</h2>
      <ol className="list-decimal pl-4 mb-6">
        <li className="mb-2">Root Node Se Shuru Karein: Algorithm root node se shuru hota hai aur uske child nodes ko explore karta hai.</li>
        <li className="mb-2">Child Nodes Ko Evaluate Karein: Algorithm har child node ko evaluate karta hai aur unke costs ya heuristic values ko calculate karta hai.</li>
        <li className="mb-2">Bound Ko Update Karein: Algorithm bound ko update karta hai, jo ki optimal solution ke cost ko represent karta hai.</li>
        <li className="mb-2">Branching Karein: Algorithm child nodes ko branching karta hai, jo ki unke child nodes ko explore karta hai.</li>
        <li className="mb-2">Bounding Karein: Algorithm bounding karta hai, jo ki child nodes ko ignore karta hai jo ki bound se zyada cost wale hain.</li>
        <li className="mb-2">Optimal Solution Ko Khojein: Algorithm optimal solution ko khojta hai jo ki bound se kam ya barabar cost wala hai.</li>
      </ol>
      <h2 className="text-2xl font-bold mb-4">Branch-and-Bound Algorithm ke Fायदे</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Optimal Solution: Branch-and-bound algorithm optimal solution ko khojta hai.</li>
        <li className="mb-2">Efficient: Branch-and-bound algorithm efficient hai kyunki yeh algorithm bounding ke through irrelevant nodes ko ignore karta hai.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Branch-and-Bound Algorithm ke Nuksan</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Complexity: Branch-and-bound algorithm ki complexity zyada hai kyunki yeh algorithm har node ko evaluate karta hai.</li>
        <li className="mb-2">Heuristic Function: Branch-and-bound algorithm ke liye heuristic function ki zaroorat hai jo ki optimal solution ko khojne mein madad karta hai.</li>
      </ul>
    </div>




    <div className=" bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">(a) Bayesian Classifier</h1>
      <p className="text-lg mb-6">
        Bayesian classifier ek supervised learning algorithm hai jo Bayesian theorem ke upar based hai. Iska upyog data ko classify karne ke liye kiya jata hai.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Points:</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Bayesian Theorem: Bayesian classifier Bayesian theorem ke upar based hai, jo ki conditional probability ko calculate karta hai.</li>
        <li className="mb-2">Prior Probability: Bayesian classifier prior probability ko use karta hai, jo ki class ke probability ko represent karta hai.</li>
        <li className="mb-2">Likelihood: Bayesian classifier likelihood ko use karta hai, jo ki data ke probability ko represent karta hai.</li>
        <li className="mb-2">Posterior Probability: Bayesian classifier posterior probability ko calculate karta hai, jo ki class ke probability ko represent karta hai given data.</li>
        <li className="mb-2">Classification: Bayesian classifier posterior probability ke upar based classification karta hai.</li>
      </ul>
      <h1 className="text-3xl font-bold mb-4">(b) LDA (Linear Discriminant Analysis) aur PCA (Principal Component Analysis)</h1>
      <h2 className="text-2xl font-bold mb-4">LDA (Linear Discriminant Analysis)</h2>
      <p className="text-lg mb-6">
        LDA ek supervised learning algorithm hai jo data ko classify karne ke liye upyog kiya jata hai.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Points:</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Linear Combination: LDA data ko linear combination ke through transform karta hai.</li>
        <li className="mb-2">Discriminant Function: LDA discriminant function ko use karta hai, jo ki class ke probability ko represent karta hai.</li>
        <li className="mb-2">Classification: LDA discriminant function ke upar based classification karta hai.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">PCA (Principal Component Analysis)</h2>
      <p className="text-lg mb-6">
        PCA ek unsupervised learning algorithm hai jo data ko reduce karne ke liye upyog kiya jata hai.
      </p>
      <h2 className="text-2xl font-bold mb-4">Key Points:</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Orthogonal Transformation: PCA data ko orthogonal transformation ke through transform karta hai.</li>
        <li className="mb-2">Principal Components: PCA principal components ko calculate karta hai, jo ki data ko represent karta hai.</li>
        <li className="mb-2">Dimensionality Reduction: PCA dimensionality reduction ke liye upyog kiya jata hai.</li>
      </ul>
    </div>




    <div className="bg-white shadow max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl font-extrabold text-blue-600 text-center mb-8">
        <strong className='text-black mr-5 justify-start'>IMP Question .</strong>  
        Explain the concept of alpha-beta pruning. Write alpha-beta search algorithm.
      </h2>
      <p className="text-lg mb-6">
        Alpha-beta pruning ek technique hai jo minimax algorithm ke saath upyog kiya jata hai taaki game tree ko search karne ki complexity ko kam kiya ja sake.
      </p>
      <h2 className="text-2xl font-bold mb-4">Alpha-Beta Pruning ka Concept</h2>
      <ul className="list-disc pl-4 mb-6">
        <li className="mb-2">Alpha Value: Alpha value ek node ke liye sabse accha possible score hai jo ki max player ke liye hai.</li>
        <li className="mb-2">Beta Value: Beta value ek node ke liye sabse accha possible score hai jo ki min player ke liye hai.</li>
        <li className="mb-2">Pruning: Agar alpha value beta value se zyada ya barabar hai, toh hum us node ko prune kar sakte hain kyunki uske child nodes ka koi effect nahin hoga.</li>
      </ul>
      <h2 className="text-2xl font-bold mb-4">Alpha-Beta Search Algorithm</h2>
      <pre className="text-lg mb-6 bg-gray-200">
        <code >
          {`
Function AlphaBeta(node, depth, alpha, beta, maximizingPlayer)
  If node ek terminal node hai ya depth 0 hai
    Return node ke score

  If maximizingPlayer hai
    Value = -Infinity
    For har child node
      Value = Max(Value, AlphaBeta(child, depth-1, alpha, beta, False))
      Alpha = Max(alpha, Value)
      If beta <= alpha
        Break
    Return Value

  Else
    Value = Infinity
    For har child node
      Value = Min(Value, AlphaBeta(child, depth-1, alpha, beta, True))
      Beta = Min(beta, Value)
      If beta <= alpha
        Break
    Return Value
          `}
        </code>
      </pre>
      <h2 className="text-2xl font-bold mb-4">Alpha-Beta Search Algorithm ke Steps</h2>
      <ol className="list-decimal pl-4 mb-6">
        <li className="mb-2">Initialization: Alpha aur beta values ko initialize karein.</li>
        <li className="mb-2">Recursion: Har node ke liye alpha-beta function ko call karein.</li>
        <li className="mb-2">Maximizing Player: Agar maximizing player hai, toh alpha value ko update karein.</li>
        <li className="mb-2">Minimizing Player: Agar minimizing player hai, toh beta value ko update karein.</li>
        <li className="mb-2">Pruning: Agar beta value alpha value se kam ya barabar hai, toh pruning karein.</li>
        <li className="mb-2">Return Value: Alpha-beta function ka return value node ke score ko represent karta hai.</li>
      </ol>
    </div>



      {/* More questions styled similarly */}
    </div>
  </div>
);

export default SectionA;
