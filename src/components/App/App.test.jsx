import { describe,expect,it} from "vitest";
import routes from "../../routes";
import { render,screen} from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";    
describe("App Component",()=>{
    it("renders default path ",()=>{
        const router = createMemoryRouter(routes);
        render(
            <RouterProvider router={router}/>
        )
        expect(screen.getByTestId("app-header")).toBeInTheDocument()
        expect(screen.getByTestId("home-title")).toBeInTheDocument()
    })
    it("renders store path",async ()=>{
        const router = createMemoryRouter(routes, {
        initialEntries: ["/store"],
        });
        render(
            <RouterProvider router={router}/>
        )
        router.navigate("/store")
        const items = await screen.findAllByTestId("store-item")
        expect(items).toHaveLength(7)
    })
    it("shop now renders store path",async()=>{
        const router = createMemoryRouter(routes);
        render(
            <RouterProvider router={router}/>
        )
        const user = userEvent.setup()
        const shopBtn = screen.getByText("Shop Now")
        await user.click(shopBtn)
        const items = await screen.findAllByTestId("store-item")
        expect(items).toHaveLength(7)
    })
    it("color filter",async()=>{
        const router = createMemoryRouter(routes,{
            initialEntries:["/store"],
        })
        const user = userEvent.setup()
        render(
            <RouterProvider router={router}/>
        )
        const redBtn = screen.getByText("Red")

        await user.click(redBtn)

        const items = await screen.findAllByTestId("store-item")

        expect(items).toHaveLength(4)

    })
    it("search filter",async()=>{
        const router = createMemoryRouter(routes,{initialEntries:["/store"]})
        const user = userEvent.setup();
        render(
            <RouterProvider router={router}/>
        )

        const search = screen.getByTestId("header-search")

        await user.type(search,"apple")

        const items = await screen.findAllByTestId("store-item")

        expect(items).toHaveLength(2)
    })
})