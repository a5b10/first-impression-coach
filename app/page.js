'use client'

import { useState } from 'react';
import { Mic, Clock, MessageSquare, Activity } from 'lucide-react';

export default function FirstImpressionCoach() {
  const [widgetActive, setWidgetActive] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mr-3">
              <Mic className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold">Talk Confidently</h1>
          </div>
          <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-sm">
            A
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 pt-8 pb-12 px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Hero Section */}
          <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
            <h1 className="text-2xl font-bold mb-3">First Impression Coach</h1>
            <p className="text-lg text-gray-700 font-semibold italic mb-2">
              Nail your introduction. Land your dream role.
            </p>
            <p className="text-gray-600">
              Perfect your professional introduction in just 2 minutes.
            </p>
          </div>
          
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
            {/* Widget Area */}
            <div className="p-6">
              {widgetActive ? (
                <div className="min-h-64 flex items-center justify-center">
                  {/* This is where the actual Eleven Labs widget will go */}
                  <div id="elevenlabs-widget-container" className="w-full h-64 bg-gray-50 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200">
                    {/* Uncomment these lines when ready to integrate the real widget */}
                    {/* <elevenlabs-convai agent-id="kMpcV7b3pKcGQltvDivs"></elevenlabs-convai> */}
                    
                    {/* Placeholder for now */}
                    <p className="text-gray-500 text-center">ElevenLabs widget will appear here</p>
                  </div>
                </div>
              ) : (
                <div className="min-h-64 flex flex-col items-center justify-center py-10">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Mic size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Master Your First Impression</h3>
                  <p className="text-gray-600 mb-6 text-center max-w-md">
                    The first 2 minutes of your interview create a lasting impression. Practice your introduction and get instant feedback.
                  </p>
                  <button
                    onClick={() => setWidgetActive(true)}
                    className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  >
                    Start Introduction Practice
                  </button>
                </div>
              )}
            </div>

            {/* What to Expect */}
            <div className="px-6 py-5 bg-gray-50 border-t">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">What to expect:</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                    <span>Answer the classic "Tell me about yourself" question (2 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
                    <span>Receive instant feedback on both your delivery and content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
                    <span>Practice again to refine your introduction</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Example Results Preview */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
            <div className="p-5 border-b">
              <h3 className="text-lg font-medium">Sample Analysis Preview</h3>
            </div>
            <div className="p-5 space-y-3">
              <div className="p-3 rounded-lg bg-green-50 border border-green-100 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Speaking Rate</span>
                    <span className="text-sm font-bold text-green-600">GOOD</span>
                  </div>
                  <p className="text-xs text-gray-600">Your speaking pace of 140 words per minute is perfect for clarity</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="w-4 h-4 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Filler Words</span>
                    <span className="text-sm font-bold text-red-600">NEEDS PRACTICE</span>
                  </div>
                  <p className="text-xs text-gray-600">Used "um" 12 times and "like" 8 times. Try reducing these for more confidence.</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <Activity className="w-4 h-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Content Structure</span>
                    <span className="text-sm font-bold text-yellow-600">IMPROVING</span>
                  </div>
                  <p className="text-xs text-gray-600">Good opening and experience section, but missing clear career goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2025 TalkConfidently | First Impression Coach</p>
        </div>
      </footer>
    </div>
  );
}