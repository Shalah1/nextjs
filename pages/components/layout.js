import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <nav>

        <Link href="/">Home//</Link> {' '}
        <Link href="/about"> About us/</Link>  {' '}
        <Link href="/contactus">Contactus/</Link> {' '}
        {/* <Link href="/registration">Registration/ </Link> {' '} */}
        <Link href="/dashboard">Dashboard </Link> {' '}
        {/* <Link href="/doctor">Doctors/ </Link> {' '} */}
        {/* <Link href="/allusers">Users/ </Link> {' '} */}
        {/* <Link href="/allintern">Interns/ </Link> {' '} */}
        {/* <Link href="/login">Login.</Link> */}
        {/* <Link href="/login">.</Link> */}
        {/* <Link href="/employee">signup.</Link> */}
        </nav>
        <main> 
        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            EMPLOYEE-GOVERNENCE</div>
        </>
    )
}