/*
 * @Description: demo jest
 * @Author: Gleason
 * @Date: 2022-02-15 23:19:35
 * @LastEditors: Gleason
 * @LastEditTime: 2022-02-15 23:30:19
 */
test("通用", () => {
	expect(2 + 2).toBe(4);
	expect(2 + 2).not.toBe(3);
});
test("布尔类型", () => {
	expect(1).toBeTruthy(); // 测试为 true
	expect(0).toBeFalsy(); // 测试 为 false
});
test("数字类型", () => {
	expect(4).toBeGreaterThan(3); // 测试 比 4 大
	expect(2).toBeLessThan(3); // 测试 比 3小
});
test("对象", () => {
	expect({ name: "gleason" }).toEqual({ name: "gleason" }); // 测试值是否相同
});
