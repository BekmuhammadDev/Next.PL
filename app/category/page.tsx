'use client'
import { useState } from "react";
import { LuPencilLine, LuTrash } from "react-icons/lu";

interface Category {
  id: number;
  name: string;
}

const CategoryTable: React.FC = () => {

  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [newName, setNewName] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(false);

  const openEditModal = (category: Category) => {
    setSelectedCategory(category);
    setNewName(category.name);
    setIsCreateMode(false);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setSelectedCategory(null);
    setNewName("");
    setIsCreateMode(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
    setNewName("");
  };

  const handleSave = () => {
    if (isCreateMode) {
    
      const newCategory: Category = {
        id: categories.length + 1,
        name: newName,
      };
      setCategories((prev) => [...prev, newCategory]);
    } else if (selectedCategory) {
    
      setCategories((prev) =>
        prev.map((cat) =>
          cat.id === selectedCategory.id ? { ...cat, name: newName } : cat
        )
      );
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    setCategories((prev) => prev.filter((cat) => cat.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Категории</h1>
        <button
          onClick={openCreateModal}
          className="px-16 py-2 bg-[#6BE1FF] text-black"
        >
          Создать категорию + 
        </button>
      </div>

      <table className="table-auto w-full border border-gray-300 mt-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">No</th>
            <th className="border px-4 py-2 text-left">Наименование</th>
            <th className="border px-4 py-2 text-left">Действия</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{category.name}</td>
              <td className="border px-4 py-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => openEditModal(category)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <LuPencilLine />
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <LuTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-55 flex justify-end">
          <div className="bg-white p-6 shadow-md w-[427px] relative">
            <h2 className="text-lg mt-40">
              {isCreateMode ? "Создать категорию" : "Изменить категорию"}
            </h2>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full border border-black px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-40 flex justify-center gap-3">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-500 text-white hover:bg-green-400 "
              >
                Сохранить
              </button>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-red-500 hover:bg-red-400 "
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

export default CategoryTable;
