import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8333 15C27.8333 22.0877 22.0877 27.8333 15 27.8333C7.91234 27.8333 2.16666 22.0877 2.16666 15C2.16666 7.91234 7.91234 2.16666 15 2.16666C22.0877 2.16666 27.8333 7.91234 27.8333 15ZM30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM23.2759 8.27591C23.2759 9.1329 22.5812 9.82763 21.7242 9.82763C20.8672 9.82763 20.1725 9.1329 20.1725 8.27591C20.1725 7.41891 20.8672 6.72418 21.7242 6.72418C22.5812 6.72418 23.2759 7.41891 23.2759 8.27591ZM15.1642 12.8396L15.3542 10.3423L15.5185 8.18184C14.7802 8.12567 14.0418 8.19007 13.3314 8.36882C12.7443 8.51654 12.1763 8.74235 11.6432 9.04275C10.4649 9.70664 9.51004 10.705 8.89922 11.9116C8.2884 13.1182 8.04909 14.4788 8.21156 15.8214C8.37403 17.164 8.93098 18.4283 9.81197 19.4544C10.693 20.4805 11.8585 21.2222 13.161 21.5859C14.4636 21.9496 15.8448 21.9189 17.1299 21.4976C18.415 21.0763 19.5463 20.2834 20.3808 19.2192C20.7584 18.7376 21.0675 18.2103 21.3023 17.6523C21.5864 16.9774 21.7617 16.2576 21.8179 15.5196L21.818 15.5186L19.6576 15.3543L17.1603 15.1643L14.9999 15L15.1642 12.8396ZM18.9619 17.4743L14.8355 17.1604L12.6751 16.996L12.8395 14.8356L13.1534 10.7092C13.0012 10.7747 12.8521 10.8485 12.7068 10.9304C11.9019 11.3839 11.2496 12.0659 10.8323 12.8902C10.415 13.7145 10.2515 14.644 10.3625 15.5611C10.4735 16.4783 10.854 17.342 11.4558 18.0429C12.0577 18.7439 12.8539 19.2506 13.7437 19.4991C14.6335 19.7475 15.5771 19.7265 16.455 19.4387C17.3329 19.151 18.1057 18.6093 18.6758 17.8823C18.7787 17.751 18.8742 17.6148 18.9619 17.4743Z" fill="url(#paint0_linear_883_4378)" />
          <defs>
            <linearGradient id="paint0_linear_883_4378" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DD7EFF" />
              <stop offset="0.461458" stop-color="#685DFF" />
              <stop offset="1" stop-color="#2152FF" />
            </linearGradient>
          </defs>
        </svg>

        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <Image
                  src='/assets/logout.svg'
                  alt='logout'
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
