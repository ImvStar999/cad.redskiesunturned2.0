import * as React from "react";
import { useTextField } from "@react-aria/textfield";
import { mergeProps } from "@react-aria/utils";
import { useObjectRef } from "@react-aria/utils";
import { AriaTextFieldProps } from "@react-types/textfield";
import { cn } from "utils/cn"; // Adjust this import if your utils path is different

interface Props extends AriaTextFieldProps<"textarea" | "input"> {
  inputElementType: "textarea" | "input";
  label: React.ReactNode;
  isTextarea?: boolean;
  isOptional?: boolean;
  className?: string;
  labelClassnames?: string;
  errorMessage?: string | null;
}

export function TextField(props: Props) {
  const {
    label,
    isOptional,
    className,
    labelClassnames,
    errorMessage,
    inputElementType,
    ...rest
  } = props;

  const ref = useObjectRef(
    React.useRef<HTMLInputElement | HTMLTextAreaElement>(null)
  );

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...rest,
        inputElementType,
      },
      ref
    );

  const InputTag = inputElementType;

  return (
    <div className={cn("flex flex-col", className)}>
      <label {...labelProps} className={labelClassnames}>
        {label}{" "}
        {isOptional && <span className="text-neutral-500">(optional)</span>}
      </label>

      <InputTag
        {...mergeProps(inputProps, rest)}
        ref={ref}
        className="input input-bordered w-full"
        aria-invalid={!!errorMessage}
        aria-errormessage={errorMessage ? "error-msg" : undefined}
      />

      {errorMessage ? (
        <p {...errorMessageProps} id="error-msg" className="text-red-500 text-sm">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
