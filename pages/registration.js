// import Link from 'next/link'
// import MyLayout from './components/layout'

// export default function Registration(){
//     return(
//         <>
//         <div>
//         <MyLayout title="Registration"/> <br /><br />
//         <form >
//             <div className='container' style={{textAlign:"left"}}>
//             <h1>Register</h1>
//             <p>Plaese fill up this form -</p>
//             <br/>

//             <label for="fname">FULL Name: </label>
//             <input type={"text"} id="fname" placeholder='Enter full name'/><br /><br />

//             <label for="lname">NICK Name: </label>
//             <input type={"text"} id="lname" placeholder='Enter hnoululu name'/><br /><br />

//             <label for="email">Email: </label>
//             <input type={"email"} id='email' placeholder="Enter Email"required/><br /><br />

//             <label for="password">Password: </label>
//             <input type={"password"}  id="password" placeholder='Enter password'required/><br /><br />

//             {/* <button onClick={"mySubmitBtn()"}>Submit</button> */}
//             {/* <button type="submit" formAction='/'>Submit</button> */}
//             <button type="submit" formAction='/' style={{marginRight:"20px"}}>Submit  </button>
//             <Link href="/forgotpassword">Forgot Password?</Link>
//             </div>
//         </form>
//         </div>

//         </>
//     )
// }