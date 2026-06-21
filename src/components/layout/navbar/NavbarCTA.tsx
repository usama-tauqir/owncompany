import GlobalSelector from "./GlobalSelector";


export default function NavbarCTA() {

return (

<div className="flex items-center gap-4">
             <a
         href="#"
         className="rounded-full bg-[#1BB5B5] px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
       >
         Explore Careers
       </a>

       <a
         href="#"
         className="rounded-full border-[1.5px] border-[#1BB5B5] px-6 py-2 text-sm font-medium text-[#1BB5B5] transition-colors hover:bg-[#1BB5B5] hover:text-white"
       >
         Let&apos;s Talk Business
       </a>

       <GlobalSelector />

     </div>

)

}