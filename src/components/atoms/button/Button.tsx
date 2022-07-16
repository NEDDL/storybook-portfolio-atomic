import { HTMLAttributes, useState } from "react";
import cn from "classnames";
import { BiCalendar, BiRocket, BiSave, BiSearch } from "react-icons/bi";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  color?: "Primary" | "Secondary" | "Success" | "Error";
  variant?: "Contained" | "Outlined";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  iconType?: "Search" | "Save" | "Rocket" | "Calendar";
  menu?: boolean;
  onButtonClick: () => void;
  onMenuFirstRowClick: () => void;
  onMenuSecondRowClick: () => void;
  onMenuThirdRowClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  color,
  variant,
  size,
  icon,
  iconType,
  menu,
  onButtonClick,
  onMenuFirstRowClick,
  onMenuSecondRowClick,
  onMenuThirdRowClick,
  ...rest
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <div className="flex items-center gap-1" {...rest}>
      <button
        onClick={() => onButtonClick()}
        type="button"
        className={cn({
          "flex items-center align-middle font-normal tracking-wide rounded-md transition-colors duration-200 transform focus:outline-none focus:ring focus:ring-opacity-80":
            true,
          "text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300 border-blue-600 border-2":
            color === "Primary" && variant === "Contained",
          "text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300 border-pink-600 border-2":
            color === "Secondary" && variant === "Contained",
          "text-white bg-green-600  hover:bg-green-500 focus:ring-green-300 border-green-600 border-2":
            color === "Success" && variant === "Contained",
          "text-white bg-red-600  hover:bg-red-500 focus:ring-red-300 border-red-600 border-2":
            color === "Error" && variant === "Contained",
          "text-blue-600 bg-white hover:border-blue-600 border-2 focus:ring-blue-300 border-blue-400":
            color === "Primary" && variant === "Outlined",
          "text-pink-600 bg-white hover:border-pink-600 border-2 focus:ring-pink-300 border-pink-400":
            color === "Secondary" && variant === "Outlined",
          "text-green-600 bg-white hover:border-green-600 border-2 focus:ring-green-300 border-green-400":
            color === "Success" && variant === "Outlined",
          "text-red-600 bg-white hover:border-red-600 border-2 focus:ring-red-300 border-red-400":
            color === "Error" && variant === "Outlined",
          "px-2 py-1.5 text-sm": size === "sm",
          "px-4 py-2.5 text-md": size === "md",
          "px-6 py-2.5 text-lg": size === "lg",
        })}
      >
        {icon && (
          <span
            className={cn({
              "text-xl": size === "lg",
            })}
          >
            {iconType === "Search" && <BiSearch />}
            {iconType === "Save" && <BiSave />}
            {iconType === "Rocket" && <BiRocket />}
            {iconType === "Calendar" && <BiCalendar />}
          </span>
        )}
        <span className={cn({ "ml-2": icon })}>{label}</span>
      </button>
      {menu && (
        <div class="relative">
          <button
            type="button"
            onClick={() => handleMenu()}
            className={cn({
              "relative z-10 block transition-colors duration-200 transform rounded-md focus:outline-none focus:ring focus:ring-opacity-80":
                true,
              "text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300 border-blue-600 border-2":
                color === "Primary" && variant === "Contained",
              "text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300 border-pink-600 border-2":
                color === "Secondary" && variant === "Contained",
              "text-white bg-green-600  hover:bg-green-500 focus:ring-green-300 border-green-600 border-2":
                color === "Success" && variant === "Contained",
              "text-white bg-red-600  hover:bg-red-500 focus:ring-red-300 border-red-600 border-2":
                color === "Error" && variant === "Contained",
              "text-blue-600 bg-white hover:border-blue-600 border-2 focus:ring-blue-300 border-blue-400":
                color === "Primary" && variant === "Outlined",
              "text-pink-600 bg-white hover:border-pink-600 border-2 focus:ring-pink-300 border-pink-400":
                color === "Secondary" && variant === "Outlined",
              "text-green-600 bg-white hover:border-green-600 border-2 focus:ring-green-300 border-green-400":
                color === "Success" && variant === "Outlined",
              "text-red-600 bg-white hover:border-red-600 border-2 focus:ring-red-300 border-red-400":
                color === "Error" && variant === "Outlined",
              "px-2 py-1 text-sm": size === "sm",
              "px-3 py-2.5 text-md": size === "md",
              "px-4 py-2 text-lg": size === "lg",
            })}
          >
            <svg
              className={cn({
                "w-6 h-6 text-sm": size === "sm" || "md",
                "w-8 h-8 text-lg": size === "lg",
                "text-white": variant === "Contained",
                "text-blue-600": color === "Primary" && variant === "Outlined",
                "text-pink-600":
                  color === "Secondary" && variant === "Outlined",
                "text-green-600": color === "Success" && variant === "Outlined",
                "text-red-600": color === "Error" && variant === "Outlined",
              })}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          {toggleMenu && (
            <div className="absolute left-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl cursor-pointer dark:bg-gray-700">
              <div
                onClick={() => onMenuFirstRowClick()}
                className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                small{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  (640x426)
                </span>
              </div>
              <div
                onClick={() => onMenuSecondRowClick()}
                className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform border-b cursor-pointer dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                medium{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  (1920x1280)
                </span>
              </div>
              <div
                onClick={() => onMenuThirdRowClick()}
                className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform cursor-pointer dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                large{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  (2400x1600)
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
