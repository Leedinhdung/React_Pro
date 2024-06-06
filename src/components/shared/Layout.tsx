
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
export default function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 '>
            <div className='h-[100vh]'>
            <Sidebar />

            </div>
            <div className='flex-1 h-[100vh] overflow-scroll'>
                <Header />
                <div className='px-4 py-2 '>
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}
