import React, { useState, useEffect, useRef, use } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  const [image, setImage] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("Startup");
  const [isPublished, setIsPublished] = useState<boolean>(false);

  const generateContent = () => {};

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return <div>AddBlog</div>;
};

export default AddBlog;
