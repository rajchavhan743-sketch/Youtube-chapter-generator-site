import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <h3 className="text-xl font-semibold text-white mb-3">{question}</h3>
    <p className="text-gray-400 leading-relaxed">{answer}</p>
  </div>
);

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI chapter generation work?",
      answer: "Our extension leverages the power of the best and most premium AI models available, including Anthropic Claude Opus 4.1 and GPT-5. These models analyze the video's transcript to identify key topics and transitions, ensuring highly accurate and relevant chapter titles and timestamps."
    },
    {
      question: "Is this extension safe to use? Will it access my YouTube account?",
      answer: "Yes, it's completely safe. The extension does not require you to log in to your YouTube account and does not ask for any permissions to access your personal data. It only reads publicly available video information and transcripts."
    },
    {
      question: "What languages does the extension support?",
      answer: "Our extension supports multiple languages. Thanks to our advanced AI models, we can accurately process transcripts and generate chapters for videos in a wide variety of languages, not just English."
    },
    {
      question: "What happens when I run out of free generations for the month?",
      answer: "The Free plan includes 5 generations per month. If you reach this limit, you will need to wait until the first day of the next month for your quota to reset, or you can upgrade to the Pro plan for unlimited generations."
    },
    {
      question: "Can I edit the chapters after they are generated?",
      answer: "Absolutely! The extension provides you with a fully formatted text block. You can copy it and then paste it into any text editor (or directly into the YouTube description box) to make any edits or adjustments you like before saving."
    },
     {
      question: "How accurate are the generated chapters?",
      answer: "The accuracy is very high, especially for videos with clear audio and a well-structured narrative. By using top-tier AI like Claude Opus 4.1 and GPT-5, we ensure the highest possible accuracy, even for videos with background noise or overlapping speech."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;