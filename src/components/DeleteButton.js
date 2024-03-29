"use client";
import { useFormStatus } from "react-dom";

export default function DeleteButton({ handleDeletePost }) {
    const formStatus = useFormStatus();

    return (
        <form action={handleDeletePost} >
            <button type="submit" disabled={formStatus.pending}>    ✖️</button>        
        </form>
    )
}
