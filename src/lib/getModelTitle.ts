type Model = {
  id: string;
  title: string;
};

const models: Model[] = [
  { id: 'chatgpt-4o', title: 'ChatGPT-4o' },
  { id: 'gemini', title: 'Gemini 1.5 Pro' },
  { id: 'claude', title: 'Claude 3.5' },
  { id: 'llama', title: 'Llama' },
];

export const getModelTitle = (modelId: string | undefined): string => {
  const model = models.find((m) => m.id === modelId);
  return model ? model.title : 'AI Chat';
};
