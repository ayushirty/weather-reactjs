import { screen,render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Weather from "../Weather";

it('app snap Weather',()=>{
    const tree = render(
        <BrowserRouter>
        <Weather/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})



describe('weather fund', ()=>{
    jest.setTimeout(10000);

    it('function', async()=>{
        render(
            <BrowserRouter>
            <Weather/>
            </BrowserRouter>
        )
        await new Promise((r) => setTimeout(r, 5000));
    })
})