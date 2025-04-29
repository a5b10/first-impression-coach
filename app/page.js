'use client'

import { useState, useEffect } from 'react';
import { Mic, Clock, MessageSquare, Activity, ChevronRight, Volume2, CheckCircle } from 'lucide-react';

const FirstImpressionCoach = () => {
  const [stage, setStage] = useState('intro'); // intro, interview, valueGate
  
  // Load script for ElevenLabs widget
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  // Function to handle starting the interview
  const startInterview = () => {
    setStage('interview');
  };
  
  // Function to handle interview completion
  const completeInterview = () => {
    setStage('valueGate');
  };
  
  // Function to handle user leaving/declining
  const handleDecline = () => {
    setStage('intro');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - With subtitles */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mr-3">
                <Mic className="text-white" size={20} />
              </div>
              <h1 className="text-xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Talk Confidently</h1>
            </div>
            <div className="ml-12">
              <h2 className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Oxygen, sans-serif' }}>First Impression Coach</h2>
              <p className="text-xs italic text-gray-600" style={{ fontFamily: 'Oxygen, sans-serif' }}>Nail your introduction. Land your dream role.</p>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 pt-8 pb-12 px-6">
        <div className="max-w-4xl mx-auto w-full">
          {/* Initial Introduction Screen */}
          {stage === 'intro' && (
            <>
              {/* "Why should you use TalkConfidently" Section */}
              <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Why should you use TalkConfidently</h2>
                  
                  <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight" style={{ fontFamily: 'Oxygen, sans-serif' }}>
                    FIRST IMPRESSIONS<br />LAST FOREVER
                  </h1>
                  
                  <div className="inline-block bg-blue-100 px-4 py-2 rounded-lg mb-4">
                    <p className="text-2xl font-semibold text-blue-800">
                      83% of decisions are made within 90 seconds
                    </p>
                  </div>
                  
                  <p className="text-xl text-gray-700 mb-8">
                    Perfect your professional introduction in just 2 minutes and dramatically increase your impact.
                  </p>
                  
                  {/* Before/After Comparison */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-red-50 rounded-xl p-5 border border-red-100 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-red-200 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                        BEFORE
                      </div>
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                          <Volume2 className="w-6 h-6 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Nervous Rambling</h3>
                          <p className="text-sm text-gray-600">Unfocused, unclear value proposition</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 mr-2"></div>
                          <div className="bg-gray-100 rounded-lg p-2 text-sm">
                            "Um, my idea is basically about, like, helping people connect... um... it's pretty innovative..."
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 mr-2"></div>
                          <div className="bg-gray-100 rounded-lg p-2 text-sm">
                            "I guess I've been working on this for a while and, you know, I think it has potential..."
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-xl p-5 border border-green-100 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-green-200 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                        AFTER
                      </div>
                      <div className="flex items-start mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Confident Storytelling</h3>
                          <p className="text-sm text-gray-600">Structured, impact-focused</p>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 mr-2"></div>
                          <div className="bg-gray-100 rounded-lg p-2 text-sm">
                            "I'm developing a platform that has increased connection rates by 40% in our early tests..."
                          </div>
                        </div>
                        <div className="flex mb-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0 mr-2"></div>
                          <div className="bg-gray-100 rounded-lg p-2 text-sm">
                            "Our solution addresses the $2B market gap in this space with our proprietary approach..."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Trial Card with ElevenLabs Widget */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
                <div className="p-5 border-b">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>Free Trial</h3>
                </div>
                
                {/* ElevenLabs widget container */}
                <div className="bg-gray-50 p-10 flex items-center justify-center" style={{ minHeight: "240px" }}>
                  <p className="text-gray-500 text-center">ElevenLabs widget will appear here</p>
                  {/* In production, uncomment this: */}
                  {/* <elevenlabs-convai agent-id="kMpcV7b3pKcGQltvDivs"></elevenlabs-convai> */}
                </div>
                
                {/* What to expect section */}
                <div className="px-6 py-5 bg-gray-50 border-t">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">What to expect:</h4>
                    <ol className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
                        <span>Have a short 2-minute conversation with Alexis</span>
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
              
              {/* Sample Analysis Preview */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
                <div className="p-5 border-b">
                  <h3 className="text-lg font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Sample Analysis Preview</h3>
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
            </>
          )}
          
          {/* Interview Screen with ElevenLabs Widget - hidden by default */}
          {stage === 'interview' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="p-5 border-b flex justify-between items-center">
                <h3 className="text-lg font-semibold">Your Introduction Practice</h3>
                <button 
                  onClick={completeInterview} 
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Skip Demo
                </button>
              </div>
              <div className="p-6">
                <div className="w-full min-h-64 bg-gray-50 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200">
                  {/* Placeholder for ElevenLabs widget */}
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Mic size={24} className="text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium mb-3">Tell me about yourself in 2 minutes or less.</p>
                    <p className="text-gray-500 text-sm mb-6">I'm listening to your introduction...</p>
                    <button 
                      onClick={completeInterview}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Finish Recording
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Value Gate Screen - hidden by default */}
          {stage === 'valueGate' && (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="bg-blue-600 p-6 text-white text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Analysis Complete!</h2>
                <p className="text-lg mb-1">Your introduction has been analyzed</p>
                <p className="text-blue-100 text-sm">We've identified your top speaking patterns and 3 areas for improvement</p>
              </div>
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-center">I've identified insights about your introduction</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Your speaking patterns</h4>
                        <p className="text-gray-600 text-sm">Insights about your pace, energy, and confidence markers</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Your content effectiveness</h4>
                        <p className="text-gray-600 text-sm">How well your introduction is structured and what's missing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <ChevronRight className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Specific improvement steps</h4>
                        <p className="text-gray-600 text-sm">Tailored recommendations to improve your introduction</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <button 
                    className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full font-medium"
                    onClick={() => console.log('Sign up clicked')}
                  >
                    Create Free Account to See Results
                  </button>
                  <button 
                    className="text-gray-500 py-2 hover:text-gray-700 font-medium"
                    onClick={handleDecline}
                  >
                    No thanks, try again later
                  </button>
                </div>
              </div>
            </div>
          )}
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
};

export default FirstImpressionCoach;