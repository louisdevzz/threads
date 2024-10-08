"use client"
import { useEffect, useState } from "react"
import Sidebar from "@/components/Sidebar"
import Chat from "@/components/Chat"
import { usePathname } from "next/navigation"
import { getUserId } from "@/utils/auth"
import LayoutChat from "@/components/LayoutChat"
import Link from "next/link"

const ChatPage = () => {
    const pathName = usePathname();
    const friendId = pathName.replace("/messages/chat/", "")
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const userId = getUserId();
            setCurrentUserId(userId as string);
        }
    }, [])

    return (
        <div>
            <div className="hidden md:block">
                <div className="flex md:flex-row flex-col-reverse overflow-hidden w-full h-screen">       
                        <Sidebar />
                    <div className="flex flex-col w-full h-full overflow-hidden">
                        <LayoutChat>
                            <div className="flex items-center justify-center w-full">
                                <div className="flex-grow h-full overflow-y-auto">
                                    <Chat 
                                        friendId={friendId} 
                                        userId={currentUserId as string} 
                                    />
                                </div>
                            </div>
                        </LayoutChat>
                    </div>
                </div> 
            </div>
            <div className="md:hidden">
                <div className="flex flex-col h-screen w-screen">
                    {/* <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/messages" className="text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </Link>
                    </div> */}
                    <div className="flex-grow overflow-hidden">
                        <Chat 
                            friendId={friendId} 
                            userId={currentUserId as string} 
                        />
                    </div>
                    <div className="md:hidden">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
{/* */}