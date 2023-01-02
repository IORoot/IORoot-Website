import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import londonparkour from "../images/londonparkour.png"
import housequests from "../images/housequests.png"
import ioroot from "../images/ioroot.png"
import parkourlabs from "../images/parkourlabs.png"
import parkourpulse from "../images/parkourpulse.png"
import svgencode from "../images/svgencode.png"

const WebsitesPage = () => {

    return (
        <Layout pageTitle="Websites" classes="max-w-3xl mx-4 md:mx-auto mb-10">
            <h1 className="text-4xl font-bold text-slate-800 mb-10 border-b pb-2" >Websites</h1>

            <ul className="grid grid-cols-2 gap-4 mb-20">
                    
                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://londonparkour.com'>
                        <img src={londonparkour} alt="londonparkour" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">LondonParkour</div>
                            <div className="text-xs text-green-900">Practical. Movement. Training.</div>
                        </div>
                    </Link>
                </li>

                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://housequests.com'>
                        <img src={housequests} alt="housequests" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">HouseQuests</div>
                            <div className="text-xs text-green-900">A desktop application for advanced property searching.</div>
                        </div>
                    </Link>
                </li>

                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://ioroot.com'>
                        <img src={ioroot} alt="ioroot" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">IORoot</div>
                            <div className="text-xs text-green-900">My brain's input and output.</div>
                        </div>
                    </Link>
                </li>

                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://parkourlabs.com'>
                        <img src={parkourlabs} alt="parkourlabs" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">ParkourLabs</div>
                            <div className="text-xs text-green-900">Parkour Tutorials, Demonstrations & Articles.</div>
                        </div>
                    </Link>
                </li>


                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://parkourpulse.com'>
                        <img src={parkourpulse} alt="parkourpulse" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">ParkourPulse</div>
                            <div className="text-xs text-green-900">Netflix for Parkour. Stay up to date with the community.</div>
                        </div>
                    </Link>
                </li>

                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://svgencode.com'>
                        <img src={svgencode} alt="svgencode" />
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">SVGEncode</div>
                            <div className="text-xs text-green-900">A simple tool to convert an SVG into different formats.</div>
                        </div>
                    </Link>
                </li>

                <li className=" bg-slate-50 rounded-xl p-4 overflow-hidden">
                    <Link className="text-emerald-800 hover:text-emerald-400 text-2xl flex flex-col gap-2 " to='https://startparkour.com'>
                        <h2 className="w-full h-80 bg-gray-700 text-white text-center flex flex-col"><span className="my-auto">Coming Soon</span></h2>
                        <div className="w-5/6 mx-auto mb-6">
                            <div className="mb-2 text-center">ParkourSyllabus</div>
                            <div className="text-xs text-green-900">A Parkour Syllabus for parkour practitioners.</div>
                        </div>
                    </Link>
                </li>

            </ul>

        </Layout>
    )

}
export default WebsitesPage