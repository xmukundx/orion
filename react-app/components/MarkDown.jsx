import { useContext, useEffect, useState } from "react";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import Context from "../src/context/Context";

//this component is being used by result.jsx
const MarkdownProcessor = () => {
  const { resultData } = useContext(Context);
  const [htmlContent, setHtmlContent] = useState("");
  useEffect(() => {
    const processStream = async () => {
      if (!resultData || resultData.length === 0) return;
      console.log(typeof resultData);

      try {
        const processor = unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeDocument, { title: "Streamed Content" })
          .use(rehypeFormat)
          .use(rehypeStringify)
          .use(rehypePrettyCode, {
            transformers: [
              transformerCopyButton({
                visibility: "always",
                feedbackDuration: 3_000,
              }),
            ],
          });

        // const markdown = resultData.join("");
        const file = await processor.process(resultData);
        setHtmlContent(file.toString());
      } catch (error) {
        console.error("Error processing markdown:", error);
      }
    };

    processStream();
  }, [resultData]);

  return (
    <div
    id="result-container"
      className="prose mx-auto h-full max-w-none rounded-lg flex-1 overflow-y-auto bg-zinc-700 p-5 dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownProcessor;
