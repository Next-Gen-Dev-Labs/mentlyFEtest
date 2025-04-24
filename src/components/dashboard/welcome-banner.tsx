interface WelcomeBannerProps {
  name: string
  message: string
}

export default function WelcomeBanner({ name, message }: WelcomeBannerProps) {
  return (
    <div className="bg-purple-600 rounded-lg p-4 mb-6 flex items-center justify-between text-white">
      <div>
        <h2 className="text-xl font-bold">Welcome Aboard, {name} 👋</h2>
      </div>
      <div className="flex items-center">
        <span className="mr-4">{message}</span>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-medium">Update Profile</button>
      </div>
    </div>
  )
}
