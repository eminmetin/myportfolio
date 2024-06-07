import React from 'react';

const achievementList = [
  { metric: 'Projects', value: '100+' },
  { metric: 'Users', value: '1M+' },
  { metric: 'Awards', value: '10+' },
  { metric: 'Years', value: '5+' },
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353f] border rounded-md py-8 px-18 flex flex-row items-center justify-between'>
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className='flex flex-col items-center justify-center mx-4 '
            >
              <h2 className='text-white text-4xl font-bold'>
                {achievement.value}
              </h2>
              <p className='text-[#adb7be] text-base'>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
