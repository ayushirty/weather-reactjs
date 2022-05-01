import { screen,render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Nav";



it('app snap nav',()=>{
    const tree = render(
        //<BrowserRouter>
        <Nav navigate={()=>{}}/>
        //</BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    const input = screen.getByRole("textbox");
	fireEvent.change(input, { target: { value: "test" } });
	const submitButton = screen.getByRole("button");
		fireEvent.click(submitButton);
})

it('app snap nav func',()=>{
    const mock = jest.fn()
    render(
        //<BrowserRouter>
        <Nav navigate={mock}/>
        //</BrowserRouter>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(mock).toMatchSnapshot()
    expect(screen.getByRole('button')).toBeInTheDocument()
    screen.debug()
    expect(screen.getByRole('button')).toBeDisabled()
    
})