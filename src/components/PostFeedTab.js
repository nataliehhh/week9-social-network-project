"use client";
import PostCard from "@/components/PostCard";
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import "@/css/postsFeedTab.css";
// import Link from "next/link";

export default function PostFeedTab({allPosts}) {

    return (
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Posts Feed">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            All Posts
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Followed Posts
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
        <div className="postCard">
            {allPosts.map((post) => <PostCard key={post.id} post={post} />
            )}
        </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
        {/* <div className="postCard">
            {allPosts.map((post) => <PostCard key={post.id} post={post} />
            )}
        </div> */}
        </Tabs.Content>
      </Tabs.Root>
    );
}



