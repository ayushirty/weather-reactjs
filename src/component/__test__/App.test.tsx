import { render, Screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
test('test for app', () => {
    const somename = render(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
    expect(somename).toMatchSnapshot() 
}) 