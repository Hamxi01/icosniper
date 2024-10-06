import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { formatDate } from "./utils";

const BlogCard = ({
  blog,
  hideBadge,
  headingClass,
  cardHeaderClass,
  cardContentClass,
  imgClass,
  cardClass,
}) => {
  return (
    <Card className={`${cardClass && cardClass}`}>
      <CardHeader className={`${cardHeaderClass && cardHeaderClass}`}>
        <Link href={`/news/single?id=${blog?.id}`}>
          <img
            src={blog?.thumbnail}
            alt=""
            className={`w-full ${imgClass && imgClass}`}
          />
        </Link>
      </CardHeader>
      <CardContent className={`${cardContentClass && cardContentClass}`}>
        <div className="flex items-center gap-4 justify-between mb-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <CardDescription>{formatDate(blog?.date)}</CardDescription>
            <span className="block w-2 h-2 rounded-xs bg-[#6857f3]"></span>
            <CardDescription>{blog?.timeToRead}</CardDescription>
          </div>
          {hideBadge ? (
            <></>
          ) : (
            <Badge className="rounded bg-[#45464e] text-white">
              {blog?.category}
            </Badge>
          )}
        </div>
        <CardTitle className={`${headingClass && headingClass}`}>
          <Link
            href={`/news/single?id=${blog?.id}`}
            style={{ wordWrap: "break-word" }}
          >
            {blog?.title}
          </Link>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
