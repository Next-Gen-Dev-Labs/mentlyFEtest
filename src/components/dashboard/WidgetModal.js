import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function WidgetModal({ isOpen, onClose, activeWidgets, setActiveWidgets }) {
    const widgetOptions = [
        { id: 'programs', name: 'Programs' },
        { id: 'groupCalls', name: 'Group Calls' },
        { id: 'mentors', name: 'Mentors' },
        { id: 'recentActivities', name: 'Recent Activities' },
        { id: 'applications', name: 'Application' },
        { id: 'earnings', name: 'Earnings', active: false },
        { id: 'forum', name: 'Forum', active: false },
        { id: 'programAnalysis', name: 'Program Analysis', active: false },
    ];

    const handleToggleWidget = (id) => {
        setActiveWidgets(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleResetToDefault = () => {
        setActiveWidgets({
            programs: true,
            groupCalls: true,
            mentors: true,
            recentActivities: true,
            applications: true,
            stats: true,
            earnings: false,
            forum: false,
            programAnalysis: false,
        });
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 overflow-scroll" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"

                >
                    <div className="fixed inset-0 bg-white/60 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="fixed inset-y-0 right-0 flex max-w-md w-full p-4 text-left">
                        <Transition.Child
                            as={Fragment}
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"

                        >
                            <Dialog.Panel
                                className="w-full h-full transform bg-white py-8 px-6 shadow-xl transition-all rounded-r-lg"
                            >
                               
                                <Dialog.Title
                                    as="div"
                                    className="flex justify-end items-center"
                                >
                                    
                                    <button
                                        type="button"
                                        className="text-gray-400 hover:text-gray-500"
                                        onClick={onClose}
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </Dialog.Title>
                                <div className="border border-gray-400/30 outline-none w-full mt-5 mb-4"></div>

                                <div className="mt-4">
                                    <h3 className="text-2xl font-bold leading-6 text-purple-900 mb-6">
                                        Manage Widget
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Personalize your dashboard by managing widgets add, remove, or reorder them to fit your workflow.
                                    </p>
                                </div>

                                <div className="mt-6 space-y-4">
                                    {widgetOptions.map((widget) => (
                                        <div key={widget.id} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                                <span className="text-sm">{widget.name}</span>
                                            </div>
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 bg-green-500 focus:ring-green-500 border-gray-300 rounded"
                                                checked={activeWidgets[widget.id] !== false}
                                                onChange={() => handleToggleWidget(widget.id)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-between gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-primary px-3 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2 text-xs md:text-sm sm:text-sm font-medium text-white hover:bg-primaryLight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                        onClick={onClose}
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                        onClick={handleResetToDefault}
                                    >
                                        Reset to Default
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}