const resourceDetails = {
  1: {
    official: { title: "ChatGPT Help Center", url: "https://help.openai.com/en/collections/3742473-chatgpt" },
    tutorialQuery: "ChatGPT beginner tutorial accessibility voice image upload",
    learning: "Find help with starting a chat, using voice, uploading supported files and managing settings."
  },
  2: {
    official: { title: "Google Gemini Help", url: "https://support.google.com/gemini/" },
    tutorialQuery: "Google Gemini beginner tutorial accessibility voice",
    learning: "Look up current instructions for chats, voice features, account access and settings."
  },
  3: {
    official: { title: "NotebookLM Help", url: "https://support.google.com/notebooklm/" },
    tutorialQuery: "Google NotebookLM beginner tutorial upload sources audio overview",
    learning: "Learn how to create a notebook, add sources, ask questions and generate Audio Overviews."
  },
  4: {
    official: { title: "Grammarly Support", url: "https://support.grammarly.com/" },
    tutorialQuery: "Grammarly beginner tutorial accessibility browser extension",
    learning: "Find setup help for the editor, browser extension and writing suggestions."
  },
  5: {
    official: { title: "Microsoft Copilot Help", url: "https://support.microsoft.com/copilot" },
    tutorialQuery: "Microsoft Copilot beginner tutorial accessibility screen reader",
    learning: "Explore Copilot basics and accessibility guidance for Microsoft products."
  },
  6: {
    official: { title: "Seeing AI — Microsoft Accessibility", url: "https://www.microsoft.com/ai/seeing-ai" },
    tutorialQuery: "Microsoft Seeing AI app tutorial blind low vision",
    learning: "Learn about Seeing AI's camera-based descriptions and reading features. Availability can vary by device and region."
  },
  7: {
    official: { title: "Be My Eyes Help Center", url: "https://support.bemyeyes.com/" },
    tutorialQuery: "Be My Eyes Be My AI tutorial blind low vision",
    learning: "Find instructions for Be My AI image descriptions and connecting with a volunteer."
  },
  8: {
    official: { title: "Envision Support", url: "https://support.letsenvision.com/" },
    tutorialQuery: "Envision AI app tutorial blind low vision",
    learning: "Look for current guidance for Envision's reading and scene-description features."
  },
  9: {
    official: { title: "Google Lookout — Accessibility Help", url: "https://support.google.com/accessibility/android/" },
    tutorialQuery: "Google Lookout Android app tutorial blind low vision",
    learning: "Find Android accessibility guidance and instructions relevant to Lookout."
  },
  10: {
    official: { title: "Google Accessibility Help", url: "https://support.google.com/accessibility/android/" },
    tutorialQuery: "Android Live Transcribe tutorial hearing accessibility",
    learning: "Learn how to enable Live Transcribe, select language options and adjust captions."
  },
  11: {
    official: { title: "Ava Help Center", url: "https://help.ava.me/en/" },
    tutorialQuery: "Ava live captions tutorial deaf hard of hearing",
    learning: "Find setup, meeting-captioning and troubleshooting instructions for Ava."
  },
  12: {
    official: { title: "Otter Help Center", url: "https://help.otter.ai/hc/en-us" },
    tutorialQuery: "Otter AI beginner tutorial transcribe audio meeting notes",
    learning: "Use the official quick-start and troubleshooting articles for recording, importing and reviewing transcripts."
  },
  13: {
    official: { title: "Motion Help Center", url: "https://help.motionapp.com/en/" },
    tutorialQuery: "Motion AI task planner beginner tutorial",
    learning: "Find current setup guidance for tasks, calendars, scheduling and planning features."
  },
  14: {
    official: { title: "Notion AI Help Center", url: "https://www.notion.com/help/category/notion-ai/all" },
    tutorialQuery: "Notion AI beginner tutorial notes summarise pages",
    learning: "Explore official guides for using Notion AI with notes, documents and workspace content."
  },
  15: {
    official: { title: "Speechify Help Center", url: "https://speechify.com/support/" },
    tutorialQuery: "Speechify text to speech beginner tutorial accessibility",
    learning: "Find instructions for reading text aloud, choosing voices and adjusting playback."
  },
  16: {
    official: { title: "NaturalReader Help Center", url: "https://help.naturalreaders.com/en/" },
    tutorialQuery: "NaturalReader text to speech beginner tutorial PDF webpage",
    learning: "Find instructions for reading documents, images and webpages aloud."
  }
};

export function getToolResources(tool) {
  const details = resourceDetails[tool.id] || {};
  const query = details.tutorialQuery || `${tool.name} beginner tutorial`;
  return [
    {
      type: "official",
      title: details.official?.title || `${tool.name} official website`,
      description: details.learning || "Check the provider's current instructions, supported features and troubleshooting steps.",
      url: details.official?.url || tool.website
    },
    {
      type: "video",
      title: `YouTube tutorial search: ${tool.name}`,
      description: "Opens YouTube search results, not a single endorsed video. Choose a recent tutorial from the official provider or a reputable accessibility educator, and check that the version matches your device.",
      url: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    },
    {
      type: "accessibility",
      title: "W3C Web Accessibility Tutorials",
      description: "Practical guidance about accessible content, forms, structure and interface navigation. Useful when a website or tutorial itself is difficult to navigate.",
      url: "https://www.w3.org/WAI/tutorials/"
    }
  ];
}
