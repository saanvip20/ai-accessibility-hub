const tools = [
  {
    id: 1,
    name: "ChatGPT",
    tasks: ["Reading", "Writing", "Learning", "Organisation"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "A conversational AI assistant that explains concepts, drafts content, answers questions and helps organise tasks.",
    accessibilityFeatures: [
      "Simple language explanations",
      "Voice conversations",
      "Step-by-step guidance",
    ],
    limitations: [
      "Requires internet connection",
      "May not be fully compatible with every screen reader feature",
    ],
    prompts: [
      "Explain this in simple language.",
      "Summarise this article.",
      "Help me organise today's tasks.",
    ],
    beginnerGuide: {
  whatIsIt:
    "ChatGPT is an AI assistant that you can chat with just like talking to another person. It can answer questions, explain difficult ideas, help you write, summarise information and organise tasks.",

  beforeYouBegin: [
    "A computer, tablet or smartphone",
    "A stable internet connection",
    "An email address to create a free account",
    "About 5–10 minutes"
  ],

  setup: [
    "Click the 'Visit Official Website' button below.",
    "Select 'Sign Up' if you don't already have an account.",
    "Create your account using your email address.",
    "Verify your email if asked.",
    "Log into ChatGPT.",
    "Click 'New Chat' on the left side of the screen.",
    "Click inside the message box at the bottom.",
    "Type your question and press Enter."
  ],

  firstPrompt:
    "Explain climate change in simple language as if I am 12 years old.",

  nextSteps: [
    "Summarise a PDF.",
    "Write an email.",
    "Organise today's tasks.",
    "Ask follow-up questions.",
    "Translate text into another language."
  ]
},
safetyTips: [
  "Do not share passwords, bank details or personal identification numbers.",
  "Avoid uploading sensitive personal documents unless necessary.",
  "Double-check important information, as AI can sometimes make mistakes.",
  "Ask a trusted person for help if you are unsure about the response.",
],
    alternatives: [2, 5, 3],
    website: "https://chatgpt.com",
  },

  {
    id: 2,
    name: "Google Gemini",
    tasks: ["Reading", "Writing", "Learning"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "Google's AI assistant for writing, explanations, brainstorming and answering questions.",
    accessibilityFeatures: [
      "Simple explanations",
      "Voice input",
      "Multimodal support",
    ],
    limitations: [
      "Requires Google account for full functionality",
    ],
    prompts: [
      "Summarise this document.",
      "Explain this concept.",
    ],
    beginnerGuide: {
  whatIsIt:
    "Google Gemini is Google's AI assistant that helps answer questions, explain concepts, write text and brainstorm ideas.",

  beforeYouBegin: [
    "A Google account",
    "Internet connection",
    "Computer or smartphone",
    "5 minutes"
  ],

  setup: [
    "Click 'Visit Official Website'.",
    "Sign in using your Google account.",
    "Read and accept the terms if prompted.",
    "Click on the chat box.",
    "Type your question.",
    "Press Enter."
  ],

  firstPrompt:
    "Summarise this article in easy-to-understand language.",

  nextSteps: [
    "Brainstorm ideas.",
    "Explain difficult homework.",
    "Write emails.",
    "Create study notes.",
    "Ask follow-up questions."
  ]
},

safetyTips: [
  "Do not share sensitive personal information.",
  "Verify important facts.",
  "Keep your Google account secure.",
  "Remember AI can make mistakes."
],
    alternatives: [1, 5, 3],
    website: "https://gemini.google.com",
  },

  {
    id: 3,
    name: "NotebookLM",
    tasks: ["Reading", "Learning"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Intermediate",
    description:
      "Creates summaries, study notes and answers questions from uploaded documents.",
    accessibilityFeatures: [
      "Audio Overviews",
      "Document summaries",
      "Question answering",
    ],
    limitations: [
      "Requires uploaded documents",
    ],
    prompts: [
      "Summarise my notes.",
      "Create revision questions.",
    ],
   beginnerGuide: {
  whatIsIt:
    "NotebookLM helps you understand your own documents. Instead of searching the internet, it answers questions using the files you upload.",

  beforeYouBegin: [
    "Google account",
    "Internet connection",
    "A document, PDF or notes to upload",
    "10 minutes"
  ],

  setup: [
    "Open NotebookLM.",
    "Sign in with Google.",
    "Click 'Create New Notebook'.",
    "Upload your document.",
    "Wait for the upload to finish.",
    "Type a question about your document."
  ],

  firstPrompt:
    "Summarise this document into five key points.",

  nextSteps: [
    "Generate revision questions.",
    "Create flashcards.",
    "Find important definitions.",
    "Explain difficult sections.",
    "Create a study guide."
  ]
},

safetyTips: [
  "Only upload documents you are comfortable sharing.",
  "Review summaries for accuracy.",
  "Keep backups of your original files.",
  "Avoid uploading confidential documents."
],
    alternatives: [1, 2, 15],
    website: "https://notebooklm.google",
  },

  {
    id: 4,
    name: "Grammarly",
    tasks: ["Writing"],
    accessibilityNeeds: ["Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "Improves grammar, spelling and writing clarity.",
    accessibilityFeatures: [
      "Writing suggestions",
      "Tone detection",
    ],
    limitations: [
      "Some features require Premium",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Grammarly checks your writing for spelling, grammar, punctuation and clarity. It also suggests ways to make your writing easier to understand.",

  beforeYouBegin: [
    "Computer or phone",
    "Internet connection",
    "Grammarly account",
    "A piece of writing to edit"
  ],

  setup: [
    "Open Grammarly.",
    "Create a free account.",
    "Open the editor.",
    "Paste your writing.",
    "Review each suggestion carefully.",
    "Accept or ignore each change."
  ],

  firstPrompt:
    "Rewrite this paragraph so it sounds more professional and easy to understand.",

  nextSteps: [
    "Check emails before sending.",
    "Improve essays.",
    "Rewrite difficult sentences.",
    "Improve tone.",
    "Correct spelling mistakes."
  ]
},

safetyTips: [
  "Review every suggestion before accepting it.",
  "Do not rely entirely on AI edits.",
  "Keep copies of your original writing.",
  "Avoid uploading sensitive information."
],
    alternatives: [1, 5],
    website: "https://www.grammarly.com",
  },

  {
    id: 5,
    name: "Microsoft Copilot",
    tasks: ["Reading", "Writing", "Learning", "Organisation"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "AI assistant integrated with Microsoft 365 for productivity and writing.",
    accessibilityFeatures: [
      "Document summarisation",
      "Writing assistance",
      "Task support",
    ],
    limitations: [
      "Some features require Microsoft 365",
    ],
    prompts: [
      "Summarise this document.",
      "Draft an email.",
    ],
   beginnerGuide: {
  whatIsIt:
    "Microsoft Copilot is an AI assistant that helps you write documents, summarise information, answer questions and complete everyday tasks. It works well with Microsoft Word, PowerPoint, Excel and Outlook.",

  beforeYouBegin: [
    "A computer, tablet or smartphone",
    "Internet connection",
    "Microsoft account",
    "About 5–10 minutes"
  ],

  setup: [
    "Click 'Visit Official Website' below.",
    "Sign in with your Microsoft account.",
    "If you do not have an account, create one using your email.",
    "Once signed in, click inside the chat box.",
    "Type your question or request.",
    "Press Enter to receive a response.",
    "If using Microsoft Word or PowerPoint, open your document and select Copilot if available."
  ],

  firstPrompt:
    "Summarise this document into five easy-to-read bullet points.",

  nextSteps: [
    "Draft an email.",
    "Rewrite a paragraph.",
    "Create a PowerPoint outline.",
    "Summarise meeting notes.",
    "Generate ideas for a project."
  ]
},

safetyTips: [
  "Check important information.",
  "Do not upload confidential work documents.",
  "Protect your Microsoft account.",
  "Review AI-generated content before using it."
],
    alternatives: [1, 2, 3],
    website: "https://copilot.microsoft.com",
  },

  {
    id: 6,
    name: "Seeing AI",
    tasks: ["Read visual text and identify objects", "Reading"],
    accessibilityNeeds: ["Vision"],
    difficulty: "Beginner",
    description:
      "Reads text, recognises objects, people and scenes using a smartphone camera.",
    accessibilityFeatures: [
      "OCR",
      "Object recognition",
      "Scene descriptions",
    ],
    limitations: [
      "Requires mobile device",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Seeing AI is a smartphone app designed for people who are blind or have low vision. It can read text aloud, recognise objects, identify products and describe scenes using your phone's camera.",

  beforeYouBegin: [
    "An iPhone with camera access",
    "Internet connection for some features",
    "A printed document or object to test",
    "About 5 minutes"
  ],

  setup: [
    "Download Seeing AI from the App Store.",
    "Open the app.",
    "Allow camera access when asked.",
    "Swipe between the available modes.",
    "Select 'Short Text' to read printed text.",
    "Point your phone camera at the document.",
    "Wait while the app reads the text aloud."
  ],

  firstPrompt:
    "Point your phone at a document and listen as it reads the text aloud.",

  nextSteps: [
    "Read restaurant menus.",
    "Read letters and forms.",
    "Recognise everyday objects.",
    "Identify products using barcodes.",
    "Explore scene descriptions."
  ]
},

safetyTips: [
  "Use in a safe environment.",
  "Be cautious when using while walking.",
  "Check important information independently.",
  "Keep your phone charged."
],
    alternatives: [9, 8],
    website: "https://www.microsoft.com/ai/seeing-ai",
  },

  {
    id: 7,
    name: "Be My Eyes",
    tasks: ["Read visual text and identify objects"],
    accessibilityNeeds: ["Vision"],
    difficulty: "Beginner",
    description:
      "Uses AI to describe surroundings, objects and images for blind or low-vision users.",
    accessibilityFeatures: [
      "Image descriptions",
      "Object recognition",
    ],
    limitations: [
      "Best used with a smartphone camera",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Be My Eyes connects people who are blind or have low vision with AI-powered image descriptions and, when needed, sighted volunteers for visual assistance.",

  beforeYouBegin: [
    "Smartphone",
    "Internet connection",
    "Camera permission enabled",
    "About 5 minutes"
  ],

  setup: [
    "Download Be My Eyes.",
    "Create a free account.",
    "Allow camera access.",
    "Open the 'Be My AI' feature.",
    "Point your camera at an object or scene.",
    "Read or listen to the description provided."
  ],

  firstPrompt:
    "Describe what is in front of me and identify any important objects.",

  nextSteps: [
    "Read labels on products.",
    "Identify household items.",
    "Describe unfamiliar environments.",
    "Read signs.",
    "Ask a volunteer for help if needed."
  ]
},
safetyTips: [
  "Do not rely on AI in emergencies.",
  "Be aware of your surroundings.",
  "Use in combination with other assistive tools.",
  "Protect your privacy when taking photos."
],
    alternatives: [6, 8],
    website: "https://www.bemyeyes.com",
  },

  {
    id: 8,
    name: "Envision AI",
    tasks: ["Read visual text and identify objects", "Reading"],
    accessibilityNeeds: ["Vision"],
    difficulty: "Intermediate",
    description:
      "AI-powered app that reads text and recognises people and objects.",
    accessibilityFeatures: [
      "OCR",
      "Object recognition",
      "Document reading",
    ],
    limitations: [
      "Some features require subscription",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Envision AI is an accessibility app that reads printed text, recognises people and objects, and helps users understand their surroundings using artificial intelligence.",

  beforeYouBegin: [
    "Smartphone",
    "Camera permission enabled",
    "Internet connection",
    "About 5 minutes"
  ],

  setup: [
    "Install Envision AI.",
    "Create an account if required.",
    "Allow camera access.",
    "Choose the feature you would like to use.",
    "Point your camera at the document or object.",
    "Listen to or read the information provided."
  ],

  firstPrompt:
    "Read the text on this page aloud and identify any headings.",

  nextSteps: [
    "Read books and letters.",
    "Recognise familiar people.",
    "Identify everyday objects.",
    "Read signs while travelling.",
    "Explore the scene description feature."
  ]
},

safetyTips: [
  "Check important information.",
  "Use safely in unfamiliar places.",
  "Keep the camera steady.",
  "Protect personal information."
],
    alternatives: [6, 9],
    website: "https://www.letsenvision.com",
  },

  {
    id: 9,
    name: "Lookout",
    tasks: ["Read visual text and identify objects", "Reading"],
    accessibilityNeeds: ["Vision"],
    difficulty: "Beginner",
    description:
      "Google app that identifies objects, reads labels and recognises text.",
    accessibilityFeatures: [
      "OCR",
      "Object detection",
      "Barcode reading",
    ],
    limitations: [
      "Android only",
      "In group conversations, captions may merge speakers instead of clearly identifying who said each line.",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Lookout is a Google accessibility app that helps people who are blind or have low vision identify objects, read documents, recognise products and understand their surroundings using their phone's camera.",

  beforeYouBegin: [
    "An Android phone",
    "Internet connection for some features",
    "Camera permission enabled",
    "About 5 minutes"
  ],

  setup: [
    "Download Lookout from the Google Play Store.",
    "Open the app.",
    "Allow camera access when asked.",
    "Choose a mode such as 'Read Text', 'Explore' or 'Food Labels'.",
    "Point your phone camera at the object or document.",
    "Listen to the spoken description or instructions."
  ],

  firstPrompt:
    "Open 'Read Text' mode and point your phone at a printed page to hear it read aloud.",

  nextSteps: [
    "Read letters and documents.",
    "Identify food labels.",
    "Recognise household objects.",
    "Explore unfamiliar rooms.",
    "Use barcode scanning while shopping."
  ]
},

safetyTips: [
  "Stay aware of your surroundings.",
  "Keep your device updated.",
  "Verify important information.",
  "Do not rely solely on AI for safety."
],
    alternatives: [6, 8],
    website: "https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal",
  },

  {
    id: 10,
    name: "Live Transcribe",
    tasks: ["Follow spoken discussions"],
    accessibilityNeeds: ["Hearing"],
    difficulty: "Beginner",
    description:
      "Provides real-time captions during conversations.",
    accessibilityFeatures: [
      "Live captions",
      "Speech recognition",
    ],
    limitations: [
      "Android only",
      "In group conversations, captions may merge speakers instead of clearly identifying who said each line.",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Live Transcribe converts spoken conversations into live captions, making it easier for people who are deaf or hard of hearing to follow discussions.",

  beforeYouBegin: [
    "An Android phone",
    "Microphone permission enabled",
    "Internet connection for best performance",
    "A quiet environment if possible"
  ],

  setup: [
    "Install Live Transcribe from the Google Play Store.",
    "Open the app.",
    "Allow microphone access.",
    "Place your phone close to the person speaking.",
    "Watch the live captions appear on the screen.",
    "Adjust the text size if needed."
  ],

  firstPrompt:
    "Ask someone to speak normally and watch the live captions appear on your screen.",

  nextSteps: [
    "Use during conversations.",
    "Follow classroom discussions.",
    "Use during appointments.",
    "Read captions during meetings.",
    "Save important conversations if needed."
  ]
},

safetyTips: [
  "Ask permission before recording conversations where required.",
  "Check captions for accuracy.",
  "Keep the microphone unobstructed.",
  "Use in a quiet environment when possible."
],
    alternatives: [11, 12],
    website: "https://play.google.com/store/apps/details?id=com.google.audio.hearing.visualization.accessibility.scribe",
  },

  {
    id: 11,
    name: "Ava",
    tasks: ["Follow spoken discussions"],
    accessibilityNeeds: ["Hearing"],
    difficulty: "Beginner",
    description:
      "Provides live captions for conversations, meetings and classes.",
    accessibilityFeatures: [
      "Real-time captions",
      "Speaker identification",
    ],
    limitations: [
      "Requires internet connection",
      "Caption accuracy can vary with background noise, overlapping speech and how clearly people speak.",
    ],
    prompts: [],
   beginnerGuide: {
  whatIsIt:
    "Ava provides real-time captions during conversations, meetings and classes. It can identify different speakers and display what each person says.",

  beforeYouBegin: [
    "Computer or smartphone",
    "Internet connection",
    "Microphone permission",
    "Free Ava account"
  ],

  setup: [
    "Create an Ava account.",
    "Open the app.",
    "Allow microphone access.",
    "Start a conversation or meeting.",
    "Place your device where everyone can be heard.",
    "Read the captions as people speak."
  ],

  firstPrompt:
    "Start a conversation and watch how Ava captions each speaker in real time.",

  nextSteps: [
    "Caption lectures.",
    "Caption meetings.",
    "Use in group discussions.",
    "Review saved conversations.",
    "Share captions with others."
  ]
},
safetyTips: [
  "Confirm important details with the speaker.",
  "Protect meeting privacy.",
  "Check captions for errors.",
  "Use secure internet."
],
    alternatives: [10, 12],
    website: "https://www.ava.me",
  },

  {
    id: 12,
    name: "Otter.ai",
    tasks: ["Learning", "Follow spoken discussions"],
    accessibilityNeeds: ["Hearing", "Cognitive / Learning"],
    difficulty: "Intermediate",
    description:
      "Automatically transcribes meetings and generates summaries.",
    accessibilityFeatures: [
      "Meeting transcription",
      "AI summaries",
    ],
    limitations: [
      "Free plan has monthly limits",
      "Transcription and speaker labels may be inaccurate, especially with overlapping speech or unclear audio.",
    ],
    prompts: [],
   beginnerGuide: {
  whatIsIt:
    "Otter.ai records conversations, creates transcripts and automatically generates summaries so you can review meetings or lectures later.",

  beforeYouBegin: [
    "Computer or smartphone",
    "Internet connection",
    "Otter account",
    "Permission to record if required"
  ],

  setup: [
    "Create an Otter.ai account.",
    "Open the dashboard.",
    "Click 'Record' or join an online meeting.",
    "Allow microphone access.",
    "Let Otter record the conversation.",
    "Read the transcript and AI-generated summary when finished."
  ],

  firstPrompt:
    "Record a short conversation and review the automatic summary afterwards.",

  nextSteps: [
    "Record lectures.",
    "Summarise meetings.",
    "Search past transcripts.",
    "Share notes with teammates.",
    "Highlight important moments."
  ]
},

safetyTips: [
  "Get permission before recording.",
  "Review transcripts for mistakes.",
  "Store recordings securely.",
  "Avoid sharing confidential meetings."
],
    alternatives: [10, 11],
    website: "https://otter.ai",
  },

  {
    id: 13,
    name: "Motion",
    tasks: ["Organisation"],
    accessibilityNeeds: ["Cognitive / Learning"],
    difficulty: "Intermediate",
    description:
      "AI planner that automatically schedules tasks and meetings.",
    accessibilityFeatures: [
      "Automatic scheduling",
      "Task prioritisation",
    ],
    limitations: [
      "Paid subscription",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Motion is an AI-powered planner that automatically organises your tasks, calendar and meetings. It creates a schedule for you so you can spend less time planning and more time completing your work.",

  beforeYouBegin: [
    "A computer or smartphone",
    "Internet connection",
    "An email address",
    "Your calendar (Google or Outlook)"
  ],

  setup: [
    "Click 'Visit Official Website'.",
    "Create a Motion account.",
    "Connect your Google or Outlook calendar.",
    "Allow Motion to access your calendar.",
    "Add a few tasks you need to complete.",
    "Let Motion automatically create your schedule.",
    "Review today's schedule."
  ],

  firstPrompt:
    "Create a study schedule for this week with two hours of revision every evening.",

  nextSteps: [
    "Add homework deadlines.",
    "Schedule personal reminders.",
    "Automatically plan meetings.",
    "Rearrange tasks when plans change.",
    "Review your daily schedule each morning."
  ]
},

safetyTips: [
  "Review your schedule regularly.",
  "Keep calendar information private.",
  "Double-check deadlines.",
  "Update completed tasks."
],
    alternatives: [14, 5],
    website: "https://www.usemotion.com",
  },

  {
    id: 14,
    name: "Notion AI",
    tasks: ["Writing", "Organisation", "Learning"],
    accessibilityNeeds: ["Cognitive / Learning"],
    difficulty: "Intermediate",
    description:
      "Helps organise notes, generate content and summarise information.",
    accessibilityFeatures: [
      "Summaries",
      "Content generation",
      "Note organisation",
    ],
    limitations: [
      "Requires Notion account",
      "The reviewer noted reports of screen-reader accessibility concerns; test it with the intended assistive technology before relying on it.",
    ],
    prompts: [
      "Summarise these notes.",
      "Create a study plan.",
    ],
   beginnerGuide: {
  whatIsIt:
    "Notion AI helps you organise notes, write documents, summarise information and manage projects. It works inside the Notion workspace to help you stay organised.",

  beforeYouBegin: [
    "Computer or smartphone",
    "Internet connection",
    "Free Notion account",
    "About 10 minutes"
  ],

  setup: [
    "Create a Notion account.",
    "Open your workspace.",
    "Create a new page.",
    "Click anywhere on the page.",
    "Type '/' and choose 'Ask AI' or use the AI button.",
    "Type your request.",
    "Review the generated response."
  ],

  firstPrompt:
    "Summarise these meeting notes into five bullet points.",

  nextSteps: [
    "Create study notes.",
    "Generate project ideas.",
    "Write meeting summaries.",
    "Create to-do lists.",
    "Plan assignments."
  ]
},

safetyTips: [
  "Review AI-generated content.",
  "Avoid storing sensitive information.",
  "Keep your workspace organised.",
  "Back up important notes."
],
    alternatives: [13, 5],
    website: "https://www.notion.so/product/ai",
  },

  {
    id: 15,
    name: "Speechify",
    tasks: ["Reading", "Learning"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "Converts written text into natural-sounding speech.",
    accessibilityFeatures: [
      "Text-to-speech",
      "Adjustable reading speed",
    ],
    limitations: [
      "Premium voices require subscription",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "Speechify converts written text into spoken audio. It can read books, articles, PDFs and websites aloud, making reading easier for many users.",

  beforeYouBegin: [
    "Computer, tablet or smartphone",
    "Internet connection",
    "Speechify account",
    "A document or webpage to read"
  ],

  setup: [
    "Open Speechify.",
    "Create a free account.",
    "Upload a document or paste text.",
    "Choose a voice you like.",
    "Adjust the reading speed if needed.",
    "Press the Play button.",
    "Listen as the text is read aloud."
  ],

  firstPrompt:
    "Upload a PDF and listen to the first page being read aloud.",

  nextSteps: [
    "Listen to textbooks.",
    "Read websites aloud.",
    "Adjust reading speed.",
    "Try different voices.",
    "Save documents for later."
  ]
},

safetyTips: [
  "Use headphones in public.",
  "Protect documents you upload.",
  "Review important information yourself.",
  "Adjust speed for comfort."
],
    alternatives: [16, 6],
    website: "https://speechify.com",
  },

  {
    id: 16,
    name: "NaturalReader",
    tasks: ["Reading", "Learning"],
    accessibilityNeeds: ["Vision", "Cognitive / Learning"],
    difficulty: "Beginner",
    description:
      "Reads documents, PDFs and webpages aloud.",
    accessibilityFeatures: [
      "Text-to-speech",
      "OCR",
    ],
    limitations: [
      "Some premium voices are paid",
    ],
    prompts: [],
    beginnerGuide: {
  whatIsIt:
    "NaturalReader is a text-to-speech tool that reads documents, webpages and PDFs aloud using natural-sounding voices. It can make reading easier for users with vision or learning needs.",

  beforeYouBegin: [
    "Computer or smartphone",
    "Internet connection",
    "NaturalReader account (optional for basic features)",
    "A document or webpage"
  ],

  setup: [
    "Open NaturalReader.",
    "Upload your document or paste text.",
    "Choose your preferred reading voice.",
    "Adjust the reading speed if needed.",
    "Press the Play button.",
    "Follow the highlighted text as it is read aloud."
  ],

  firstPrompt:
    "Upload a PDF and have NaturalReader read the first page aloud.",

  nextSteps: [
    "Listen to homework.",
    "Read long articles.",
    "Adjust voice speed.",
    "Use different voice options.",
    "Practice following highlighted text while listening."
  ]
},

safetyTips: [
  "Protect private documents.",
  "Check OCR accuracy.",
  "Choose a comfortable reading speed.",
  "Review important content."
],
    alternatives: [15, 6],
    website: "https://www.naturalreaders.com",
  },
];

export default tools;