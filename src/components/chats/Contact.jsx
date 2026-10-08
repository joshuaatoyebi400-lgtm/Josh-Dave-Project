import { contactList } from "./contact.js";
import { CircleUserRound } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 ml-6 mt-12">
      {contactList.map((contact, index) => (
        <div key={index} className="flex gap-3  items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
            <p className=" ">
              <CircleUserRound size={48}/>
            </p>
          <div>
            <p className="text-2xl">{contact.name}</p>
          <p className="font-bold">{contact.activity[3]}</p>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
}
