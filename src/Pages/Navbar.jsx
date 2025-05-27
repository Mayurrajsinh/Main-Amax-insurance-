import {
  BadgeCent,
  Building2,
  CalendarPlus,
  ChevronDown,
  CircleHelp,
  Contact,
  FileUser,
  Menu,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/Components/ui/dropdown-menu';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/Components/ui/sheet';

import { Button } from '@/Components/ui/button';
import { useState } from 'react';


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>

    <div className="flex justify-between items-center h-22 px-1 border-b border-b-blue-100 z-50 fixed w-full bg-white">
      {/* <h1 className="text-xl font-bold">Amax Ins.</h1> */}
    <div className="logo h-16 w-16 ">
    <img src="Images/AMAX.png" className='h-full w-full object-contain' alt="" />

    </div>
      {/* Hamburger for mobile */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-2">
            <SheetHeader>
              <SheetTitle className="flex justify-between items-center  text-right -mb-5 -ml-4 ">
                Menu
          
              </SheetTitle>
            </SheetHeader>

            {/* Mobile Menu Content */}
            <div className="">
              <div>
                <h3 className="font-semibold text-base mb-2">Person</h3>
                <ul className="space-y-1 text-sm pl-2">
                  <li><Link to="/car-insurance">Car Insurance</Link></li>
                  <li><Link to="/bike-insurance">Bike Insurance</Link></li>
                  <li><Link to="/auto-rickshaw-insurance">Auto Rickshaw Insurance</Link></li>
                  <li><Link to="/commercial-vehicle">Commercial Vehicle</Link></li>
                  <li><Link to="/international-travel">International Travel</Link></li>
                  <li><Link to="/">Amax Medicare</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">Business</h3>
                <ul className="space-y-1 text-sm pl-2">
                  <li><Link to="/marine-cargo">Marine Cargo Insurance</Link></li>
                  <li><Link to="/group-health">Group Health Insurance</Link></li>
                  <li><Link to="/fire-burglary">Fire & Burglary</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-base mb-2">Renew</h3>
                <ul className="space-y-1 text-sm pl-2">
                  <li><Link to="/service/car-insurance">Car Insurance</Link></li>
                  <li><Link to="/service/bike-insurance">Bike Insurance</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-base mb-2">NavClaim</h3>
                <ul className="space-y-1 text-sm pl-2">
                  <li><Link to="/service/car-insurance">Car Insurance</Link></li>
                  <li><Link to="/service/bike-insurance">Bike Insurance</Link></li>
                </ul>
              </div>
              <div className="space-y-2 pt-2 border-t mt-4">
                <Link to="/claim" className="flex items-center gap-1">
                  <BadgeCent size={16} /> Claim
                </Link>
                <Link to="/support" className="flex items-center gap-1">
                  <CircleHelp size={16} /> Support
                </Link>
                <Button className="w-full flex gap-1">
                  <FileUser size={16} /> My Policy
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-center gap-4">
        {/* Person Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-2 rounded-full hover:bg-blue-100  flex items-center gap-1">
            <Contact size={16} />
            <span>Person</span>
            <ChevronDown size={16} />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[640px] mt-2 p-4 bg-white shadow-lg flex gap-4 z-50">
            {/* Motor */}
            <div className="flex-1 min-w-[180px] border-r">
              <div className="flex justify-start items-center gap-1.5 mb-2">
                <img src="/Images/car_4dfb10ccdb.svg" className="w-8 h-8 invert grayscale-100 brightness-200 p-1" />
                <h3 className="font-semibold text-sm">Motor Insurance</h3>
              </div>
              <ul className="text-sm space-y-1">
                <li><Link to="/car-insurance">Car Insurance</Link></li>
                <li><Link to="/bike-insurance">Bike Insurance</Link></li>
              </ul>
            </div>

            {/* Travel */}
            <div className="flex-1 min-w-[180px] border-r">
              <div className="flex items-center gap-1.5 mb-2">
                <img src="/Images/travel_sti.svg" className="w-8 h-8 invert grayscale-100 brightness-200 p-1" />
                <h3 className="font-semibold text-sm">Travel Insurance</h3>
              </div>
              <ul className="text-sm space-y-1">
                <li><Link to="/international-travel">International Travel</Link></li>
                <li><Link to="/student-travel">Student Travel</Link></li>
              </ul>
            </div>

            {/* Health */}
            <div className="flex-1 min-w-[180px]">
              <div className="flex items-center gap-1.5 mb-2">
                <img src="/Images/health_sti.svg" className="w-8 h-8 invert grayscale-100 brightness-200 p-1" />
                <h3 className="font-semibold text-sm">Health Insurance</h3>
              </div>
              <ul className="text-sm space-y-1">
                <li><Link to="">Amax Medicare</Link></li>
                <li><Link to="/medicare-plus">Medicare Plus</Link></li>
              </ul>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Business Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-2 rounded-full hover:bg-blue-100 flex items-center gap-1">
            <Building2 size={16} />
            Business
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[240px] mt-2 p-2">
            <DropdownMenuItem asChild><Link to="/marine-cargo">Marine Cargo</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link to="/group-health">Group Health</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Renew Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer px-4 py-2 rounded-full hover:bg-blue-100 flex items-center gap-1">
            <CalendarPlus size={16} />
            Renew
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem asChild><Link to="/service/car-insurance">Car Insurance</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link to="/service/bike-insurance">Bike Insurance</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* {Nav Link} */}
       <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer px-4 py-2 rounded-full hover:bg-blue-100 flex items-center gap-1">
          <CalendarPlus size={16} />
          navClaim
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 p-4 bg-white shadow-lg rounded-lg w-[600px]">
          <div className="grid grid-cols-3 gap-4">
            <DropdownMenuItem asChild>
              <Link to="/claim/health-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/Health_Insurance.png" alt="Health Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Health Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/home-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/home_ins.png" alt="Home Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Home Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/pet-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/pet-ins.png" alt="Pet Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Pet Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/car-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/moter_ins.png" alt="Car Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Motor Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/cyber-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/cyber_ins.png" alt="Cyber Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Cyber Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/cattle-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/cattle_ins.png" alt="Cattle Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Cattle Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/travel-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/travel_ins.png" alt="Travel Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm">Travel Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/claim/commercial-insurance" className="flex flex-col items-center text-center">
                <img src="/Images/Commercial.svg" alt="Commercial Insurance" className="w-12 h-12 mb-2" />
                <span className="text-sm text-center">Commercial and MSME Insurance Claim</span>
              </Link>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>


        {/* Static Links */}
        {/* <Link to="/claim" className="mx-2 flex items-center gap-1">
          <BadgeCent size={16} />
          Claim
        </Link> */}
        <Link to="/support" className="mx-2 flex items-center gap-1"   >
          <CircleHelp size={16} />
          Support
        </Link>

        <button className="flex items-center justify-center hover:bg-black hover:text-white gap-1 bg-blue-500 text-blue-100 cursor-pointer px-4 py-2 rounded-full">
          <FileUser size={16} />
          My Policy
        </button>
      </div>
    </div>
    </>

  );
}

export default Navbar;
