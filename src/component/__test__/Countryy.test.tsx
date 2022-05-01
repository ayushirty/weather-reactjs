import { screen,render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Countryy from "../Countryy";
import Nav from "../Nav";

jest.mock("react-router-dom",()=>{
    return{
        useLocation:()=>{
            return{
                state:'india'
            }
        },
        useNavigate:()=>jest.fn()
    }
})
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(),
   }));

it('app snap countryy',()=>{
    const tree = render(
        <BrowserRouter>
        <Countryy/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})

describe('test for countryy',()=>{
    
jest.setTimeout(10000);
test('app snap countryy button',async()=>{
     render(
        <BrowserRouter>
        <Countryy/>
        </BrowserRouter>
    )
    await new Promise((r) => setTimeout(r, 5000));
    //const back = screen.getByTestId('back');
    //fireEvent.click(back);
    expect(screen.queryByTestId('back')).not.toBeInTheDocument();
    
    // const capital = screen.queryByTestId('capital');
    // fireEvent.click(capital);
    // screen.getAllByRole('button');
})
})