import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function Turnos() {
  // Steps
  const [steps] = useState({
    stepsItems: [
      "Servicio y Barbero",
      "Fecha y Hora",
      "Tu Información",
      "Confirmar Turno",
    ],
    currentStep: 1,
  });

  // Barbero
  const [selectedItemIdx, setSelectedItemIdx] = useState<any>(0);
  const menuItems = [
    {
      name: "Danya",
      label: "@danya",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    },
    {
      name: "Osama",
      label: "@osama",
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
    {
      name: "Loyan",
      label: "@loyan",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    },
    {
      name: "Carllose",
      label: "@carllose",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
    },
    {
      name: "Micheal",
      label: "@micheal",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const SelectItem = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => {
      // If you want to make this component more customizable you can use classnames and tailwind-merge library.
      return (
        <Select.Item
          className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            <div className="pr-4 line-clamp-1 flex items-center gap-2">
              {children}
            </div>
          </Select.ItemText>
          <div className="w-6">
            <Select.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </Select.ItemIndicator>
          </div>
        </Select.Item>
      );
    }
  );

  // Servicio
  const menuItems2 = [
    "Corte de Barba",
    "Corte de Pelo",
    "Corte de Pelo y Barba",
  ];

  const SelectItem2 = React.forwardRef(
    ({ children, className, ...props }: any, forwardedRef) => {
      // If you want to make this component more customizable you can use classnames and tailwind-merge library.
      return (
        <Select.Item
          className="flex items-center justify-between px-3 cursor-default py-2 duration-150 text-gray-600 data-[state=checked]:text-indigo-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-indigo-600 data-[highlighted]:bg-indigo-50 data-[highlighted]:hover:text-indigo-600 data-[highlighted]:hover:bg-indigo-50 outline-none"
          {...props}
          ref={forwardedRef}
        >
          <Select.ItemText>
            <div className="pr-4 line-clamp-1">{children}</div>
          </Select.ItemText>
          <div className="w-6">
            <Select.ItemIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </Select.ItemIndicator>
          </div>
        </Select.Item>
      );
    }
  );

  return (
    <div className="flex flex-col overflow-hidden bg-zinc-900" id="turnos">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl md:text-[5rem] font-bold leading-none text-white">
            Turnos
          </h1>
        }
      >
        <div
          className="mx-auto rounded-2xl h-full object-left-top"
          draggable={false}
        >
          <div className="flex">
            <div className="w-full mx-auto px-6 md:px-0 mt-5">
              <ul
                aria-label="Steps"
                className="items-center text-gray-600 font-medium flex"
              >
                {steps.stepsItems.map((item, id) => (
                  <li
                    key={id}
                    aria-current={steps.currentStep == id + 1 ? "step" : false}
                    className="flex-1 last:flex-none flex gap-x-2 md:items-center"
                  >
                    <div className="flex items-center flex-col gap-x-2">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                          steps.currentStep > id + 1
                            ? "bg-white border-white"
                            : steps.currentStep == id + 1
                            ? "border-white"
                            : ""
                        }`}
                      >
                        <span
                          className={` ${
                            steps.currentStep > id + 1
                              ? "hidden"
                              : steps.currentStep == id + 1
                              ? "text-white"
                              : ""
                          }`}
                        >
                          {id + 1}
                        </span>
                        {steps.currentStep > id + 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="hidden h-8 flex items-center md:h-auto">
                      <h3
                        className={`text-md ${
                          steps.currentStep == id + 1 ? "text-white" : ""
                        }`}
                      >
                        {item}
                      </h3>
                    </div>
                    <hr
                      className={`mr-2 w-full border ${
                        steps.stepsItems.length == id + 1 ? "hidden" : ""
                      } ${steps.currentStep > id + 1 ? "border-white" : ""}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 text-white">Barbero</h2>
            <Select.Root onValueChange={setSelectedItemIdx}>
              <div className="w-72 max-w-full">
                <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-3 text-md text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                  <Select.Value placeholder="Selecciona un Barbero">
                    <div className="flex items-center gap-2">
                      <img
                        src={menuItems[selectedItemIdx].avatar}
                        className="w-5 h-5 rounded-full"
                      />
                      <div className="flex-1 text-left flex items-center gap-x-1">
                        {menuItems[selectedItemIdx].name}
                        <span>{menuItems[selectedItemIdx].label}</span>
                      </div>
                    </div>
                  </Select.Value>
                  <Select.Icon className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    position="popper"
                    avoidCollisions={false}
                    className="w-[var(--radix-select-trigger-width)] max-h-64 mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-md"
                  >
                    <Select.Viewport className="">
                      {menuItems.map((item, idx) => (
                        <SelectItem key={idx} value={idx}>
                          <img
                            src={item.avatar}
                            className="w-5 h-5 rounded-full"
                          />
                          <div className="flex-1 text-left flex items-center gap-x-1">
                            {item.name}
                            <span className="text-sm">{item.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </div>
            </Select.Root>

            <h2 className="text-2xl font-bold mt-10 mb-2 text-white">Servicio</h2>
            <Select.Root>
              <div className="w-72 max-w-full">
                <Select.Trigger className="w-full inline-flex items-center justify-between px-3 py-3 text-md text-gray-600 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
                  <Select.Value placeholder="Selecciona un servicio" />
                  <Select.Icon className="text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    position="popper"
                    avoidCollisions={false}
                    className="w-[var(--radix-select-trigger-width)] mt-3 overflow-y-auto bg-white border rounded-lg shadow-sm text-md"
                  >
                    <Select.Viewport className="">
                      {menuItems2.map((item, idx) => (
                        <SelectItem2 key={idx} value={item}>
                          {item}
                        </SelectItem2>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </div>
            </Select.Root>
            <button className="mt-20 btn text-xl p-6 bg-zinc-900 rounded-xl border border-white text-white">Continuar</button>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
