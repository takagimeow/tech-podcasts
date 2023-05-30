import Link from "next/link";
import { forwardRef } from "react";

type Props = {
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<typeof Link>;

const LinkButton = forwardRef<HTMLAnchorElement, Props>(function LinkButtonBase({
  children,
  href,
  disabled,
  ...rest
}, ref) {
  return (
    <Link href={href} {...rest} legacyBehavior>
      <a ref={ref} aria-disabled={disabled ? "true" : "false"}>
        {children}
      </a>
    </Link>
  )
})

export {
  LinkButton,
}