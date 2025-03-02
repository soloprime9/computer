import React from 'react';

const NewIPadAnnouncement = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-2xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-center mb-6">New iPads Expected Shortly After This Week's Likely M4 MacBook Air Announcement</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-7 space-y-6 text-gray-700">
                <img
                  src="/public/ipad-macbook-thumbnail.jpeg" // Replace with your image path
                  alt="New iPads and M4 MacBook Air"
                  className="w-full rounded-lg mb-4"
                />
                <p>
                  Apple's tech enthusiasts are buzzing with anticipation as rumors intensify regarding the imminent release of new iPad models, following closely on the heels of the expected M4 MacBook Air announcement this week. This strategic rollout suggests Apple's continued commitment to refreshing its product lineup with cutting-edge technology.
                </p>
                <p>
                  Industry insiders predict that the new iPads will boast significant upgrades, aimed at enhancing both performance and user experience. Key improvements are expected to include a more powerful processor, likely the next iteration of Apple's custom silicon, promising faster speeds and improved efficiency. This upgrade is crucial for supporting demanding applications and multitasking, catering to the needs of professionals and casual users alike.
                </p>
                <p>
                  Furthermore, enhancements to the camera system are anticipated, potentially including improved sensors and advanced computational photography capabilities. A refined display with enhanced brightness and color accuracy is also rumored, offering a more immersive viewing experience. These upgrades are designed to keep the iPad at the forefront of the tablet market, offering features that rival traditional laptops.
                </p>
                <p>
                  The timing of the iPad announcement, following the MacBook Air release, underscores Apple's strategic product cadence. By staggering these announcements, Apple can maintain a steady stream of news and excitement, ensuring that each product receives the attention it deserves. This approach also allows for targeted marketing and customer engagement, maximizing the impact of each launch.
                </p>
                <p>
                  For content creators, designers, and professionals who rely on the iPad for their work, these upgrades are particularly significant. The improved performance and enhanced features will enable more complex tasks and workflows, making the iPad an even more versatile tool. As Apple continues to innovate, the iPad remains a pivotal component of its ecosystem, bridging the gap between mobile and desktop computing.
                </p>
                <p>
                  Stay tuned for further updates as Apple prepares to unveil its latest iPad models. With the M4 MacBook Air setting the stage, the anticipation for these new tablets is reaching a fever pitch.
                </p>
              </div>
              <div className="pt-6 text-base leading-7 font-bold">
                <p>Keep checking back for more details!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewIPadAnnouncement;
