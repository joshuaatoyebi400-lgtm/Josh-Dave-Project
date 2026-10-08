import { contactList } from "./contact.js";
import { CircleUserRound } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-4 ml-6 mt-12">
      {contactList.map((contact, index) => (
        <div key={index} >
          <div className="flex gap-3  items-center text-center">
            <CircleUserRound />
            <p>{contact.name}</p>
          </div>
          <p className="ml-10">{contact.activity[3]}</p>
        </div>
      ))}
      <div></div>
    </div>
  );
}
