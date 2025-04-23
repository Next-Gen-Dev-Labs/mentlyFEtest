
export default function RecentActivities() {
    return (
        <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Recent Activity</span>
            </div>
            <div className="space-y-2">
                <div className="text-xs text-gray-600">
                    <p>John completed UI/UX course</p>
                    <p className="text-gray-400">2 hours ago</p>
                </div>
            </div>
        </div>
    );
}
