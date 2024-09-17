import { FC, useState } from "react";

export const FormItem: FC<{
  type?: string;
  placeholder?: string;
  value?: string;
  name: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void; // Added onBlur prop for form validation
  isTextArea?: boolean;
  error?: string | boolean;
}> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  onBlur,
  isTextArea = false,
  error,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [isDirty, setIsDirty] = useState(!!value); // Initially check if there's any value

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = (e: any) => {
    setHasFocus(false); // Reset focus state on blur
    if (onBlur) {
      onBlur(e); // Call parent's onBlur**
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target instanceof HTMLInputElement) {
      // The target is an input element
      onChange(e as React.ChangeEvent<HTMLInputElement>);
    } else if (e.target instanceof HTMLTextAreaElement) {
      // The target is a textarea element
      onChange(e as React.ChangeEvent<HTMLTextAreaElement>);
    }

    setIsDirty(!!e.target.value); // Update dirty state for both cases
  };

  return (
    <label className="relative w-full ">
      {!isTextArea ? (
        <div className="flex flex-col w-full">
          <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className="w-full placeholder-neutral-1 bg-neutral-2 text-black dark:bg-[#454158] pl-[20px] md:pl-[25px] lg:pl-[30px] pr-[16px] py-[16px] rounded-md"
          />
          <span
            className={`text-black dark:text-neutral-1 absolute left-0 px-lg py-md transition duration-200 input-text
                        ${
                          (hasFocus || isDirty) &&
                          "transform -translate-y-[20px] -translate-y-[22.5px] md:-translate-y-[25px] lg:-translate-y-[28px] xl:-translate-y-[29px] -translate-x-[5px]"
                        }`}
          >
            {placeholder}
          </span>
          {error && <span className="text-red-500 text-sm ">{error}</span>}
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <textarea
            rows={6}
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={`placeholder-neutral-1 bg-neutral-2 dark:bg-[#454158] px-md py-sm rounded-md
                   `}
          />
          <span
            className={`text-black dark:text-neutral-1 absolute left-0 p-md transition duration-200 input-text
                        ${
                          (hasFocus || isDirty) &&
                          "transform -translate-y-[29px] -translate-x-[6px]"
                        }`}
          >
            {" "}
            {placeholder}
          </span>
          {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
      )}
    </label>
  );
};

export default FormItem;
