import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/nasa.png" width={128} height={70}/>
        </div>

        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/ssrusers"}>SSR Users</Link>
        <Link href={"/cluser"}>CL Users</Link>
      </nav>
    );
}
 
export default Navbar;