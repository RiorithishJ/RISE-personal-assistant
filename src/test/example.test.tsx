import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

describe("app entry flow", () => {
  beforeEach(() => {
    window.localStorage.clear();
    Object.defineProperty(globalThis, "DOMMatrix", {
      value: class DOMMatrix {},
      configurable: true,
    });
  });

  it("renders the split-screen mode chooser immediately on entry", async () => {
    const { default: App } = await import("../App");

    render(<App />);

    expect(await screen.findByText("JARVIS")).toBeInTheDocument();
    expect(await screen.findByText("RISE")).toBeInTheDocument();
    expect(await screen.findByText("SELECT MODE")).toBeInTheDocument();
  });
});
