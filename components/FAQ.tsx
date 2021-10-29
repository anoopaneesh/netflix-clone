import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
interface FAQProps {
  title: string;
  description: string;
}
const FAQ = ({description, title }: FAQProps) => {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex sm:text-2xl items-center justify-between bg-[#222] py-4 px-8 w-full">
            <span>{title}</span>
            <PlusIcon
              className={`${
                open ? "transform rotate-45" : ""
              } w-6 h-6 sm:w-10 sm:h-10 `}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="flex sm:text-2xl mt-0.5 items-center justify-between bg-[#222] py-4 px-8 w-full">
            {description}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
