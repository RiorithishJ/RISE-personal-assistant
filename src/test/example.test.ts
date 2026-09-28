import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "../App";

describe("app entry flow", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("loads the dashboard directly without the legacy mode selector", async () => {
    const password = "test-pass";
    const encoder = new TextEncoder();
    const digest = await crypto.subtle.digest("SHA-256", encoder.encode(password));
    const hash = Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    window.localStorage.setItem("rise_password_hash", hash);
    render(<App />);

    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: password },
    });
    fireEvent.click(screen.getByRole("button", { name: /unlock/i }));

    await waitFor(() => {
      expect(screen.queryByText(/Choose your interface/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Switch to Rise/i)).not.toBeInTheDocument();
    });
  });
});
