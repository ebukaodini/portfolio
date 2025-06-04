"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Editable, useEditor } from "@wysimark/react";
import { withoutSSR } from "@/utils/no-ssr";

type Props = {
  name?: string;
  markdown: string;
  onChange?: (md: string) => void;
  placeholder?: string;
  readonly?: boolean;
};

const Editor = ({ markdown, onChange, placeholder, readonly }: Props) => {
  const { resolvedTheme } = useTheme();
  const [themeClass, setThemeClass] = useState("light");

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setThemeClass(resolvedTheme === "dark" ? "dark" : "light");
  }, [resolvedTheme]);

  const editor = useEditor({
    minHeight: "200px",
    authToken: process.env.NEXT_PUBLIC_WYSIMARK_AUTH_TOKEN,
  });

  useEffect(() => {
    // set contenteditable to false if readonly is true
    if (readonly) {
      document
        .querySelectorAll(".editor-wrapper > :nth-child(1) > :nth-child(2)")
        .forEach((el) => {
          (el as HTMLElement).contentEditable = "false";
        });
    }
  }, [isMounted, editor]);

  if (!isMounted || !editor) {
    // Show a placeholder or loading state while the editor is initializing
    return <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse" />;
  }

  return (
    <div className={`editor-wrapper w-full prose max-w-none ${themeClass}`}>
      <Editable
        editor={editor}
        value={markdown ?? ""}
        onChange={onChange!}
        placeholder={placeholder}
        style={{ border: "none" }}
        className={`${readonly && "read-only"}`}
      />
      {/* <textarea className="w-full" cols={30} rows={30}>
        {markdown}
      </textarea> */}
    </div>
  );
};

export default withoutSSR(Editor);

// Worthy alternatives
// CKEditor
// React Quill
// React TipTap Editor
// Showdown
