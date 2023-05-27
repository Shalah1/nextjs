import MyLayout from "./components/layout"

export default function ForgotPassword(){
    return(
        <>
              <MyLayout/>
              <div style={{textAlign:"left",margin:"30px"}}>
            <h3>Forgot Password?</h3>
            <hr/>
            <div style={{marginBottom:"10px"}}>
          if u dont remember password then return form here!
            </div>
            </div>
        </>
    )
}