'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [openItems, setOpenItems] = useState(new Set());

  const accordionData = [
    {
      question: "Q1. Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Sit mauris ante sed ullamcorper adipiscing. Cras tortor nunc sed risus sit dictum gravida nunc facilisis. Vulputate sit risus ornare integer ut faucibus posuere. Fringilla eros pulvinar lectus arcu adipiscing nunc. At posuere faucibus urna mattis ipsum velit augue penatibus elementum. Interdum sagittis mi lorem vitae dolor. In diam pulvinar leo elit massa varius aliquam eget. Ut proin urna in sit sodales. Fermentum viverra nisl pellentesque tortor fermentum proin justo purus mollis. Lorem ultrices integer nulla nulla enim amet scelerisque porta eu. Orci dictumst integer auctor turpis venenatis."
    },
    {
      question: "Q2. Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultrices posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a."
    },
    {
      question: "Q3. Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Velit a aliquet semper et cursus. Porttitor lectus sit eu sit vel quis arcu. Elit varius arcu eget diam egestas fusce magnis. Ut suspendisse scelerisque pulvinar proin. Ornare tristique ac ultrices posuere dolor massa faucibus viverra augue. Ornare interdum accumsan orci porta quis nunc venenatis. Nunc est at amet habitant enim a. ncfcndjkcnksnooaecmidnklco cndkjncac akj va."
    },
    {
      question: "Q4. Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
    },
    {
      question: "Q5. Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Enim ut justo quis lobortis arcu facilisis. Eu dictum lacinia leo massa sit eget id. At consequat molestie lorem integer adipiscing elementum eros dolor. Sit est aliquam diam nunc gravida massa nibh risus. Turpis lectus scelerisque amet velit rhoncus metus morbi. Gravida rutrum pellentesque lectus turpis nullam morbi nisl amet vel."
    }
  ];

  const toggleItem = (index:number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen pb-20 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-18 right-18 z-10">
        <button
          onClick={toggleDarkMode}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 md:px-12 lg:px-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className={`text-2xl md:text-3xl lg:text-[44px] font-bold leading-tight pt-10 ${
            darkMode ? 'text-cyan-500' : 'text-purple-700'
          }`}>
            Frequently asked questions
          </h1>
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto">
          {/* Top border line */}
          <div className={`h-px mb-0 ${
            darkMode ? 'bg-gray-600' : 'bg-gray-300'
          }`}></div>
          
          {accordionData.map((item, index) => {
            const isOpen = openItems.has(index);

            return (
              <div key={index}>
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full py-6 md:py-8 text-left flex justify-between items-start transition-colors duration-200 group `}
                >
                  <div className="flex-1 pr-6">
                    <h3 className={`text-lg md:text-3xl font-bold leading-tight ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.question}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-200 ${
                        darkMode ? 'text-cyan-400' : 'text-gray-900'
                      }`} />
                    ) : (
                      <Plus className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-200 ${
                        darkMode ? 'text-cyan-400' : 'text-gray-900'
                      }`} />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-6 md:pb-8 pr-12 md:pr-16">
                    <p className={`text-base md:text-xl leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom border line */}
                <div className={`h-px ${
                  darkMode ? 'bg-gray-600' : 'bg-gray-300'
                }`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}