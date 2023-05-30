import clsx from "clsx";
import { Args, PartialStoryFn } from "@storybook/csf";
import { Meta, StoryObj, ReactRenderer } from "@storybook/react";
import { LinkButton } from "@/components/atoms/LinkButton/index";
import styles from "@stories/global.module.css";

const createDecorator = () => {
  const decorator = (Story: PartialStoryFn<ReactRenderer, Args>) => (
    <div className={clsx(styles["container"])}>
      <div className={clsx(styles["sub-container"])}>
        <Story />
      </div>
    </div>
  )
  return decorator;
}

const meta: Meta<typeof LinkButton> = {
  title: "atoms/LinkButton",
  component: LinkButton,
}

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  decorators: [createDecorator()],
  args: {
    href: "/new-podcasts",
    children: "New Podcasts"
  }
}

export const DisabledLink: Story = {
  decorators: [createDecorator()],
  args: {
    href: "/new-podcasts",
    children: "New Podcasts",
    disabled: true,
  }
}