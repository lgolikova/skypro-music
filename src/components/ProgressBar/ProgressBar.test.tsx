import { render, screen, fireEvent } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
    const baseProps = {
        max: 100,
        value: 30,
        step: 1,
        readOnly: false,
        onChange: jest.fn(),
    };

    test("рендерит слайдер с правильными значениями", () => {
        render(<ProgressBar {...baseProps} />);

        const slider = screen.getByRole("slider") as HTMLInputElement;

        expect(slider).toBeInTheDocument();
        expect(slider).toHaveAttribute("max", "100");
        expect(slider).toHaveAttribute("value", "30");
    });

    test("вызывает onChange при смене значения", () => {
        const handleChange = jest.fn();
        render(<ProgressBar {...baseProps} onChange={handleChange} />);

        const slider = screen.getByRole("slider");

        fireEvent.change(slider, { target: { value: "50" } });

        expect(handleChange).toHaveBeenCalled();
    });
});
