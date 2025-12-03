'use client';

import React from 'react';
import ValidationCard from './cards/ValidationCard';
import PodcastCard from './cards/PodcastCard';
import ChatCard from './cards/ChatCard';
import SearchCard from './cards/SearchCard';

export default function HeroCardStack() {
  return (
    <div className="relative z-10 lg:translate-x-6 flex items-center justify-center h-[480px] sm:h-[520px] w-full mt-8 lg:mt-0">
      {/* Background Glow */}
      <div className="absolute w-full h-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10 transform rotate-3 scale-110"></div>

      <div className="card-stack">
        <ValidationCard />
        <PodcastCard />
        <ChatCard />
        <SearchCard />
      </div>
    </div>
  );
}

