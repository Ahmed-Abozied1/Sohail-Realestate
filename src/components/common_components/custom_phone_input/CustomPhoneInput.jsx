import { useState } from "react";
import classes from "./CustomPhoneInput.module.css";

export const CustomPhoneInput = ({ getValues, bgColor }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    // اسمح فقط بالأرقام
    const onlyDigits = value.replace(/\D/g, '');

    // تحقق من أن الرقم سعودي: يبدأ بـ 5 أو 05 وطوله من 9 إلى 10 أرقام
    const isValid = /^(05\d{8}|5\d{8})$/.test(onlyDigits);

    setPhoneNumber(onlyDigits);
    getValues(onlyDigits, isValid);
  };

  return (
    <input
      type="tel"
      value={phoneNumber}
      onChange={handleInputChange}
      placeholder="رقم الهاتف السعودي (مثال: 05xxxxxxxx)"
      className={classes.phoneInput}
      style={bgColor ? { background: bgColor } : {}}
      maxLength={10}
    />
    
  );
};
