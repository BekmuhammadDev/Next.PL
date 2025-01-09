'use client'
import React, { useState, useContext } from "react";
import { ProductContext } from "@/context/context";
import { FiTrash } from "react-icons/fi";
import { LuPencilLine, LuTrash } from "react-icons/lu";


const ProductPage: React.FC = () => {
  const { products, addProduct, deleteProduct } = useContext(ProductContext)!;
  const [showModal, setShowModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newProductName, setNewProductName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState<string>("");

  const handleSave = () => {
    if (newCategoryName && newProductName && newDescription && newImage) {
      const newProduct = {
        id: products.length + 1,
        categoryName: newCategoryName,
        productName: newProductName,
        description: newDescription,
        image: newImage,
      };
      addProduct(newProduct);
      setNewCategoryName("");
      setNewProductName("");
      setNewDescription("");
      setNewImage("");
      setShowModal(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Созданные товары</h1>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-2 bg-[#6BE1FF] text-black "
        >
          Создать товар +
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead className="border">
          <tr className="flex">
            <th className="px-10 py-2 ">№</th>
            <th className="px-10 py-2 ">Наименование</th>
            <th className="px-12 py-2 ">Категория</th>
            <th className="px-10 py-2 "></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="flex border justify-between pr-5 ">
              <div>
              <td className="px-10 py-2 ">{product.id}</td>
              <td className="px-16 py-2 ">{product.productName}</td>
              <td className="px-20 py-2 ">{product.categoryName}</td>
              </div>
              <td className="flex gap-x-5">
              <button
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <LuPencilLine />
                  </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="text-red-500 hover:text-red-700 "
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-end">
          <div className="bg-white p-10 rounded shadow-lg w-[427px] h-[100vh]">

            <p>*Категория</p>
            <input
              type="text"
              placeholder="Выбирите"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>*Наименование  товара </p>
            <input
              type="text"
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p>*Описание</p>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="file"
              onChange={(e) => setNewImage(URL.createObjectURL(e.target.files![0]))}
              className=" mb-3 border "
            />
            <div className="flex justify-center gap-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white hover:bg-green-400"
              >
                Сохранить
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 hover:bg-red-400"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
