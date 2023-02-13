import React from "react";
import type { TinaTemplate } from "tinacms";
import {
  Table as TableComponent,
  TableProps as TableComponentProps
} from '@ahmadsufyan/component-library';

interface TableProps {
  data?: TableComponentProps,
  parentField?: any
}

export const Table = ({ data, parentField }: TableProps) => {
  return (
    <TableComponent
      bordered={data.bordered}
      size={data.size}
      data={
        [
          { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
          { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
          { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
          { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
          { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
          { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" },
        ]
      }
      column={
        [
          { title: "Company", keyIndex: "company" },
          { title: "Contanct", keyIndex: "contact" },
          { title: "Country", keyIndex: "country" },
        ]
      }
    />
  );
};

export const tableBlockSchema: TinaTemplate = {
  name: "table",
  label: "Table",
  ui: {
    defaultItem: {
      bordered: true,
      size: 'middle'
    } as TableComponentProps,
  },
  fields: [
    {
      type: "boolean",
      label: "Border",
      name: "bordered",
    },
    {
      type: "string",
      label: "Size",
      name: "size",
      options: [
        { value: 'small', label: 'Small' },
        { value: 'middle', label: 'Medium' },
        { value: 'large', label: 'Large' },
      ],
    },
  ],
};
