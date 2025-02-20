"use client";

import * as React from "react";
import {
    BookOpen,
    Rss,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Blog",
            url: "/dashboard",
            icon: Rss,
            items: [
                {
                    title: "Create",
                    url: "/dashboard/create-blog",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }) {
    const { user } = useUser();
    const currentUser = {
        name: user?.fullName,
        email: user?.emailAddresses[0].emailAddress,
        avatar:user?.imageUrl
    };
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="/">
                                <div className="aspect-square size-8 p-1 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                  <img src="/icons/logo.png" alt="" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        CreativeInk
                                    </span>
                                    <span className="truncate text-xs">
                                        Agency
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={currentUser} />
            </SidebarFooter>
        </Sidebar>
    );
}
