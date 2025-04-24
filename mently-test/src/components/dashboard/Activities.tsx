import Image from 'next/image';
import Bar from '@/assets/icons/order.svg';
import More from '@/assets/icons/more.svg';
import { activities } from '../list-items/dashboard';

export default function Activities() {
  // Sample data for activities


  return (
    <div className="bg-white h-fit max-h-[300px] overflow-y-auto px-4 py-4 rounded-md hidden-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <Bar />
          <h1 className="text-base ml-2 font-bold text-gray-400">Recent Activities</h1>
        </div>
        
        <div className="flex items-center">
          <button className="text-purple-700 font-medium mr-1">See all</button>
            <More />
        </div>
      </div>

      {/* Activities List */}
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className={` border-b-1 last:border-none`}>
            <div className="flex mb-6">
              <div className="mr-3">
                <div className="w-8 h-8 rounded-full overflow-clip">
                  <Image 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900">{activity.title}</h3>
                <p className="text-gray-500 mb-1 text-xs">{activity.description}</p>
                <p className="text-gray-500 text-xs">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}