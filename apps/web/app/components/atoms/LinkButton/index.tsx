import Link from "next/link";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./styles.module.css"

type Props = {
  disabled?: boolean;
  variant?: "small" | "medium" | "large";
  weight?: "normal" | "bold";
} & React.ComponentPropsWithoutRef<typeof Link>;

const LinkButton = forwardRef<HTMLAnchorElement, Props>(function LinkButtonBase({
  children,
  href,
  disabled,
  variant = "medium",
  weight = "bold",
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