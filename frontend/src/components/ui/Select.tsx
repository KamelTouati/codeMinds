import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { dataCategories } from "../../data";
import { ICategory } from "../../interfaces";

function classNames(...classes: string[]) {
  return classes.join(" ");
}

interface IProps {
  selected: ICategory;
  setSelected: (val: ICategory) => void;
}

const Select = ({ selected, setSelected }: IProps) => {
  //   Start renders ----------------------------------------------------------------------
  const renderOptions = dataCategories.map((category) => (
    <Listbox.Option
      key={category.id}
      className={({ active }) =>
        classNames(
          active ? "bg-indigo-600 text-white" : "text-gray-900",
          "relative cursor-default select-none py-2 pl-3 pr-9"
        )
      }
      value={category}
    >
      {({ selected, active }) => (
        <>
          <div className="flex items-center">
            <img
              src={category.imageURL}
              alt=""
              className="h-5 w-5 flex-shrink-0 rounded-full"
            />
            <span
              className={classNames(
                selected ? "font-semibold" : "font-normal",
                "ml-3 block truncate"
              )}
            >
              {category.name}
            </span>
          </div>

          {selected ? (
            <span
              className={classNames(
                active ? "text-white" : "text-indigo-600",
                "absolute inset-y-0 right-0 flex items-center pr-4"
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}
        </>
      )}
    </Listbox.Option>
  ));

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Category
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.imageURL}
                  alt=""
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {renderOptions}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
