import { mount } from "@vue/test-utils";
import Uppercase from "~/components/uppercase.vue";
import TodoList from "~/components/todo-list.vue";

describe("To uppercase", () => {
  const wrapper = mount(Uppercase);
  const uppercaseContainer = wrapper.get('[data-test="uppercased-text"]');
  const textArea = wrapper.get("textarea");

  it("Uppercase text container should be empty at the beggining", () => {
    expect(uppercaseContainer.text()).toBe("");
  });

  it("Should convert all text to uppercase", async () => {
    const stringTest =
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    await textArea.setValue(stringTest);

    expect(uppercaseContainer.text()).toBe(stringTest.toUpperCase());
  });
});

describe.only("Todo list", () => {
  const wrapper = mount(TodoList);
  const input = wrapper.get("input");
  const button = wrapper.get("button");
  const todoList = wrapper.get("ul");

  it("Should add todos on click", async () => {
    const todo = "Eat food";

    await input.setValue(todo);
    await button.trigger("click");

    expect(todoList.html()).toContain(todo);
  });

  it("Should clean input after submitting todo", async () => {
    const todo = "Another Todo";

    await input.setValue(todo);
    await button.trigger("click");

    expect(input.text()).toBe("");
  });
});
