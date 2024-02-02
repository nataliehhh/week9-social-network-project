"use client";
import { useFormStatus } from "react-dom";

export default function FollowButton() {
    const formStatus = useFormStatus();

    return (
        <button type="submit" disabled={formStatus.pending}>
        {formStatus.pending ? "💾..." : "Follow"}
        </button>   
    );
}