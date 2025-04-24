// import React from 'react'
//
// const ProgramCard = () => {
//     return (
//         <div className="bg-white rounded-xl p-3 shadow-sm">
//             <div className="flex flex-col gap-2">
//                 <div className="rounded-xl  px-3 py-2">
//                     <div className="flex items-center gap-3 justify-between bg-black px-2 py-1 rounded-md h-16">
//                         <div>
//                             <h3>Fundamentals of User <br/> interface & Experience </h3>
//                             <div className="flex items-center gap-1 text-[6px] font-bold text-[#0077FF] ">
//                                 <div className="bg-[#0077ff] h-1 w-1 rounded-full"/>
//                                 <p> Bootcamp</p>
//                             </div>
//                         </div>
//
//                         <img src="/images/setting-2.svg" alt="setting" className="h-3" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default ProgramCard

const ProgramCard = ({ program }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden p-4">
            {/* Card header with image background */}
            <div
                className="relative bg-cover bg-center p-4 rounded-lg"
                style={{
                    backgroundImage: `url(${program.backgroundImage})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="relative z-10">
                    <div className="flex justify-between">
                        <h2 className="text-white font-bold text-lg w-[60%]">{program.title}</h2>
                        {program.type === "Bootcamp" && (
                            <img src="/images/setting-2.svg" alt="setting" className="h-4 w-4" />
                            )}
                    </div>

                    {/* Tag showing program type */}
                    <div className="mt-2 inline-flex items-center">
                        {program.type === "Bootcamp" ? (
                            <div className="bg-blue-100 text-[#0077ff] font-bold text-xs px-2 py-1 rounded-full flex items-center gap-2">
                                <div className="bg-[#0077ff] h-2 w-2 rounded-full"/>
                                {/*<Award size={12} className="mr-1" />*/}
                                <span>{program.type}</span>
                            </div>
                        ) : (
                            <div className="bg-green-100 text-[#008000] font-bold text-xs px-2 py-1 rounded-full flex items-center gap-2">
                                <div className="bg-[#008000] h-2 w-2 rounded-full"/>
                                <span>{program.type}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Card content */}
            <div className="">
                <p className="text-gray-700 text-sm my-3">{program.description}</p>

                <div className="flex items-center justify-between gap-2 mb-3">
                    {/* Mentors section or Hosted by section */}
                    <div className="flex items-center ">
                        {program.mentors ? (
                            <>
                                <div className="flex space-x-[-6px]">
                                    {program.mentors.map((mentor) => (
                                        <img
                                            key={mentor.id}
                                            src={mentor.avatar}
                                            alt="Mentor"
                                            className="w-6 h-6 rounded-full"
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-sm text-gray-600">Mentors</span>
                            </>
                        ) : (
                            <>
                                <img
                                    src={program.hostedBy.avatar}
                                    alt={program.hostedBy.name}
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className="ml-2 text-sm text-gray-600">Hosted By: {program.hostedBy.name}</span>
                            </>
                        )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        {program.actions.map((action, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded text-sm  ${
                                    action.isPrimary
                                        ? 'bg-purple-600 text-white'
                                        : 'border-1 border-[#6F01D0] text-[#6F01D0] '
                                }`}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ProgramCard