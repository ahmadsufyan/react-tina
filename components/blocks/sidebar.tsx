import React from "react";
import type { TinaTemplate } from "tinacms";
import { Accordion, AccordionItemProps, AccordionProps } from '@ahmadsufyan/component-library';

export const Sidebar = ({ data, parentField }) => {

  function generateItem(data:any[]){
    const views:any[] = []
    data.forEach((d, i) => {
      views.push(
        <Accordion.Item
          key={i}
          id={d.link}
          title={d.label}
        >
          {d.submenu ? generateItem(d.submenu) : null}
        </Accordion.Item>
      )
    })
    return views
  }

  console.log(data)
  return (
    <div className="grid grid-cols-12">
      {/* <Accordion
        className="col-span-4"
        traceTree={data.traceTree}
      >
        {generateItem(data.menu)}
      </Accordion> */}
    </div>
  );
};

const subMenu = {
  label: "Sub Menu",
  name: "submenu",
  type: "object",
  list: true,
  ui: {
    defaultItem: {
      label: "Sub Menu Title",
      icon: true,
    },
    itemProps: (item) => ({ label: item.label }),
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Icon",
      name: "icon",
      type: "boolean",
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
  ],
}

export const sidebarBlockSchema: TinaTemplate = {
  name: "sidebar",
  label: "Sidebar",
  ui: {
    defaultItem: {
      traceTree: true
    } as AccordionProps,
  },
  fields: [
    {
      type: "boolean",
      label: "Trace Tree",
      name: "traceTree",
    },
    {
      label: "Menu",
      name: "menu",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Menu Title",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
        {
          ...subMenu,
          fields: [
            ...subMenu.fields,
            {
              ...subMenu
            } as any
          ]
        } as any
      ],
    },
  ],
};
