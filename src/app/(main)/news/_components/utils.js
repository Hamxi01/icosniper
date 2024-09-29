// Utility function to strip HTML tags and return plain text
const stripHtmlTags = (text) => {
  if (!text) return ""; // Handle null or undefined input
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.body.textContent || "";
};

// Utility function to truncate text to a specified number of words
export const truncateText = (text, maxWords) => {
  const plainText = stripHtmlTags(text);
  const words = plainText.trim().split(/\s+/); // Trim whitespace and split into words
  if (words.length <= maxWords) return plainText; // Return full text if under max limit
  return words.slice(0, maxWords).join(" ") + "..."; // Truncate and add ellipsis
};

// Utility function to format the date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.split(/\s+/).length; // Count words in text
  const minutes = Math.ceil(words / wordsPerMinute); // Calculate minutes
  return `${minutes} min read`; // Return reading time
};

export const fetchBlogs = async (category) => {
  const url = category ? `/api/news?category=${category}` : `/api/news`;

  const data = await fetch(url);
  if (data.ok) {
    const { news } = await data.json();

    // Calculate the reading time for each blog
    const blogsWithReadingTime = news.map((blog) => ({
      ...blog,
      timeToRead: calculateReadingTime(blog.description), // Assuming blog.content has the blog text
    }));

    console.log(blogsWithReadingTime);

    return blogsWithReadingTime;
  }
};
