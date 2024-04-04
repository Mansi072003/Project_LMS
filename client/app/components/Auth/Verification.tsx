import { set } from 'mongoose'
import React ,{FC,useRef,useState}from 'react'
import {toast} from 'react-hot-toast'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

type Props = {
  setRoute : (route : string) => void
}
type VerifyNumber={
  "0":string,
  "1":string,
  "2":string,
  "3":string,
};

const Verification:FC<Props> = ({setRoute}) => {
  const [invalidError,setInvalidError] = useState<boolean>(false);
  const inputRefs=[
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  const [verifyNumber,setVerifyNumber] = useState<VerifyNumber>({
    "0":"",
    "1":"",
    "2":"",
    "3":""
  });
  const verificationHandler= async()=>{
    console.log("test");
  }

  const handleInputChange=(index:number,value:string)=>{
    setInvalidError(false);
    const newVerifyNumber = {...verifyNumber,[index]:value};
    setVerifyNumber(newVerifyNumber);
  }
  return (
    <div>Verification</div>
  )
}

export default Verification