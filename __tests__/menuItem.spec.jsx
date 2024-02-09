import { menuItems } from "../app/_utils/navItems";
import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";

test("menuItems has correct length and properties", () => {
  const expectedProperties = [
    { id: 1, name: "All Courses", icon: BookOpen },
    { id: 2, name: "Membership", icon: BadgeIcon },
    { id: 3, name: "Be Instructor", icon: GraduationCap },
  ];

  expect(menuItems).toHaveLength(3);

  menuItems.forEach((item, index) => {
    expect(item).toHaveProperty("id", expectedProperties[index].id);
    expect(item).toHaveProperty("name", expectedProperties[index].name);
    expect(item).toHaveProperty("icon", expectedProperties[index].icon);
    expect(item).toHaveProperty("link");
  });
});
