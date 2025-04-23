
export default function Programs() {
    return (
        <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Active Programs</span>
                <span className="text-xs text-gray-500">3 ongoing</span>
            </div>
            <div className="space-y-2">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <h5 className="font-medium">UI/UX Fundamentals</h5>
                    <p className="text-xs text-gray-500 mt-1">12 participants</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <h5 className="font-medium">Advanced React</h5>
                    <p className="text-xs text-gray-500 mt-1">8 participants</p>
                </div>
            </div>
        </div>
    );
}
