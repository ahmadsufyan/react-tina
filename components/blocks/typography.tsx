import React from "react";
import type { TinaTemplate } from "tinacms";
import {
  Typography as TypographyComponent,
  TypographyProps as TypographyComponentProps
} from '@ahmadsufyan/component-library';

export const Typography = ({ data, parentField }) => {
  return (
    <TypographyComponent {...data}/>
  );
};

export const typographyBlockSchema: TinaTemplate = {
  name: "typography",
  label: "Typography",
  ui: {
    defaultItem: {
      strong: false,
      italic: false,
      underline: false,
      variant: "h4",
      children: "New text here"
    } as TypographyComponentProps,
  },
  fields: [
    {
      type: "boolean",
      label: "Strong",
      name: "strong",
    },
    {
      type: "boolean",
      label: "Italic",
      name: "italic",
    },
    {
      type: "boolean",
      label: "Underline",
      name: "underline",
    },
    {
      type: "string",
      label: "Variant",
      name: "variant",
      options: [
        { value: 'h1', label: 'Heading 1' },
        { value: 'h2', label: 'Heading 2' },
        { value: 'h3', label: 'Heading 3' },
        { value: 'h4', label: 'Heading 4' },
        { value: 'h5', label: 'Heading 5' },
        { value: 'h6', label: 'Heading 6' },
        { value: 'p', label: 'Paragraph' },
      ],
    },
    {
      type: "string",
      label: "Text",
      name: "children",
    },
  ],
};
