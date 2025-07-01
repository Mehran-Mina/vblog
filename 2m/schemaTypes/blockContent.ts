import { defineArrayMember, defineType } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Post Body",
  type: "array",
  description: "Write your post content here",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip", "blurhash", "palette"],
      },
      fields: [
        {
          name: "caption",
          title: "Image caption",
          type: "string",
          description: "Text displayed below the image.",
        },
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Important for SEO and accessiblity.",
        },
      ],
    }),
   
    defineArrayMember({
      type: "quiz",
    }),
  ],
});
