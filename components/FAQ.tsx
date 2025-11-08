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
      question: "Is the extension really free?",
      answer: "Yes! You can generate up to 10 video descriptions every month, completely free. For unlimited use, you can upgrade to our Pro plan."
    },
    {
      question: "What browsers are supported?",
      answer: "Currently, we officially support Google Chrome. Support for other browsers is coming soon!"
    },
    {
      question: "How accurate are the generated chapters?",
      answer: "Our AI analyzes the video's official transcript to provide the most accurate timestamps possible. Accuracy is highest on videos with clear audio and captions."
    },
    {
      question: "Is my data safe?",
      answer: "Absolutely. We only require your email for login and do not share your data. All payments are handled securely through our payment processor, Stripe."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Have Questions? We Have Answers.</h2>
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