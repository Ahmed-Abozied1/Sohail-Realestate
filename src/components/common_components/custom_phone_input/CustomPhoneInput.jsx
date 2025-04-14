import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import classes from "./CustomPhoneInput.module.css";

export const CustomPhoneInput = ({ getValues, bgColor }) => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const phoneRegex = /^\+[\d]{1} \([\d]{2,3}\) [\d]{2,3}-[\d]{2,3}-[\d]{2}$/;

    const setPhoneNumberToRuCode = () => {
        setPhoneNumber("");
        phoneNumberInputHandler("");
    };

    const phoneNumberInputHandler = (event) => {

        let inputNumber = String(event).replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5");
        
        if(inputNumber.match(phoneRegex)) {
            getValues(inputNumber, true);
        } else {
            getValues(inputNumber, false);
        }

        setPhoneNumber(inputNumber);

    };


    return (

        <PhoneInput value={phoneNumber}
            onChange={phoneNumberInputHandler} 
            onFocus={setPhoneNumberToRuCode}
            specialLabel={false} 
            placeholder=" رقـم الهاتـف" 
            
            autoFormat={true}
            inputClass={classes.phoneInput}
            inputStyle={bgColor && {background: bgColor}}
        />
    );
}