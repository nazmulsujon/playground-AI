import { LayoutGrid, Bot, Sparkles, Brain, Infinity, HeadphonesIcon, Users, Share2, Settings, Globe, CloudLightning, Wind, Fish } from 'lucide-react';

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  enabled: boolean;
  category: 'chat' | 'code' | 'image';
}

export interface UserData {
  email: string;
  usage: {
    advanced: string;
    resetDate: string;
    endDate: string;
  };
}

export const sidebarMenuItems = [
  {
    title: 'Primary',
    items: [
      {
        label: 'PlayGround',
        icon: LayoutGrid,
        href: '/',
      },
    ],
  },
  {
    title: 'AI Models',
    items: [
      {
        label: 'ChatGPT-4o',
        icon: Bot,
        href: '/model/chatgpt-4o',
      },
      {
        label: 'Gemini 1.5 Pro',
        icon: Sparkles,
        href: '/model/gemini',
      },
      {
        label: 'Claude 3.5',
        icon: Brain,
        href: '/model/claude',
      },
      {
        label: 'Llama',
        icon: Infinity,
        href: '/model/llama',
      },
      {
        label: 'DeepSeek',
        icon: Fish,
        href: '/model/deepseek',
      },
      {
        label: 'Mistral',
        icon: Wind,
        href: '/model/mistral',
      },
      {
        label: 'Groq',
        icon: CloudLightning,
        href: '/model/groq',
      },
      {
        label: 'Cohere',
        icon: Globe,
        href: '/model/cohere',
      },
    ],
  },
];

export const sidebarBottomItems = [
  { label: 'Support', href: '#', icon: HeadphonesIcon },
  { label: 'Referrals', href: 'referrals', icon: Users },
  { label: 'Affiliate Program', href: '#', icon: Share2 },
  { label: 'Settings', href: 'settings', icon: Settings },
];

export const aiModelsData: AIModel[] = [
  // Chat Models
  { id: '1', name: 'ChatGPT-4e', provider: 'OpenAI', enabled: true, category: 'chat' },
  { id: '2', name: 'Claude 1.5 Pro', provider: 'Google', enabled: true, category: 'chat' },
  { id: '3', name: 'Gemini 2.0 Flash Experimental', provider: 'Google', enabled: false, category: 'chat' },
  { id: '4', name: 'Claude 3.5 Sonnet', provider: 'Anthropic', enabled: true, category: 'chat' },
  { id: '5', name: 'Llama 3.5 70B', provider: 'Meta', enabled: true, category: 'chat' },
  { id: '6', name: 'Mistral Large', provider: 'Mistral', enabled: false, category: 'chat' },

  // Code Models
  { id: '7', name: 'PaLM 2 Code Chat 32k', provider: 'Google', enabled: false, category: 'code' },
  { id: '8', name: 'CodeLlama Manila', provider: 'Meta', enabled: false, category: 'code' },
  { id: '9', name: 'Hermes 2.5GB Instruct', provider: 'Neural', enabled: false, category: 'code' },

  // Image Models
  { id: '10', name: 'DALL-E 3', provider: 'OpenAI', enabled: true, category: 'image' },
  { id: '11', name: 'FLUX Realistic LoRA', provider: 'Stable Diffusion', enabled: false, category: 'image' },
];

export const userData: UserData = {
  email: 'nazmul@gmail.com',
  usage: {
    advanced: '13 / 12',
    resetDate: 'Feb 23rd 2025',
    endDate: 'Jan 30th 2145',
  },
};
