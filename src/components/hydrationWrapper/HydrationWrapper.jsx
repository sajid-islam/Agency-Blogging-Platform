"use client";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";

const HydrationWrapper = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return <Loading/>;
    return children;
};

export default HydrationWrapper;
