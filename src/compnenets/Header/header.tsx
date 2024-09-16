import Link from 'next/link'
import "./header.css"
import Navbar from './Navbar';
import { verifyTokenForPage } from '@/utels/jwttoken';
import LogoutButton from './LogoutButton';
import { cookies } from 'next/headers';
import LoginRE from "./loginangre"
const Header = () => {
  const token = cookies().get("token")?.value || "";
  const payload = verifyTokenForPage(token);
  return (
    <header className='header'>
        <div className="logo">
        <Link href={'/'}><img src="/images/Logo.png" alt="logo" /></Link>
        </div>
        <Navbar isAdmin={payload?.isAdmin || false}/>
      <div className='sin'>
        {payload ? (
          <div className='logoutgroub'>
            <strong>
             <Link href={'/profile'}>{payload?.username}</Link>
            </strong>
            <LogoutButton />
          </div>
        ) : (
          <>
           <LoginRE/>
          </>
        )}
      </div>
    </header>
  )
}

export default Header