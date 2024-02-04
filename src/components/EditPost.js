"use client";
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import "@/css/editPost.css"

export default function EditPost({handleUpdatePost, post}) {
    
    return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit Post</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Edit Post</Dialog.Title>
        <form action={handleUpdatePost}>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="post">
            Edit your post
          </label>
          <textarea className="Input" id="post" name="post" type="text" maxLength="500" defaultValue={post?.post} ></textarea>
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


  
