import { Link } from "react-router-dom";
import IProductForm from "../../../interfaces/IProduct";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";

const ListProduct = () => {

  const { products, dispathProducts } = useContext(ProductContext);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        dispathProducts({
          type: "set_product",
          payload: data
        })

      })
      .catch(error => {
        console.log(error);
      })
  }, [])
  function deletePro(id: string) {
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      dispathProducts({
        type: "delete_product",
        payload: id
      })
    })
  }
  return (
    <div className="relative bg-white overflow-x-auto shadow-md sm:rounded-lg  p-4">
      <div className="pb-4 ">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className=" flex justify-between items-center">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input

              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for items"
            />
          </div>
          <div>
            <Link to={"/admin/product/add"}>
              <button className="bg-blue-600 rounded-full px-2.5 py-1.5 text-white">
                <i className="fa-solid fa-plus me-2 font-medium"></i>
                Thêm mới
              </button>
            </Link>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Ảnh</th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product: IProductForm, index: number) => (
              <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label htmlFor="checkbox-table-search-1" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4 "><img src={product.thumbnail} className="rounded-full" width={50} alt="" /></td>

                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.brand}</td>

                <td className="px-6 py-4">{product.size}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4 text-center">
                  <Link to={`/admin/product/edit/${product.id}`} className="font-medium text-blue-600 hover:underline ">
                    <i className="fa-solid fa-pencil text-xl"></i>
                  </Link>
                  <span className="mx-3 text-black font-medium text-xl">||</span>
                  <button onClick={() => {
                    if (confirm("Are you sure you want to")) {
                      deletePro(product.id! as string);
                    }
                  }} className="font-medium text-blue-600 hover:underline">
                    <i className="fa-solid fa-trash text-xl"></i>
                  </button>
                </td>
              </tr>
            ))
          }



        </tbody>
      </table>
    </div>
  );
};
export default ListProduct;