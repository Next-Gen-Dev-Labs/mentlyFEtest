import React from 'react';

interface ActivityCardProps {
  type: 'verification' | 'signup' | 'withdrawal';
  count?: number;
  user?: string;
  time: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ type, count, user, time }) => {
  return (
    <div className="border-b border-gray-200 py-3">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          type === 'verification' ? 'bg-yellow-100' :
          type === 'signup' ? 'bg-blue-100' : 'bg-red-100'
        }`}>
          {type === 'verification' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {type === 'signup' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
          )}
          {type === 'withdrawal' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div>
          <h4 className="font-medium text-sm">
            {type === 'verification' && 'KYC Verification'}
            {type === 'signup' && 'New User Sign Up!'}
            {type === 'withdrawal' && 'Withdrawal Request'}
          </h4>
          <p className="text-xs text-gray-500">
            {type === 'verification' && `${count} new persons just signed up on Mently.`}
            {type === 'signup' && `${count} new persons just signed up on Mently.`}
            {type === 'withdrawal' && `${user} requested a withdrawal.`}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1 ml-11">{time}</p>
    </div>
  );
};

export default ActivityCard;