
export default function GroupCalls() {
    return (
        <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Upcoming Calls</span>
                <span className="text-xs text-gray-500">2 scheduled</span>
            </div>
            <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <h5 className="font-medium">Weekly Sync</h5>
                    <p className="text-xs text-gray-500 mt-1">Tomorrow, 10:00 AM</p>
                </div>
            </div>
        </div>
    );
}
