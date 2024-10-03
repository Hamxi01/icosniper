"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { message } from "antd";

const MainComponent = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [icoScam, setIcoScam] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    if (id) {
      const fetchSingleIcoScam = async () => {
        const data = await fetch(`/api/ico-scams/single?id=${id}`);
        if (data.ok) {
          const result = await data.json();
          setIcoScam(result);
          setComments(result.IcoScamComment || []);
        }
      };
      fetchSingleIcoScam();
    }
  }, [id]);

  const handleAddComment = async () => {
    if (!newComment) return;

    const user = JSON.parse(localStorage.getItem("tv3623315"));
    const userId = user.id;
    if (!userId) {
      message.error("User ID not found.");
      return;
    }

    console.log({
      IcoScamId: parseInt(id),
      userId: parseInt(userId),
      comment: newComment,
    });

    try {
      const res = await fetch(`/api/ico-scam-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IcoScamId: parseInt(id),
          userId: parseInt(userId),
          comment: newComment,
        }),
      });

      if (res.ok) {
        const addedComment = await res.json();
        setComments((prev) => [...prev, addedComment]);
        setNewComment("");
      } else {
        message.error("Failed to add comment.");
      }
    } catch (error) {
      message.error("Error adding comment.");
    }
  };

  const handleReply = async (commentId) => {
    if (!replyContent) return;

    const user = JSON.parse(localStorage.getItem("tv3623315"));
    const userId = user.id;
    if (!userId) {
      message.error("User ID not found.");
      return;
    }

    try {
      const res = await fetch(`/api/ico-scam-comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          IcoScamId: parseInt(id),
          userId: parseInt(userId),
          comment: replyContent,
          replayId: commentId,
        }),
      });

      if (res.ok) {
        const reply = await res.json();
        setComments((prev) =>
          prev.map((comment) =>
            comment.id === commentId
              ? { ...comment, replies: [...(comment.replies || []), reply] }
              : comment
          )
        );
        setReplyContent("");
        setReplyToCommentId(null);
      } else {
        message.error("Failed to reply.");
      }
    } catch (error) {
      message.error("Error replying.");
    }
  };

  if (!icoScam || !id) return null;

  return (
    <section className="py-10 lg:px-0 px-2">
      <div className="container mx-auto grid xl:grid-cols-3 grid-cols-1 gap-8 w-full max-w-[1366px]">
        <Card>
          <CardHeader></CardHeader>
          <CardContent className="flex items-center gap-3">
            <img
              src={icoScam.logo}
              alt={icoScam.title}
              className="w-full max-w-[130px] rounded"
            />
            <div>
              <h2 className="xl:text-xl text-lg dark:text-white">
                {icoScam.title}
              </h2>
            </div>
          </CardContent>
        </Card>
        <Card className="xl:col-span-2 col-span-1">
          <CardHeader></CardHeader>
          <CardContent>
            <CardTitle className="lg:text-2xl text-xl mb-4">
              {icoScam.title} Description:
            </CardTitle>
            <CardDescription className="text-md">
              {icoScam.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Comments Section */}
      <div className="mt-10 grid xl:grid-cols-2 grid-cols-1 gap-8 container mx-auto max-w-[1366px]">
        {/* Add Comment Section */}
        <div>
          <h3 className="text-lg mb-2 font-bold">Add a Comment</h3>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-24"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            onClick={handleAddComment}
          >
            Submit
          </button>
        </div>

        {/* Comments List Section */}
        <div>
          <h3 className="text-lg mb-2 font-bold">Comments</h3>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments
                .filter((comment) => comment.replayId === null) // Filter to get only main comments
                .map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white border border-gray-300 rounded-lg p-5 shadow-md transition duration-200 hover:shadow-lg mb-4"
                  >
                    <div className="flex items-center mb-2">
                      <div className="flex-shrink-0">
                        {/* Placeholder for user avatar */}
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-700 font-semibold">
                            {comment.user?.name
                              ? comment.user.name.charAt(0)
                              : "U"}
                          </span>
                        </div>
                      </div>
                      <p className="ml-3 font-semibold text-gray-800">
                        {comment.user?.name ? comment.user.name : "User"}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-3">{comment.comment}</p>
                    <button
                      className="text-blue-600 hover:underline focus:outline-none"
                      onClick={() => {
                        setReplyToCommentId(comment.id);
                        setReplyContent(""); // Clear reply content
                      }}
                    >
                      Reply
                    </button>

                    {/* Reply Form */}
                    {replyToCommentId === comment.id && (
                      <div className="mt-4 p-3 bg-gray-100 rounded-md shadow-sm">
                        <textarea
                          className="w-full border border-gray-300 rounded-md p-2 h-24 resize-none"
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder="Write your reply here..."
                        />
                        <button
                          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                          onClick={() => handleReply(comment.id)}
                        >
                          Submit Reply
                        </button>
                      </div>
                    )}

                    {/* Render Replies separately */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 border-l-4 border-blue-500 pl-4">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-2 shadow-sm"
                          >
                            <div className="flex items-center mb-2">
                              <div className="flex-shrink-0">
                                {/* Placeholder for user avatar */}
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                  <span className="text-gray-700 font-semibold">
                                    {reply.user?.name
                                      ? reply.user.name.charAt(0)
                                      : "U"}
                                  </span>
                                </div>
                              </div>
                              <p className="ml-2 font-semibold text-gray-800">
                                {reply.user?.name ? reply.user.name : "User"}
                              </p>
                            </div>
                            <p className="text-gray-600">{reply.comment}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AirdropSinglePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MainComponent />
  </Suspense>
);

export default AirdropSinglePage;

// {comment.user?.name ? comment.user.name : "User"}:
// {reply.user?.name ? reply.user.name : "User"}:
