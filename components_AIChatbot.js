import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

const config = {
  initialMessages: [{ type: 'bot', text: 'Ask about art trends or services!' }],
};

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.toLowerCase().includes('trend')) actions.handleTrend();
  };
  return children({ parse });
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleTrend = () => {
    const botMessage = createChatBotMessage('2025 trends: Vivid glows, AI curation, sustainability!');
    setState((prev) => ({ ...prev, messages: [...prev.messages, botMessage] }));
  };
  return children({ actions: { handleTrend } });
};

const AIChatbot = () => (
  <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
    <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
  </div>
);

export default AIChatbot;