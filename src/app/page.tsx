// import Image from 'next/image'

import LandingContent from "./landingContent";



export default function Home() {
  return (
    <div>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LandingContent />
    </main>

    <footer className=" flex flex-col items-center justify-center bottom-">
      <span className="font-default text-sm">
        © 2023 TicketPro. All rights reserved.
      </span>
    </footer>
    </div>
  )
}
