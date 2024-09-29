"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { handleFileUpload } from "@/lib/firebaseFileManage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddEditBlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("tech");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [status, setStatus] = useState("draft");
  const [newThumbnail, setNewThumbnail] = useState(null);
  const [uploading, setUploading] = useState(false);
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const router = useRouter();
  const quillRef = useRef(null);

  useEffect(() => {
    if (blogId) {
      axios
        .get(`/api/news/single?id=${blogId}`)
        .then((response) => {
          setBlog(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCategory(response.data.categories);
          setTags(response.data.tags);
          setThumbnail(response.data.thumbnail);
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.error("Error fetching blog post:", error);
          alert("Error fetching blog post. Please try again.");
        });
    }
  }, [blogId]);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
      e.preventDefault();
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewThumbnail(file);
  };

  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      const mediaUrl = await handleFileUpload(file, "news/");
      setThumbnail(mediaUrl);
      return mediaUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleThumbnailUpload = async () => {
    setUploading(true);
    try {
      let mediaUrl = thumbnail;
      if (newThumbnail) {
        mediaUrl = await handleImageUpload(newThumbnail);
      }

      const payload = {
        id: blogId,
        title,
        description,
        categories: category,
        tags,
        thumbnail: mediaUrl,
        status,
      };

      if (blogId) {
        await axios.put(`/api/news`, payload);
      } else {
        await axios.post("/api/news", payload);
      }

      router.push("/admin/news");
    } catch (error) {
      console.error("Error uploading thumbnail:", error);
      alert("Error uploading blog. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const toggleStatus = (statusValue) => {
    setStatus(statusValue);
  };

  const handleImageInsert = async () => {
    if (typeof window !== "undefined") {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();

      input.onchange = async () => {
        const file = input.files[0];
        if (file) {
          const imageUrl = await handleImageUpload(file);
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          quill.insertEmbed(range.index, "image", imageUrl);
        }
      };
    }
  };

  return (
    <div className="flex flex-row min-h-screen dark:bg-gray-900 text-white">
      <div className="w-3/4 p-6">
        <h1 className="text-2xl font-bold mb-6">
          {blogId ? "Edit Blog" : "Add New Blog"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleThumbnailUpload();
          }}
        >
          <div className="mb-4">
            <label className="block text-white mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Description</label>
            <ReactQuill
              ref={quillRef}
              value={description}
              onChange={setDescription}
              className="bg-gray-800 text-white rounded-lg shadow-lg"
              style={{ height: "300px", marginBottom: "20px" }}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline", "strike"],
                  ["link", "image", { color: [] }, { background: [] }],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                  ["image"],
                ],
              }}
              formats={[
                "header",
                "bold",
                "italic",
                "underline",
                "strike",
                "link",
                "image",
                "list",
                "bullet",
                "color",
                "background",
              ]}
              placeholder="Write your content here..."
            />
            <style jsx>{`
              .ql-toolbar {
                border: none;
                border-radius: 8px 8px 0 0;
                padding: 10px;
              }
              .ql-container {
                border-radius: 0 0 8px 8px;
                border: 1px solid #374151;
              }
              .ql-editor {
                min-height: 300px;
                padding: 10px;
              }
            `}</style>
          </div>
          <div className="mb-4 mt-14">
            <label className="block text-white mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              required
            >
              <option value="tech">Tech</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Tags</label>
            <div className="flex flex-wrap">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center mr-2 mb-2 bg-blue-600 rounded px-2 py-1 text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-2 text-white hover:text-red-400"
                    onClick={() => handleRemoveTag(index)}
                  >
                    &times;
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="Press Enter to add a tag"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="w-1/4 p-6 bg-gray-800">
        <h2 className="text-xl font-bold mb-4">Options</h2>
        <div className="mb-4">
          <label className="block text-white mb-2">Thumbnail</label>
          {blogId && (
            <img
              src={thumbnail}
              alt="Thumbnail preview"
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          <input
            className="mb-4"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button
          onClick={() => toggleStatus("draft")}
          className={`mb-2 w-full py-2 rounded ${
            status === "draft" ? "bg-blue-600" : "bg-gray-600"
          }`}
        >
          Save as Draft
        </button>
        <button
          onClick={() => toggleStatus("published")}
          className={`mb-2 w-full py-2 rounded ${
            status === "published" ? "bg-blue-600" : "bg-gray-600"
          }`}
        >
          Publish
        </button>
        <button
          onClick={handleThumbnailUpload}
          disabled={uploading}
          className="w-full py-2 bg-green-600 rounded hover:bg-green-700"
        >
          {blogId ? "Update Blog" : "Add Blog"}
        </button>
      </div>
    </div>
  );
};

// Wrap the component in Suspense
const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddEditBlogPage />
    </Suspense>
  );
};

export default SuspenseWrapper;
