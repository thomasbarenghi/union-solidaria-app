"use client";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  documentRoute: string;
};

export default function MarkdownRenderer({ documentRoute }: Props) {
  const [markdown, setMarkdownContent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(documentRoute);
      setMarkdownContent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-2xl font-bold" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="titulo-3 py-4" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="bodyText font-light" {...props} />
          ),
          br: ({ node, ...props }) => (
            <>
              <br className="bodyText font-light" {...props} />
              <br className="bodyText font-light" {...props} />
            </>
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold" {...props} />
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
