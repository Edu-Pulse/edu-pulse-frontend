/* eslint-disable no-undef */

import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../../src/pages/AuthFlow/Login"; // Import your Login component here
import app from "../../src/lib/axiosConfig"; // Import the app or API module used for login
import { jest } from "@jest/globals";
import { ValidationContextProvider } from "../../src/context/ValidationContext";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
	// User enters valid email and password, clicks submit, and is redirected to dashboard if user has admin role, or to home page if user has user role.
	it("should redirect to dashboard or home page when valid email and password are submitted for admin role", async () => {
		// Mock the app.post method
		const mockPost = jest.spyOn(app, "post").mockResolvedValueOnce({
			status: 200,
			data: { data: "[ROLE_ADMIN]" },
		});
		// Render the component
		const { getByLabelText, getByText } = render(
			<BrowserRouter>
				<ValidationContextProvider>
					<Login />
				</ValidationContextProvider>
			</BrowserRouter>
		);
		// Fill out the form
		fireEvent.change(getByLabelText("Email"), {
			target: { value: "admin@email.com" },
		});
		fireEvent.change(getByLabelText("Password"), {
			target: { value: "admin1234" },
		});
		// Submit the form
		fireEvent.click(getByText("Masuk"));
		// Wait for the redirect
		await waitFor(() => {
			expect(mockPost).toHaveBeenCalledWith(
				"login",
				{ email: "admin@email.com", password: "admin1234" },
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "*/*",
					},
				}
			);
			expect(window.location.href).toEqual("/dashboard");
		});
	});

	// User enters valid email and password, clicks submit, and receives an error message if user has no role.
	it("should display error message when user has no role", async () => {
		// Mock the app.post method
		const mockPost = jest.spyOn(app, "post").mockResolvedValueOnce({
			status: 200,
			data: { data: "[]" },
		});
		// Render the component
		const { getByLabelText, getByText } = render(
			<BrowserRouter>
				<ValidationContextProvider>
					<Login />
				</ValidationContextProvider>
			</BrowserRouter>
		);
		// Fill out the form
		fireEvent.change(getByLabelText("Email"), {
			target: { value: "triniti940@bmobilerk.com" },
		});
		fireEvent.change(getByLabelText("Password"), {
			target: { value: "TestUser123!" },
		});
		// Submit the form
		fireEvent.click(getByText("Masuk"));
		// Wait for the error message
		await waitFor(() => {
			expect(mockPost).toHaveBeenCalledWith(
				"login",
				{ email: "test@test.com", password: "password" },
				{
					headers: {
						"Content-Type": "application/json",
						Accept: "*/*",
					},
				}
			);
			expect(getByText("Email atau password salah")).toBeInTheDocument();
		});
	});

	// User enters invalid email format, clicks submit, and sees email validation error message.
	it("should display email validation error message when invalid email format is submitted", async () => {
		// Render the component
		const { getByLabelText, getByText } = render(
			<BrowserRouter>
				<ValidationContextProvider>
					<Login />
				</ValidationContextProvider>
			</BrowserRouter>
		);
		// Fill out the form with invalid email format
		fireEvent.change(getByLabelText("Email"), {
			target: { value: "invalidemail" },
		});
		fireEvent.change(getByLabelText("Password"), {
			target: { value: "password" },
		});
		// Submit the form
		fireEvent.click(getByText("Masuk"));
		// Wait for the error message
		await waitFor(() => {
			expect(getByText("Email tidak valid")).toBeInTheDocument();
		});
	});

	// User enters invalid password format, clicks submit, and sees password validation error message.
	it("should display password validation error message when invalid password format is submitted", async () => {
		// Render the component
		const { getByLabelText, getByText } = render(
			<BrowserRouter>
				<ValidationContextProvider>
					<Login />
				</ValidationContextProvider>
			</BrowserRouter>
		);
		// Fill out the form with invalid password format
		fireEvent.change(getByLabelText("Email"), {
			target: { value: "test@test.com" },
		});
		fireEvent.change(getByLabelText("Password"), {
			target: { value: "short" },
		});
		// Submit the form
		fireEvent.click(getByText("Masuk"));
		// Wait for the error message
		await waitFor(() => {
			expect(
				getByText(
					"Password tidak boleh kurang dari 8 atau lebih dari 20 karakter"
				)
			).toBeInTheDocument();
		});
	});

	// User enters email with leading/trailing spaces, clicks submit, and sees email validation error message.
	it("should display email validation error message when email with leading/trailing spaces is submitted", async () => {
		// Render the component
		const { getByLabelText, getByText } = render(
			<BrowserRouter>
				<ValidationContextProvider>
					<Login />
				</ValidationContextProvider>
			</BrowserRouter>
		);
		// Fill out the form with email containing leading/trailing spaces
		fireEvent.change(getByLabelText("Email"), {
			target: { value: " test@test.com " },
		});
		fireEvent.change(getByLabelText("Password"), {
			target: { value: "password" },
		});
		// Submit the form
		fireEvent.click(getByText("Masuk"));
		// Wait for the error message
		await waitFor(() => {
			expect(getByText("Email tidak valid")).toBeInTheDocument();
		});
	});
});
