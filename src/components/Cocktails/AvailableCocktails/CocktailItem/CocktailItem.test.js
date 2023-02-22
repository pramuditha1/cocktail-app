import {render, screen } from '@testing-library/react'
import CocktailItem from "./CocktailItem";
import { shallow } from "enzyme";

const cocktail = {
  id: 1,
  name: "Margarita",
  category: "Cocktail",
  image: "https://example.com/margarita.jpg",
  instructions: "Mix all ingredients and serve over ice.",
};

render(<CocktailItem cocktail={cocktail} />);

describe("CocktailItem", () => {
  test("renders cocktail name and category", () => {
    const name = screen.getByText(cocktail.name);
    const category = screen.getByText(cocktail.category);
    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  test("renders cocktail image", () => {
    const image = screen.getByAltText(cocktail.name);
    expect(image).toHaveAttribute("src", cocktail.image);
  });

  test("renders cocktail instructions", () => {
    const instructions = screen.getByText(cocktail.instructions);
    expect(instructions).toBeInTheDocument();
  });

  it("renders cocktail name and category in CardHeader", () => {
    const wrapper = shallow(<CocktailItem cocktail={cocktail} />);
    expect(wrapper.find("CardHeader").props().title).toEqual("Margarita");
    expect(wrapper.find("CardHeader").props().subheader).toEqual("Cocktail");
  });

  it("renders cocktail image in CardMedia", () => {
    const wrapper = shallow(<CocktailItem cocktail={cocktail} />);
    expect(wrapper.find("CardMedia").props().image).toEqual("https://example.com/margarita.jpg");
  });

  it("renders cocktail instructions in CardContent", () => {
    const wrapper = shallow(<CocktailItem cocktail={cocktail} />);
    expect(wrapper.find("CardContent").find("Typography").text()).toEqual("Mix all ingredients and serve over ice.");
  });

  it("renders CocktailItemInputForm in CardActions", () => {
    const wrapper = shallow(<CocktailItem cocktail={cocktail} />);
    expect(wrapper.find("CardActions").find("CocktailItemInputForm").props().id).toEqual(1);
    expect(wrapper.find("CardActions").find("CocktailItemInputForm").props().cocktail).toEqual(cocktail);
  });

});

