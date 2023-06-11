const questionsData = [{
    "assessmentName":"MERN stack developer",
    "duration_minutes":20,
    "description":" This assessment aims to evaluate your proficiency in building web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). You will be provided with a set of tasks to complete within a specified timeframe. The assessment will test your knowledge and skills in various areas, including front-end development with React.js, server-side development with Node.js and Express.js, database management with MongoDB, and integration of these technologies to create a full-stack application. You will be required to demonstrate your understanding of concepts such as state management, routing, RESTful APIs, database queries, and user authentication. The assessment will also assess your ability to design responsive user interfaces and utilize third-party libraries effectively. Successful completion of this assessment will showcase your expertise in the MERN stack and enhance your candidacy for MERN stack developer roles. Good luck!",
   "questions": [
  {
    "question": "What is the full form of DOM?",
    "options": [
      {
        "name": "Data Object Module",
        "isCorrect": false
      },
      {
        "name": "Data Object Monitor",
        "isCorrect": false
      },
      {
        "name": "Document Object Module",
        "isCorrect": false
      },
      {
        "name": "Document Object Model",
        "isCorrect": true
      }
    ],
    "answer": "Document Object Model",
    "skill": "React.js"
  },
  {
    "question": "What is JSX in React?",
    "options": [
      {
        "name": "JavaScript XML",
        "isCorrect": true
      },
      {
        "name": "Java Serialized XML",
        "isCorrect": false
      },
      {
        "name": "JavaScript Extension",
        "isCorrect": false
      },
      {
        "name": "Java XML Syntax",
        "isCorrect": false
      }
    ],
    "answer": "JavaScript XML",
    "skill": "React.js"
  },
  {
    "question": "What is the purpose of state in React components?",
    "options": [
      {
        "name": "To store and manage data within a component",
        "isCorrect": true
      },
      {
        "name": "To define the structure of a component",
        "isCorrect": false
      },
      {
        "name": "To handle component lifecycle methods",
        "isCorrect": false
      },
      {
        "name": "To handle user interactions with the component",
        "isCorrect": false
      }
    ],
    "answer": "To store and manage data within a component",
    "skill": "React.js"
  },
  {
    "question": "What is the correct way to pass data from a parent component to a child component in React?",
    "options": [
      {
        "name": "Using props",
        "isCorrect": true
      },
      {
        "name": "Using state",
        "isCorrect": false
      },
      {
        "name": "Using context",
        "isCorrect": false
      },
      {
        "name": "Using refs",
        "isCorrect": false
      }
    ],
    "answer": "Using props",
    "skill": "React.js"
  },
  {
    "question": "What is the purpose of useEffect() hook in React?",
    "options": [
      {
        "name": "To perform side effects in functional components",
        "isCorrect": true
      },
      {
        "name": "To handle component rendering in class components",
        "isCorrect": false
      },
      {
        "name": "To manage component state",
        "isCorrect": false
      },
      {
        "name": "To handle component event handlers",
        "isCorrect": false
      }
    ],
    "answer": "To perform side effects in functional components",
    "skill": "React.js"
  },
  {
    "question": "What is Node.js?",
    "options": [
      {
        "name": "A web browser",
        "isCorrect": false
      },
      {
        "name": "A server-side runtime environment",
        "isCorrect": true
      },
      {
        "name": "A front-end framework",
        "isCorrect": false
      },
      {
        "name": "A database management system",
        "isCorrect": false
      }
    ],
    "answer": "A server-side runtime environment",
    "skill": "Node.js"
  },
  {
    "question": "What is NPM?",
    "options": [
      {
        "name": "Node Project Manager",
        "isCorrect": false
      },
      {
        "name": "Node Package Manager",
        "isCorrect": true
      },
      {
        "name": "Node Program Manager",
        "isCorrect": false
      },
      {
        "name": "Node Project Module",
        "isCorrect": false
      }
    ],
    "answer": "Node Package Manager",
    "skill": "Node.js"
  },
  {
    "question": "What is the purpose of Express.js in Node.js?",
    "options": [
      {
        "name": "To handle front-end UI rendering",
        "isCorrect": false
      },
      {
        "name": "To manage server-side routing and middleware",
        "isCorrect": true
      },
      {
        "name": "To connect to a database",
        "isCorrect": false
      },
      {
        "name": "To perform client-side scripting",
        "isCorrect": false
      }
    ],
    "answer": "To manage server-side routing and middleware",
    "skill": "Node.js"
  },
  {
    "question": "What is the role of the 'require' function in Node.js?",
    "options": [
      {
        "name": "To import external libraries and modules",
        "isCorrect": true
      },
      {
        "name": "To define custom middleware functions",
        "isCorrect": false
      },
      {
        "name": "To create a new instance of a class",
        "isCorrect": false
      },
      {
        "name": "To send HTTP requests",
        "isCorrect": false
      }
    ],
    "answer": "To import external libraries and modules",
    "skill": "Node.js"
  },
  {
    "question": "What is the purpose of the 'fs' module in Node.js?",
    "options": [
      {
        "name": "To handle file system operations",
        "isCorrect": true
      },
      {
        "name": "To perform database queries",
        "isCorrect": false
      },
      {
        "name": "To manage server-side routing",
        "isCorrect": false
      },
      {
        "name": "To perform HTTP requests",
        "isCorrect": false
      }
    ],
    "answer": "To handle file system operations",
    "skill": "Node.js"
  },
  {
    "question": "What does CSS stand for?",
    "options": [
      {
        "name": "Cascading Style Sheets",
        "isCorrect": true
      },
      {
        "name": "Cascading Script Styles",
        "isCorrect": false
      },
      {
        "name": "Cascading System Styles",
        "isCorrect": false
      },
      {
        "name": "Cascading Styling Syntax",
        "isCorrect": false
      }
    ],
    "answer": "Cascading Style Sheets",
    "skill": "CSS"
  },
  {
    "question": "Which property is used to change the text color in CSS?",
    "options": [
      {
        "name": "color",
        "isCorrect": true
      },
      {
        "name": "background-color",
        "isCorrect": false
      },
      {
        "name": "font-color",
        "isCorrect": false
      },
      {
        "name": "text-color",
        "isCorrect": false
      }
    ],
    "answer": "color",
    "skill": "CSS"
  },
  {
    "question": "What is the CSS box model used for?",
    "options": [
      {
        "name": "Defining the layout and spacing of elements",
        "isCorrect": true
      },
      {
        "name": "Adding animation effects to elements",
        "isCorrect": false
      },
      {
        "name": "Changing the font styles of elements",
        "isCorrect": false
      },
      {
        "name": "Controlling the visibility of elements",
        "isCorrect": false
      }
    ],
    "answer": "Defining the layout and spacing of elements",
    "skill": "CSS"
  },
  {
    "question": "Which CSS property is used to set the background image of an element?",
    "options": [
      {
        "name": "background-image",
        "isCorrect": true
      },
      {
        "name": "image-background",
        "isCorrect": false
      },
      {
        "name": "background-img",
        "isCorrect": false
      },
      {
        "name": "img-background",
        "isCorrect": false
      }
    ],
    "answer": "background-image",
    "skill": "CSS"
  },
  {
    "question": "What is the purpose of the 'display' property in CSS?",
    "options": [
      {
        "name": "To control how an element is rendered",
        "isCorrect": true
      },
      {
        "name": "To specify the font family of an element",
        "isCorrect": false
      },
      {
        "name": "To add animation effects to an element",
        "isCorrect": false
      },
      {
        "name": "To define the size of an element",
        "isCorrect": false
      }
    ],
    "answer": "To control how an element is rendered",
    "skill": "CSS"
  },
  {
    "question": "What is Redux?",
    "options": [
      {
        "name": "A state management library for JavaScript applications",
        "isCorrect": true
      },
      {
        "name": "A front-end framework for building user interfaces",
        "isCorrect": false
      },
      {
        "name": "A database management system",
        "isCorrect": false
      },
      {
        "name": "A server-side runtime environment",
        "isCorrect": false
      }
    ],
    "answer": "A state management library for JavaScript applications",
    "skill": "Redux"
  },
  {
    "question": "What are the three core principles of Redux?",
    "options": [
      {
        "name": "Actions, reducers, and selectors",
        "isCorrect": false
      },
      {
        "name": "Immutable state, unidirectional data flow, and single source of truth",
        "isCorrect": true
      },
      {
        "name": "Components, containers, and middleware",
        "isCorrect": false
      },
      {
        "name": "Dispatch, getState, and subscribe",
        "isCorrect": false
      }
    ],
    "answer": "Immutable state, unidirectional data flow, and single source of truth",
    "skill": "Redux"
  },
  {
    "question": "What is an action in Redux?",
    "options": [
      {
        "name": "A function that modifies the state directly",
        "isCorrect": false
      },
      {
        "name": "An object that describes a change in the state",
        "isCorrect": true
      },
      {
        "name": "A component that renders the state",
        "isCorrect": false
      },
      {
        "name": "A middleware function that intercepts actions",
        "isCorrect": false
      }
    ],
    "answer": "An object that describes a change in the state",
    "skill": "Redux"
  },
  {
    "question": "What is a reducer in Redux?",
    "options": [
      {
        "name": "A function that handles side effects",
        "isCorrect": false
      },
      {
        "name": "A function that combines multiple actions into one",
        "isCorrect": false
      },
      {
        "name": "A function that calculates the new state based on the previous state and an action",
        "isCorrect": true
      },
      {
        "name": "A function that connects React components to the Redux store",
        "isCorrect": false
      }
    ],
    "answer": "A function that calculates the new state based on the previous state and an action",
    "skill": "Redux"
  },
  {
    "question": "What is the purpose of the connect() function in React-Redux?",
    "options": [
      {
        "name": "To define actions and action creators",
        "isCorrect": false
      },
      {
        "name": "To connect a React component to the Redux store",
        "isCorrect": true
      },
      {
        "name": "To define reducers and combine them into a root reducer",
        "isCorrect": false
      },
      {
        "name": "To define selectors for accessing data from the Redux store",
        "isCorrect": false
      }
    ],
    "answer": "To connect a React component to the Redux store",
    "skill": "Redux"
  },
  {
    "question": "What is MongoDB?",
    "options": [
      {
        "name": "A relational database management system",
        "isCorrect": false
      },
      {
        "name": "A NoSQL document database",
        "isCorrect": true
      },
      {
        "name": "A front-end JavaScript framework",
        "isCorrect": false
      },
      {
        "name": "A server-side runtime environment",
        "isCorrect": false
      }
    ],
    "answer": "A NoSQL document database",
    "skill": "MongoDB"
  },
  {
    "question": "What is a document in MongoDB?",
    "options": [
      {
        "name": "A collection of related tables",
        "isCorrect": false
      },
      {
        "name": "A record in a database table",
        "isCorrect": false
      },
      {
        "name": "A JSON-like data structure",
        "isCorrect": true
      },
      {
        "name": "A function that performs database operations",
        "isCorrect": false
      }
    ],
    "answer": "A JSON-like data structure",
    "skill": "MongoDB"
  },
  {
    "question": "Which query language is used in MongoDB?",
    "options": [
      {
        "name": "SQL",
        "isCorrect": false
      },
      {
        "name": "NoSQL",
        "isCorrect": false
      },
      {
        "name": "MongoQL",
        "isCorrect": false
      },
      {
        "name": "MongoDB Query Language (MQL)",
        "isCorrect": true
      }
    ],
    "answer": "MongoDB Query Language (MQL)",
    "skill": "MongoDB"
  },
  {
    "question": "What is the purpose of an index in MongoDB?",
    "options": [
      {
        "name": "To define the structure of a collection",
        "isCorrect": false
      },
      {
        "name": "To perform advanced data analysis",
        "isCorrect": false
      },
      {
        "name": "To improve query performance",
        "isCorrect": true
      },
      {
        "name": "To handle server-side routing",
        "isCorrect": false
      }
    ],
    "answer": "To improve query performance",
    "skill": "MongoDB"
  },
  {
    "question": "What is sharding in MongoDB?",
    "options": [
      {
        "name": "A data modeling technique",
        "isCorrect": false
      },
      {
        "name": "A process of distributing data across multiple servers",
        "isCorrect": true
      },
      {
        "name": "A way to define relationships between collections",
        "isCorrect": false
      },
      {
        "name": "A method for validating data before insertion",
        "isCorrect": false
      }
    ],
    "answer": "A process of distributing data across multiple servers",
    "skill": "MongoDB"
  }
]
}];
export default questionsData;