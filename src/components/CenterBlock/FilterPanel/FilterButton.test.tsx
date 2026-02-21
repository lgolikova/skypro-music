import { render, screen, fireEvent } from "@testing-library/react";
import { FilterButton } from "./FilterButton";

describe("FilterButton", () => {
    const items = ["Artist 1", "Artist 2"];

    const getDefaultProps = (
        override: Partial<Parameters<typeof FilterButton>[0]> = {}
    ) => ({
        filterName: "author" as const,
        label: "исполнителю",
        activeFilter: null,
        setActiveFilter: jest.fn(),
        items,
        onSelect: jest.fn(),
        selectedValue: null,
        ...override,
    });

    test("рендерит кнопку с подписью", () => {
        render(<FilterButton {...getDefaultProps()} />);

        expect(screen.getByText("исполнителю")).toBeInTheDocument();
    });

    test("при клике вызывает setActiveFilter с именем фильтра, если он был неактивен", () => {
        const setActiveFilter = jest.fn();

        render(
            <FilterButton
                {...getDefaultProps({
                    activeFilter: null,
                    setActiveFilter,
                })}
            />
        );

        fireEvent.click(screen.getByText("исполнителю"));

        expect(setActiveFilter).toHaveBeenCalledWith("author");
    });

    test("когда фильтр активен, показывает список и вызывает onSelect при выборе", () => {
        const onSelect = jest.fn();

        render(
            <FilterButton
                {...getDefaultProps({
                    activeFilter: "author",
                    onSelect,
                })}
            />
        );

        const option = screen.getByText("Artist 1");
        fireEvent.click(option);

        expect(onSelect).toHaveBeenCalledWith("author", "Artist 1");
    });
});
