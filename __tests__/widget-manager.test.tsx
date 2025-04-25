import Home from "@/components/tabs/home";
import { defaultHomeWidgets } from "@/components/tabs/home/contexts/widgets-context";
import { fireEvent, render, screen } from "@testing-library/react";

describe("WidgetManager", () => {
	beforeAll(() => {
		// Mock the HTMLDialogElement API
		HTMLDialogElement.prototype.show = jest.fn();
		HTMLDialogElement.prototype.showModal = jest.fn();
		HTMLDialogElement.prototype.close = jest.fn();
		Object.defineProperty(HTMLDialogElement.prototype, "open", {
			get: jest.fn(() => false),
			set: jest.fn(),
		});
	});

	const setup = () => render(<Home />);

	beforeEach(() => {
		// Open the dialog before each test
		setup();
		fireEvent.click(screen.getByTestId("widget-manager-dialog-show-button"));
	});

	it("should render dialog content when opened", async () => {
		expect(await screen.getByTestId("widget-manager-dialog")).toBeVisible();
	});

	it("should close dialog when close button is clicked", () => {
		fireEvent.click(screen.getByTestId("widget-manager-dialog-hide-button"));
		expect(screen.getByTestId("widget-manager-dialog")).not.toBeVisible();
	});

	it("should toggle widget visibility when checkbox is clicked", () => {
		setup();
		const programsCheckbox = screen.getByLabelText("Programs");
		expect(programsCheckbox).toBeVisible(); // Ensure dialog is open and checkbox is visible

		fireEvent.click(programsCheckbox);
		expect(programsCheckbox).not.toBeChecked();

		fireEvent.click(programsCheckbox);
		expect(programsCheckbox).toBeChecked();
	});

	it("should reset widgets to default state", () => {
		setup();
		const resetButton = screen.getByText("Reset to Default");

		fireEvent.click(resetButton);

		defaultHomeWidgets.forEach((widget) => {
			expect(screen.getByLabelText(widget)).toBeChecked();
		});
	});
});
