import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import React from "react";

describe("SearchBar", () => {
    test("показывает текущее значение поиска", () => {
        const handleChange = jest.fn();
        render(<SearchBar search="rock" setSearch={handleChange} />);

        const input = screen.getByPlaceholderText("Поиск") as HTMLInputElement;

        expect(input).toBeInTheDocument();
        expect(input.value).toBe("rock");
    });

    test("вызывает setSearch при вводе текста", () => {
        const handleChange = jest.fn();
        render(<SearchBar search="" setSearch={handleChange} />);

        const input = screen.getByPlaceholderText("Поиск");

        fireEvent.change(input, { target: { value: "metal" } });

        expect(handleChange).toHaveBeenCalledWith("metal");
    });
});
