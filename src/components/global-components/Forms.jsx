import React,{useState} from 'react';
import axios from "axios";

const Forms = () => {
    const [inputName, setInputName]= useState("");
    const [inputEmail, setInputEmail]= useState("");
    const [inputEmail1, setInputEmail1]= useState("");
    const [inputEmail2, setInputEmail2]= useState("");
    const [inputCheckbx, setInputCheckbx]= useState("");
    const [inputCheckbx2, setInputCheckbx2]= useState("");
    const [inputPhone, setInputPhone]= useState("");
    const [inputWebsite, setInputWebsite]= useState("");
    const [inputMessage, setInputMessage]= useState("");

    const [messageSuccess, setMessageSuccess]= useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault()
       
        let inpVlaue = {}
        inpVlaue.name = inputName
        inpVlaue.email = inputEmail
        inpVlaue.email1 = inputEmail1
        inpVlaue.email2 = inputEmail2
        inpVlaue.Checkbx = inputCheckbx
        inpVlaue.Checkbx2 = inputCheckbx
        inpVlaue.phone = inputPhone
        inpVlaue.web = inputWebsite
        inpVlaue.message = inputMessage
      
        const  fetchApi=()=>{
            axios({
                method: "POST", 
                url:"https://doesir.w3webscript.com/send/index.php", 
                data:  inpVlaue
              })
              .then(res=>{
                  console.log(res);
                if(res.status === 200){
                    setInputName("");
                    setInputEmail("");
                    setInputEmail1("");
                    setInputEmail2("");
                    setInputCheckbx("");
                    setInputCheckbx2("");
                    setInputPhone("");
                    setInputWebsite("");
                    setInputMessage("");
                    setMessageSuccess(true)
                }
              })
          }
          fetchApi()
         
        
    }
    return (
        <>
           <form action="#" className="wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay=".3s"  onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="name">
                            <input type="text" id="name" placeholder="your name*" className="inputs" onChange={(e)=>{setInputName(e.target.value)}} required value={inputName} />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="mail">
                            <input type="text" id="mail" placeholder="your email*" className="inputs"  onChange={(e)=>{setInputEmail(e.target.value)}} required value={inputEmail} />
                        </label>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <label htmlFor="mail1">
                            <input type="text" id="mail1" placeholder="your email*" className="inputs"  onChange={(e)=>{setInputEmail1(e.target.value)}} required value={inputEmail1} />
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="phn">
                            <input type="tell" id="phn" placeholder="phone number*" className="inputs" onChange={(e)=>{setInputPhone(e.target.value)}} required value={inputPhone}/>
                        </label>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <label htmlFor="web">
                            <input type="text" id="web" placeholder="website*" className="inputs" onChange={(e)=>{setInputWebsite(e.target.value)}} required value={inputWebsite}/>
                        </label>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <label htmlFor="mail1">
                            <input type="text" id="mail1" placeholder="your email*" className="inputs"  onChange={(e)=>{setInputEmail1(e.target.value)}} required value={inputEmail1} />
                        </label>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <label htmlFor="mail1">
                            <input type="checkbox" id="mail1checkbox" placeholder="" className="chkbx"  onChange={(e)=>{setInputCheckbx(e.target.value)}} required value={inputCheckbx} />
                            <span class="">
                               Managed Cloud Services
                            </span>
                        </label>
                    </div>
                    <div className="col-lg-12 col-md-6">
                        <label htmlFor="mail1">
                            <input type="checkbox" id="mail1checkbox" placeholder="" className="chkbx"  onChange={(e)=>{setInputCheckbx2(e.target.value)}} required value={inputCheckbx2} />
                        </label>
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="msg">
                            <textarea id="msg" placeholder="message*" className="inputs" onChange={(e)=>{setInputMessage(e.target.value)}} required value={inputMessage}></textarea>
                        </label>
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className="btn-style">
                            <span>submit now</span>
                        </button>
                        {messageSuccess ? <p className="email-success">Mail Sent Successfully</p>: " " }
                        
                    </div>
                </div>
            </form> 
        </>
    );
}

export default Forms;
