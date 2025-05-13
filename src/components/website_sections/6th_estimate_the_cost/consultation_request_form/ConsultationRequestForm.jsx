import { useState } from "react";
import emailjs from "emailjs-com";
import { CustomPhoneInput } from "../../../common_components/custom_phone_input/CustomPhoneInput";
import classes from "./ConsultationRequestForm.module.css";

export const ConsultationRequestForm = () => {
  const [name, setName] = useState("");
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumCorrect, setIsPhoneNumCorrect] = useState(false);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const nameInputHandler = (event) => {
    const value = event.target.value;
    setName(value);
    setIsNameEmpty(value === "");
  };

  const getNumberAndValidation = (number, validation) => {
    setPhoneNumber(number);
    setIsPhoneNumCorrect(validation);
  };

  const commentInputHandler = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    setShowErrorMessage(false);
    setLoading(true);

    const templateParams = {
      user_name: name,
      user_phone: phoneNumber,
      user_comment: comment,
    };

    emailjs
      .send(
        "service_obwl6bn",       // ← Replace with your actual Service ID
        "template_an82u89",      // ← Replace with your actual Template ID
        templateParams,
        "qqZc4MoYoepYD3BFM"       // ← Replace with your actual Public Key
      )
      .then(() => {
        setName("");
        setIsNameEmpty(true);
        setComment("");
        setLoading(false);
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      })
      .catch(() => {
        setShowErrorMessage(true);
        setLoading(false);
      });
  };

  return (
    <div className={classes.container}>
      {showPopup && (
        <div className={classes.popupSuccess}>
          تم إرسال رسالتك بنجاح
        </div>
      )}

      {showErrorMessage && (
        <div className={classes.errorMessage}>
          حدث خطأ أثناء الإرسال! حاول مرة أخرى لاحقًا.
        </div>
      )}

      <input
        className={classes.nameInput}
        type="text"
        value={name}
        onChange={nameInputHandler}
        placeholder="الاســم"
      />

      <CustomPhoneInput
        getValues={getNumberAndValidation}
        bgColor={"white"}
      />

      <textarea
        className={classes.commentInput}
        type="text"
        rows={3}
        value={comment}
        onChange={commentInputHandler}
        placeholder="اكتب طلبك هنا..."
      />

      <button
        className={classes.callbackBtn}
        onClick={handleSubmit}
        disabled={!isPhoneNumCorrect || isNameEmpty || loading}
      >
        {loading ? "جاري الإرسال..." : "ارسال"}
      </button>
    </div>
  );
};
