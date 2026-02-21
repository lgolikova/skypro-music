import { formatTime } from "./formatTime";

describe("formatTime", () => {
    test("форматирует 0 секунд", () => {
        expect(formatTime(0)).toBe("0:00");
    });

    test("форматирует минуты и секунды", () => {
        expect(formatTime(61)).toBe("1:01");
    });

    test("добавляет ведущий ноль к секундам", () => {
        expect(formatTime(5)).toBe("0:05");
    });

    test("округляет минуты вниз (Math.floor)", () => {
        expect(formatTime(125)).toBe("2:05");
    });
});
