import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // Collection for carrying directory
      {
        name: "carrying",
        label: "Carrying",
        path: "content/carrying",
        format: "json",
        ui: {
          router: () => "/carrying",
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "string",
            name: "model",
            label: "Model",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "bannerImage",
            label: "Banner Image",
          },
          {
            type: "image",
            name: "promoImage",
            label: "Promo Image",
          },
          {
            type: "string",
            name: "generalInfo",
            label: "General Info",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "features",
            label: "Features",
            list: true,
          },
          {
            type: "object",
            name: "sidebarFeatures",
            label: "Sidebar Features",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
              {
                type: "string",
                name: "value",
                label: "Value",
              },
            ],
          },
          {
            type: "string",
            name: "whatsappLink",
            label: "WhatsApp Link",
          },
          {
            type: "string",
            name: "testDriveLink",
            label: "Test Drive Link",
          },
          {
            type: "string",
            name: "catalogLink",
            label: "Catalog Link",
          },
          {
            type: "object",
            name: "exteriorImages",
            label: "Exterior Images",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Source",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "interiorImages",
            label: "Interior Images",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Source",
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
        ],
      },
      // Collection for expo directory
      {
        name: "expo",
        label: "Expo",
        path: "content/expo",
        format: "json",
        ui: {
          router: () => "/expo",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "sidebar",
            label: "Sidebar",
            fields: [
              {
                type: "object",
                name: "brands",
                label: "Brands",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                ],
              },
              {
                type: "object",
                name: "vehicleTypes",
                label: "Vehicle Types",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                ],
              },
              {
                type: "object",
                name: "transmissions",
                label: "Transmissions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                ],
              },
              {
                type: "object",
                name: "engines",
                label: "Engines",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                ],
              },
              {
                type: "object",
                name: "passengerCapacities",
                label: "Passenger Capacities",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "id",
                    label: "ID",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "cars",
            label: "Cars",
            list: true,
            fields: [
              {
                type: "image",
                name: "img",
                label: "Image",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                  {
                    type: "string",
                    name: "value",
                    label: "Value",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "booking",
            label: "Booking",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      // Collection for galeria directory
      {
        name: "galeria",
        label: "Galeria",
        path: "content/galeria",
        format: "json",
        ui: {
          router: () => "/galeria",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "filters",
            label: "Filters",
            list: true,
            fields: [
              {
                type: "string",
                name: "filter",
                label: "Filter",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
            ],
          },
          {
            type: "object",
            name: "galleryItems",
            label: "Gallery Items",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Source",
              },
              {
                type: "string",
                name: "category",
                label: "Category",
              },
            ],
          },
        ],
      },
      // Collection for grand-avenue directory
      {
        name: "grand_avenue",
        label: "Grand Avenue",
        path: "content/grand-avenue",
        format: "json",
        ui: {
          router: () => "/grand-avenue",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "generalInfo",
            label: "General Info",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true,
              },
              {
                type: "string",
                name: "catalogLink",
                label: "Catalog Link",
              },
            ],
          },
          {
            type: "object",
            name: "sidebar",
            label: "Sidebar",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "object",
                name: "features",
                label: "Features",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icon",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Label",
                  },
                  {
                    type: "string",
                    name: "value",
                    label: "Value",
                  },
                ],
              },
              {
                type: "string",
                name: "testDriveLink",
                label: "Test Drive Link",
              },
              {
                type: "string",
                name: "whatsappLink",
                label: "WhatsApp Link",
              },
            ],
          },
          {
            type: "object",
            name: "exteriorGallery",
            label: "Exterior Gallery",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "images",
                label: "Images",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "image",
            name: "promoImage",
            label: "Promo Image",
          },
          {
            type: "object",
            name: "interiorGallery",
            label: "Interior Gallery",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "object",
                name: "images",
                label: "Images",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Source",
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Alt Text",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "contactSection",
            label: "Contact Section",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "whatsappLink",
                label: "WhatsApp Link",
              },
            ],
          },
        ],
      },
      // Collection for noticias directory
      {
        name: "noticias",
        label: "Noticias",
        path: "content/noticias",
        format: "json",
        ui: {
          router: () => "/noticias",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "posts",
            label: "Posts",
            list: true,
            fields: [
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                type: "string",
                name: "date",
                label: "Date",
              },
              {
                type: "string",
                name: "author",
                label: "Author",
              },
              {
                type: "string",
                name: "comments",
                label: "Comments",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "link",
                label: "Link",
              },
            ],
          },
          {
            type: "object",
            name: "contactSection",
            label: "Contact Section",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "whatsappLink",
                label: "WhatsApp Link",
              },
            ],
          },
        ],
      },
      // Collection for sobre directory
      {
        name: "sobre",
        label: "Sobre",
        path: "content/sobre",
        format: "json",
        ui: {
          router: () => "/sobre",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Banner",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text1",
                label: "Text 1",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "text2",
                label: "Text 2",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true,
              },
              {
                type: "string",
                name: "text3",
                label: "Text 3",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
            ],
          },
          {
            type: "object",
            name: "contactSection",
            label: "Contact Section",
            fields: [
              {
                type: "image",
                name: "backgroundImage",
                label: "Background Image",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "whatsappLink",
                label: "WhatsApp Link",
              },
            ],
          },
        ],
      },
      // Collection for touring directory
      {
        name: "touring",
        label: "Touring",
        path: "app/touring",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: () => "/touring",
        },
      },
      // Collection for vigus directory
      {
        name: "vigus",
        label: "Vigus",
        path: "app/vigus",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: () => "/vigus",
        },
      },
      // Collection for app/page.js file
      {
        name: "page",
        label: "Page",
        path: "app/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          router: () => "/",
        },
      },
    ],
  },
});
