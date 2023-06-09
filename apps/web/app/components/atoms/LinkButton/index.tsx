import Link from "next/link";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css"

type Props = {
  disabled?: boolean;
  variant?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
  theme?: "light" | "dark";
  state?: "active" | "inactive";
} & React.ComponentPropsWithoutRef<typeof Link>;

const LinkButton = forwardRef<HTMLAnchorElement, Props>(function LinkButtonBase({
  children,
  href,
  disabled,
  variant = "medium",
  weight = "bold",
  theme = "dark",
  state = "inactive",
  ...rest
}, ref) {
  return (
    <Link href={href} {...rest} legacyBehavior>
      <a
        className={clsx(styles["module"])} 
        ref={ref} 
        aria-disabled={disabled ? "true" : "false"}
        data-variant={variant}
        data-weight={weight}
        data-theme={theme}
        data-state={state}
      >
        {
          typeof children === "string" ? (
            children.toUpperCase()
          ) : (
            children
          )
        }
      </a>
    </Link>
  )
})

export {
  LinkButton,
}