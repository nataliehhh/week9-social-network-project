"use client";
import { useFormStatus } from "react-dom";

export default function SaveButton() {
    const formStatus = useFormStatus();

    return (
        <button type="submit" disabled={formStatus.pending}>
        {formStatus.pending ? "💾..." : "Save"}
        </button>   
    );
}