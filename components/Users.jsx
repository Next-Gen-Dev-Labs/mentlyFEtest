import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {userData} from "@/constants";

// Sample data for the users statistics


// Calculate total users
const totalUsers = userData.reduce((sum, item) => sum + item.value, 0);

// Users Statistics Component with Donut Chart
export default function Users() {
    const filter = 'All';

    return (
        <div className="w-full mx-auto border border-[#E1E7EC] bg-[rgba(231,221,255,0.3)] rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-6 border-b border-[#E1E7EC] pb-4">
                <h2 className="text-lg font-semibold text-[#595564]">Users</h2>

                <button
                    className="flex items-center text-[#595564] px-4 py-2 rounded-sm text-sm border border-[#E1E7EC]"
                    onClick={() => {/* Toggle filter options */}}
                >
                    {filter}
                    <img src="/images/drop_down.svg" alt="Drop down" className="w-5 ml-2" />
                </button>
            </div>

            <div className="flex  items-center mb-6 gap-2">

                <div className="relative w-[70%]">
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={userData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    dataKey="value"
                                >
                                    {userData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h3 className="text-3xl font-bold text-[#222529]">{totalUsers}</h3>
                        <p className="text-sm text-[#595564]">Users</p>
                    </div>


                </div>

                <div className="flex flex-col gap-4 mt-6">
                    {userData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-3 h-3 rounded-full "
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-sm text-[#595564] mr-2">{item.name}</span>
                            </div>

                            <span className="text-sm font-bold text-[#595564]">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>





        </div>
    );
}