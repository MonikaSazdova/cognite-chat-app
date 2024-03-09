import ContactCard from "./ContactCard";

function ContactsList() {
  return (
    <div className="flex-1 w-2/3 bg-white p-3 rounded-tl-lg border border-gray-300">
      <ContactCard name="Monika Sazdova" message="This is a slightly long message, let's see how it will positioned in our card" time="09.32"/>
    </div>
  )
}

export default ContactsList;