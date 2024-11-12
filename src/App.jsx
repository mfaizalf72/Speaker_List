// src/App.jsx
import React from 'react';
import SpeakerList from './components/SpeakerList';
import speaker1 from './assets/speaker1.jpg'; 
import speaker2 from './assets/speaker2.jpg';
import speaker3 from './assets/speaker3.jpg';
import speaker4 from './assets/speaker4.jpg';
import speaker5 from './assets/speaker5.jpg';
import speaker6 from './assets/speaker6.jpg'; 

const speakersData = [
  {
    id: 1,
    name: 'Tom Miller',
    title: 'Chief Manager Officer',
    company: 'TCS',
    image: speaker1,
    description: 'Effectively integrate business networks to focus on collaboration rather than just customer-oriented solutions. Focus on empowering cross-functional strategies instead of relying solely on traditional approaches. Leverage the power of digital interconnections while promoting innovative thought leadership to maximize value. Drive forward-thinking market strategies by exploring digital platforms and e-business themes.',
  },
  {
    id: 2,
    name: 'James Brooks',
    title: 'Chief Marketing Officer',
    company: 'Infosys',
    image: speaker2,
    description: 'Collaborate strategically with business sectors to foster community-driven growth, moving beyond a singular client-focused model. Unleash collaborative practices across various digital environments, ensuring adaptation to the evolving market landscape. Monetize innovative partnerships by enhancing digital mindshare and driving business transformations in the 2.0 era. Focus on real-time data-driven decisions to steer e-business success.',
  },
  {
    id: 3,
    name: 'Oliver Carter',
    title: 'Chief Engagement Officer',
    company: 'EGDK',
    image: speaker3,
    description: 'Unify industry communities with a focus on shared goals, rather than just prioritizing client relationships. Maximize potential by fostering cross-platform collaboration, breaking away from pandemic-influenced methods. Invest in parallel information channels to boost digital engagement and leverage emerging technologies for optimized market positioning.',
  },
  {
    id: 4,
    name: 'Sophia Davis',
    title: 'Chief Developer Officer',
    company: 'Winman',
    image: speaker4,
    description: 'Revolutionize business ecosystems by nurturing strong partnerships within communities, focusing on broader industry convergence instead of just client needs. Implement innovative practices that extend beyond traditional boundaries, focusing on synergies across platforms. Drive revenue growth by aligning digital information intermediaries with modern business models.',
  },
  {
    id: 5,
    name: 'Emily Parker',
    title: 'Chief Marketing Officer',
    company: 'Kodnest',
    image: speaker5,
    description: 'Enhance cross-industry collaboration, prioritizing community engagement over client-centric approaches. Actively foster integration through multiple platforms to strengthen market competitiveness. Focus on monetizing digital ecosystems, emphasizing emerging platforms and data-driven market strategies. Take advantage of cutting-edge business themes to thrive in the digital age.',
  },
  {
    id: 6,
    name: 'Liam Maxwell',
    title: 'Chief Executive Officer',
    company: 'ExcelR',
    image: speaker6,
    description: 'Strengthen connections across business communities with a focus on synergy and cooperation, not just client demands. Promote strategic initiatives across platforms to improve operational efficiency and market performance. Drive profitability by enhancing information exchange and optimizing digital strategies in real-time business environments.',
  },
];

const App = () => {
  return (
    <div className="app">
      <SpeakerList speakers={speakersData} />
    </div>
  );
};

export default App;