"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Blockquote from "@tiptap/extension-blockquote";
import Text from "@tiptap/extension-text";
import Typography from "@tiptap/extension-typography";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import NextImage from "next/image";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
        heading: {
          levels: [1, 2],
        },
      }),
      Text,
      Typography,
      Bold,
      Italic,
      Underline,
      TaskList,
      Blockquote,
      TaskItem.configure({
        nested: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>Input text here</p>",
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = prompt("Enter image URL");
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    try {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const copyToClipboard = () => {
    if (!editor) return;

    const content = editor.getText();
    navigator.clipboard
      .writeText(content)
      .then(() => alert("Content copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text:", err));
  };

  return (
    <div
      id="step-2"
      className="relative w-full h-[168px] border border-primary rounded-lg bg-white"
    >
      <div className="flex items-center mb-2 border-b border-primary rounded-md">
        <div className="w-3/12 flex items-center justify-center gap-6 py-2 border-b border-r border-primary rounded-md">
          <NextImage
            src="/icons/document.svg"
            width={24}
            height={24}
            alt="document"
            onClick={copyToClipboard}
            className="cursor-pointer"
          />

          <NextImage
            src="/icons/arrow-down-3.svg"
            width={11}
            height={5}
            alt="document"
          />
        </div>
        <div className="w-full flex items-center justify-between px-4">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/text.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="t icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/text-bold.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text italic icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/text-italic.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text italic icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={
              editor.isActive("underline") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/text-underline.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text underline icon"
            />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/small-caps.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="small-caps icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/text-align-left.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text align left icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/text-align-right.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text align right icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/text-align-center.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text align center icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={
              editor.isActive({ textAlign: "justify" })
                ? "bg-gray-100 p-1 rounded-md"
                : ""
            }
          >
            <NextImage
              src="/icons/text-align-justify.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="text align justify icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleTaskList().run()}
            className={
              editor.isActive("taskList") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/task.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="task icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/quote-up.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="quote up icon"
            />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/quote-down.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="quote down icon"
            />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().insertContent("$E=mc^2$").run()
            }
            className={
              editor.isActive("math") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/math.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="math icon"
            />
          </button>
          <button
            onClick={addImage}
            className={
              editor.isActive("image") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/gallery.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="image icon"
            />
          </button>
          <button
            onClick={setLink}
            className={
              editor.isActive("link") ? "bg-gray-100 p-1 rounded-md" : ""
            }
          >
            <NextImage
              src="/icons/link-2.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="link icon"
            />
          </button>
        </div>
      </div>
      <EditorContent
        editor={editor}
        className="h-max border-none focus:border-none"
      />
      <div className="absolute left-2 bottom-2 bg-info-2 flex items-center py-2 px-3 gap-1 rounded-lg">
        <NextImage
          src="/icons/quill-pen.svg"
          width={12}
          height={12}
          alt="quill pen"
        />
        <p className="text-info-3 font-chivo font-medium text-[10px]">
          Write with May
        </p>
      </div>
    </div>
  );
};

export default TextEditor;
