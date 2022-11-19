import { FC, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

type TextFieldProps = {
  errorTextField: string | undefined;
  touchedTextField: boolean | undefined;
  valueTextField: string;
  nameTextField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  showError: boolean;
  displayNameTextField: string;
  typeField: "text" | "password";
};

type InputProps = {
  showError: boolean;
  isErrorOnTextField: boolean | "" | undefined;
  displayNameTextField: string;
  nameTextField: string;
  valueTextField: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  typeField: "text" | "password";
  revealPassword: "text" | "password";
};

type LabelInputProps = {
  showError: boolean;
  isErrorOnTextField: boolean | "" | undefined;
  nameTextField: string;
  displayNameTextField: string;
};

type DivRevealTogglePasswordProps = {
  valuePasswordField: string;
  toggleRevealPassword: () => void;
  revealPassword: string;
};

type ShowErrorMessageInputProps = {
  isErrorOnTextField: boolean | "" | undefined;
  errorTextField: string | undefined;
};

export const TextField: FC<TextFieldProps> = ({
  displayNameTextField,
  errorTextField,
  handleBlur,
  handleChange,
  nameTextField,
  showError,
  touchedTextField,
  typeField,
  valueTextField,
}): JSX.Element => {
  const isErrorOnTextField = errorTextField && touchedTextField;

  const [revealPassword, setRevealPassword] = useState<"text" | "password">(
    "password"
  );

  const toggleRevealPassword = () => {
    setRevealPassword(revealPassword === "password" ? "text" : "password");
  };

  return (
    <div className="h-20 relative">
      <Input
        displayNameTextField={displayNameTextField}
        handleBlur={handleBlur}
        handleChange={handleChange}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        revealPassword={revealPassword}
        showError={showError}
        typeField={typeField}
        valueTextField={valueTextField}
      />

      {typeField === "password" && (
        <DivRevealTogglePassword
          revealPassword={revealPassword}
          toggleRevealPassword={toggleRevealPassword}
          valuePasswordField={valueTextField}
        />
      )}

      <LabelInput
        displayNameTextField={displayNameTextField}
        isErrorOnTextField={isErrorOnTextField}
        nameTextField={nameTextField}
        showError={showError}
      />

      {showError && (
        <ShowErrorMessageInput
          errorTextField={errorTextField}
          isErrorOnTextField={isErrorOnTextField}
        />
      )}
    </div>
  );
};

export const DivRevealTogglePassword: FC<DivRevealTogglePasswordProps> = ({
  valuePasswordField,
  toggleRevealPassword,
  revealPassword,
}): JSX.Element => {
  return (
    <div
      className={`rounded-full h-10 w-10 p-2.5 text-neutral-500 absolute right-1 active:scale-95
          top-3 hover:bg-neutral-100 active:bg-neutral-200 
          dark:text-neutral-400 
          dark:hover:bg-neutral-600 dark:active:bg-neutral-700
          ${valuePasswordField.length === 0 ? "hidden" : ""}`}
      onClick={toggleRevealPassword}
    >
      {revealPassword === "password" ? <EyeIcon /> : <EyeSlashIcon />}
    </div>
  );
};

export const Input: FC<InputProps> = ({
  isErrorOnTextField,
  showError,
  displayNameTextField,
  typeField,
  nameTextField,
  valueTextField,
  handleBlur,
  handleChange,
  revealPassword,
}): JSX.Element => {
  return (
    <input
      className={`peer placeholder-transparent h-12 mt-2 mb-1 w-72 md:w-80
      shadow-sm 
      focus:border-2 focus:border-neutral-400 
      dark:focus:border-neutral-600 dark:border-neutral-900
      dark:bg-neutral-600 dark:text-neutral-100 dark:focus:bg-neutral-700
      dark:placeholder-transparent
      ${
        showError && isErrorOnTextField
          ? `border border-rose-400 focus:border-2 focus:border-rose-400 
            dark:border-rose-400 dark:focus:border-rose-400`
          : "border-neutral-300"
      }`}
      autoComplete="off"
      required
      type={typeField === "text" ? "text" : revealPassword}
      placeholder={displayNameTextField}
      name={nameTextField}
      value={valueTextField}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export const LabelInput: FC<LabelInputProps> = ({
  isErrorOnTextField,
  showError,
  displayNameTextField,
  nameTextField,
}): JSX.Element => {
  return (
    <label
      className={`pointer-events-none peer-focus:px-1 px-1 transition-all peer-focus:text-sm peer-focus:-top-0.5 -top-0.5
      peer-focus:left-3.5 rounded-sm
      bg-white
     
      dark:bg-neutral-600

      peer-focus:bg-gradient-to-b peer-focus:from-white peer-focus:to-neutral-50 


      peer-focus:dark:bg-gradient-to-b peer-focus:dark:from-neutral-800 peer-focus:dark:to-neutral-700 

      left-3.5 block absolute  text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-5 
      peer-placeholder-shown:left-4
                ${
                  showError && isErrorOnTextField
                    ? "text-rose-400 peer-focus:text-rose-400"
                    : "text-neutral-400 peer-focus:text-neutral-400"
                }
                `}
      htmlFor={nameTextField}
    >
      {displayNameTextField}
    </label>
  );
};

export const ShowErrorMessageInput: FC<ShowErrorMessageInputProps> = ({
  isErrorOnTextField,
  errorTextField,
}): JSX.Element => {
  return (
    <>
      {isErrorOnTextField && (
        <p className="ml-1 h-5 text-rose-400 text-sm">{errorTextField}</p>
      )}
    </>
  );
};
