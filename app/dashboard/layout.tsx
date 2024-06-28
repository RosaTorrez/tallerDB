import React from 'react'
import SideNav from '../ui/dashboard/sidenav'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex'>
            <SideNav />
            <div className='flex-1 border border-slate-800 bg-slate-800/20 rounded-xl h-screen m-1'>
                {children}
            </div>
        </main>
    )
}

export default DashboardLayout