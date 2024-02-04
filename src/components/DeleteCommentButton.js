"use client";
import { useFormStatus } from "react-dom";

export default function DeleteCommentButton({ handleDeleteComment }) {
    const formStatus = useFormStatus();

    return (
        <form action={handleDeleteComment} >
            <button type="submit" disabled={formStatus.pending}>    ✖️</button>        
        </form>
    )
}