import { ReactNode, createContext, useReducer } from "react";
import IProduct from "../interfaces/IProduct";

interface Props {
    children: ReactNode
}
export const ProductContext = createContext({} as {
    products: IProduct[],
    dispathProducts: any
})
const reducerPro = (state: any, action: any) => {
    switch (action.type) {
        case "set_product":
            return action.payload
        case "add_product":
            return [...state, action.payload]
        case "delete_product":
            return state.filter((item: IProduct) => item.id != action.payload)
        case "update_product":
            return state.map((item: IProduct) => {
                if (item.id = action.payload.id)
                    return action.payload
                return item
            })
        default:
            break
    }
}
export const ProductProvider = (props: Props) => {
    const [products, dispathProducts] = useReducer(reducerPro, [] as IProduct[])
    return (
        <ProductContext.Provider value={{ products, dispathProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}