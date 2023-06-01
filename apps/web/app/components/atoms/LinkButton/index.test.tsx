import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import * as stories from "./index.stories";
import { composeStories } from "@storybook/testing-react";

const { Default, DisabledLink } = composeStories(stories);

const user = userEvent.setup();

test("Linkが表示されている", () => {
  render(<Default />)
  expect(screen.getByRole("link", { name: "New Podcasts".toUpperCase() })).toBeInTheDocument()
})

test("Linkをクリックすると、パスが変更される", async () => {
  mockRouter.setCurrentUrl("/");
  render(<Default />)
  await act(async () => {
    await user.click(screen.getByRole("link", { name: "New Podcasts".toUpperCase() }))
  })
  expect(mockRouter).toMatchObject({ pathname: "/new-podcasts" })
})

test("Linkがdisabledになる", async () => {
  render(<DisabledLink />)
  expect(screen.getByRole("link", { name: "New Podcasts".toUpperCase() })).toHaveAttribute("aria-disabled", "true")
})

test("Linkがboldになる", () => {
  render(<Default />)
  expect(screen.getByRole("link", { name: "NEW PODCASTS".toUpperCase() })).toHaveAttribute("data-weight", "bold")
})

test("LinkのfontSizeがmediumになる", () => {
  render(<Default />)
  expect(screen.getByRole("link", { name: "New Podcasts".toUpperCase() })).toHaveAttribute("data-variant", "medium" )
})