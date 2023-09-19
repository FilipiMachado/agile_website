const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      calidation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      ttle: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initualValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
