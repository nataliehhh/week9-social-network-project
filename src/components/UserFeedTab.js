"use client";
import UserCard from "@/components/PostCard";
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import "@/css/postsFeedTab.css";

export default function UserFeedTab({allProfiles}) {

    return (
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Posts Feed">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            All Profiles
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Followed Profiles
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
        <div className="userCard">
            {allProfiles.map((profile) => <UserCard key={profile.id} profile={profile} />
            )}
        </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
        <div className="userCard">
            {allProfiles.map((profile) => <UserCard key={profile.id} profile={profile} />
            )}
        </div>
        </Tabs.Content>
      </Tabs.Root>
    );
}
