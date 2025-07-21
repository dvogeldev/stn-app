"use client";

import { use } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_POST } from "@/lib/graphql/queries";
import { getCommentStatusMessage } from "@/lib/comments";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface SinglePostProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  commentStatus: string;
  author: {
    node: {
      name: string;
    };
  };
}

export default function SinglePost({ params }: SinglePostProps) {
  const resolvedParams = use(params);
  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: { id: resolvedParams.slug, idType: "SLUG" },
  });

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg">Loading post...</p>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-red-600">Error loading post: {error.message}</p>
    </div>
  );

  const post: Post = data?.post;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Post not found.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <h1 
            className="text-4xl font-bold mb-4 text-foreground"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author.node.name}</span>
            </div>
          </div>
        </header>

        {/* Post content */}
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-foreground leading-relaxed"
          />
        </article>

        {/* Comments disabled notice */}
        {getCommentStatusMessage(post.commentStatus) && (
          <div className="mt-12 p-4 bg-muted rounded-lg">
            <p className="text-muted-foreground text-sm">
              {getCommentStatusMessage(post.commentStatus)}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}