"use client";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import "@/css/editPost.css"

export default function CommentForm({ handleAddComment }) {
   
    return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Add Comment</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Add Comment</Dialog.Title>
        <form action={handleAddComment}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="post">
            Add a comment
          </label>
          <textarea className="Input" id="comment" name="comment" type="text" maxLength="100" ></textarea>
          </fieldset>
          <button className="Button green" type="submit ">Save changes</button>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
               {/* button should be here so the dialog closes on submit but had error stating that the form was not connected, would only submit when moved outside of the Dialog.close */}
          </Dialog.Close>
        </div>
        </form>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
 );
}