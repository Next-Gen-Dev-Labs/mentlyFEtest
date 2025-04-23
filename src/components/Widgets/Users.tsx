
export default function Users() {
    return (
        <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">All Users</span>
                <span className="text-xs text-gray-500">5 online</span>
            </div>
            <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-purple-100"></div>
                <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                <div className="w-8 h-8 rounded-full bg-green-100"></div>
            </div>
        </div>
    );
}
