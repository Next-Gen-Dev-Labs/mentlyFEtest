
import Link from 'next/link';


export default function Page() {


    return (
        <>
            <div id="dashboard" className="">
            <p className="text-xl mt-6 md:mt-0">Hi Blessing! Here&apos;s an overview of your website traffic and form responses</p>

            <div className="flex lg:flex-row flex-col mt-6 gap-12 pb-8 lg:pb-0">
                <div className="lg:w-3/5 flex flex-col gap-2 lg:gap-5 ">
                    <div className="bg-green rounded-md text-white p-4 lg:p-8">
                        <p className="text-[20px] lg:text-30px pb-4">Website Traffic Over the Last 30 days</p>

                    </div>

                    <Link href="/dashboard/traffic"><button className="bg-blue hover:bg-green text-white py-2 px-6 rounded-md mt-5">View Full Traffic Data</button></Link>

                </div>

                <div className="lg:w-2/5">
                    <p className="text-30px">Form Submissions</p>

                    {/*
                    <table className="w-full mt-5 flex flex-col gap-1 hidden">
                        <thead className="flex gap-5 bg-light-blue p-2 rounded-md w-full text-left">
                            <th className="w-1/5">Name</th>
                            <th className="w-2/5">Email</th>
                            <th className="w-2/5">Message</th>
                        </thead>

                        <tr className="flex bg-light-green p-2 rounded-md w-full">
                            <td className="w-1/5 p-1">
                                John Doe
                                <br/>
                                <span className="text-sm">15-03-2025</span>
                            </td>
                            <td className="w-2/5 p-1 overflow-hidden text-ellipsis">
                                <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
                            </td>
                            <td className="w-2/5 p-1">Hi, I&apos;m interested in your services</td>
                        </tr>

                        <tr className="flex  bg-grey p-2 rounded-md">
                            <td className="w-1/5 p-1">
                                John Doe
                                <br/>
                                <span className="text-sm">15-03-2025</span>
                            </td>
                            <td className="w-2/5 max-w p-1 overflow-hidden text-ellipsis">
                                <a href="mailto:johndoe@gmail.com">ogunyemiolabiyi@gmail.com</a>
                            </td>
                            <td className="w-2/5 p-1">Hi, I&apos;m interested in your services</td>
                        </tr>

                        <tr className="flex bg-light-green p-2 rounded-md w-full">
                            <td className="w-1/5 p-1">
                                John Doe
                                <br/>
                                <span className="text-sm">15-03-2025</span>
                            </td>
                            <td className="w-2/5 p-1 overflow-hidden text-ellipsis">
                                <a href="mailto:johndoe@gmail.com">johnsondoe@gmail.com</a>
                            </td>
                            <td className="w-2/5 p-1">Hi, I&apos;m interested in your services</td>
                        </tr>

                        <tr className="flex bg-light-grey p-2 rounded-md w-full">
                            <td className="w-1/5 p-1">
                                John Doe
                                <br/>
                                <span className="text-sm">15-03-2025</span>
                            </td>
                            <td className="w-2/5 p-1 overflow-hidden text-ellipsis">
                                <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
                            </td>
                            <td className="w-2/5 p-1">Hi, I&apos;m interested in your services</td>
                        </tr>
                    </table>
                    */}
                    <a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRtJIKpP9oCcQBrgK66iEUcIwKfue5fDap8TBoL7_oPNOlzlBegLLX7RuiPxqBqcLbRltZkjM2vbCnK/pubhtml">
                        <button className="bg-blue hover:bg-green text-white py-2 px-6 rounded-md mt-5">View All Form Responses</button>
                    </a>
                </div>
            </div>
            </div>
        </>
    )
}