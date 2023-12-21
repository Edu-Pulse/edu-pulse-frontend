import mastercard from "@/assets/mastercardlogo.png";
import visa from "@/assets/visalogo.png";
import amex from "@/assets/amexlogo.png";
import paypal from "@/assets/paypallogo.png";
import Input from "@/components/UI/Input";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const PaymentCard = ({
  setCardNumber,
  setCardHolderName,
  setCvv,
  setExpiryDate,
  bgColor,
  children,
}) => {
  const [accordionOpen, setAccordionOpen] = useState();

  return (
    <>
      <div
        className={`flex ${bgColor} h-10 rounded-md my-2 justify-between p-2 content-center w-full`}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <p className="text-white">{children}</p>
        {accordionOpen ? (
          <ChevronUpIcon className="text-white h-6 w-6" />
        ) : (
          <ChevronDownIcon className="text-white h-6 w-6" />
        )}
      </div>
      <div
        className={`bg-white rounded-b-2xl shadow-lg h-2/3 ${
          accordionOpen ? `grid-rows-[1fr] opacity-100` : `hidden`
        }`}
      >
        <div className="container flex justify-center my-6 gap-4">
          <img src={mastercard} alt="" />
          <img src={visa} alt="" />
          <img src={amex} alt="" />
          <img src={paypal} alt="" />
        </div>
        <div className="md:px-32 p-10">
          <div className="md:my-4">
            <p>Card Number</p>
            <Input
              className="!border-b-black !rounded-none"
              placeholder="4480 0000 0000 0000"
              type="text"
              onChange={(e) => setCardNumber(e.target.value)}
            ></Input>
          </div>
          <div className="my-4">
            <p>Card Holder Name</p>
            <Input
              className="!border-b-black !rounded-none"
              placeholder="John Doe"
              type="text"
              onChange={(e) => setCardHolderName(e.target.value)}
            ></Input>
          </div>
          <div className="flex justify-between my-4">
            <div>
              <p>CVV</p>
              <Input
                className="!border-b-black !rounded-none"
                placeholder="000"
                type="text"
                onChange={(e) => setCvv(e.target.value)}
              ></Input>
            </div>
            <div>
              <p>Expiry Date</p>
              <Input
                className="!border-b-black !rounded-none"
                placeholder="07/24"
                type="text"
                onChange={(e) => setExpiryDate(e.target.value)}
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
