"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter

const NewsPage = () => {
  const router = useRouter(); // Initialize router
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get("/api/news", {
        params: {
          search,
          category,
          page,
          limit,
        },
      });
      setNews(response.data.news);
      setTotalPages(response.data.totalPages);
    };

    fetchNews();
  }, [search, category, page, limit]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this news?")) {
      await axios.delete(`/api/news`, {
        data: { id }, // Send the ID in the body
      });
      setNews(news.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    // Redirect to edit page
    router.push(`/admin/news/single?id=${id}`);
  };

  return (
    <div className="p-6 dark:bg-gray-900 text-white min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage News</h1>
        <Link href="/admin/news/single">
          <Button className="bg-blue-600 hover:bg-blue-500">
            Add New Blog
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="dark:bg-gray-700 dark:border-gray-600"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="dark:bg-gray-700 dark:border-gray-600 text-white rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="tech">Tech</option>
          <option value="health">Health</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* News Table */}
      <table className="w-full text-left mb-6 border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="py-3 px-4 border-b">Title</th>
            <th className="py-3 px-4 border-b">Thumbnail</th>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Category</th>
            <th className="py-3 px-4 border-b">Status</th>
            <th className="py-3 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 ? (
            news.map((item) => (
              <tr key={item.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">
                  <img src={item.thumbnail} alt="" className="w-14" />
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {Array.isArray(item.categories)
                    ? item.categories.join(", ")
                    : item.categories || "N/A"}
                </td>
                <td className="py-2 px-4 border-b">
                  {item.status === "published" ? ( // Correct status check
                    <span className="text-green-500">Published</span>
                  ) : (
                    <span className="text-red-500">Draft</span>
                  )}
                </td>
                <td className="py-2 px-4 border-b flex gap-2">
                  <Button
                    className="bg-blue-600 hover:bg-blue-500"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="bg-red-500 hover:bg-red-600"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-center text-gray-400">
                No news found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <span>
          Showing page {page} of {totalPages}
        </span>
        <Pagination
          current={page}
          total={totalPages * limit}
          pageSize={limit}
          showSizeChanger
          onChange={(page, pageSize) => {
            setPage(page);
            setLimit(pageSize);
          }}
        />
      </div>
    </div>
  );
};

export default NewsPage;
