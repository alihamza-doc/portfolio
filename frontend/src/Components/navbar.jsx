import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
const navigation = [
  { name: 'Home', href: '/home', current: false,
    icon:<FontAwesomeIcon icon={faHouse} />
   },
  { name: 'Projects', href: '/projects', current: false ,
    icon:<FontAwesomeIcon icon={faBuilding} />
  },
  { name: 'Contact', href: '/contact', current: false ,
    icon:<FontAwesomeIcon icon={faPhone} />
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-300 border-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Left: Logo */}
              <div className="flex items-center">
                <FontAwesomeIcon icon={faFileLines} className="text-black text-3xl" />
              </div>

              {/* Mobile Menu Button (for small screens) */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-gray-900" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-black" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Right: Navigation Links */}
              <div className="hidden sm:flex sm:items-center sm:space-x-4 ml-auto">
                {navigation.map((item) => (
                  <Link
                    key={item.name} 
                    to={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white font-bold'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white font-bold',
                      'rounded-md px-3 py-2 text-base font-bold text-gray-900'
                    )}
                  > 
                  <div className=''>{item.icon}
                    <span>   </span>
                  {item.name}
                  </div>
                    
                    <div></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium text-gray-900'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
