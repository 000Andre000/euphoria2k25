// registrationForms.js

export const REGISTRATION_FORMS = {
  solo_regional: {
    title: "Solo Singing (Regional)",
    description: "Register for regional solo singing",
    scriptUrl: "YOUR_SCRIPT_URL_1",
    formId: "solo_regional",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "contact", label: "Phone Number", type: "tel", required: true },
      {
        id: "collegeName",
        label: "College Name",
        type: "text",
        required: true,
      },
      { id: "year", label: "Year", type: "text", required: true },
      { id: "course", label: "Course", type: "text", required: true },
      { id: "photo", label: "Photo of ID", type: "file", required: true },
    ],
  },

  solo_western: {
    title: "Solo Singing (Western)",
    description: "Register for western solo singing",
    scriptUrl: "YOUR_SCRIPT_URL_2",
    formId: "solo_western",
    fields: [
      { id: "name", label: "Name", type: "text", required: true },
      { id: "email", label: "Email", type: "email", required: true },
      { id: "contact", label: "Phone Number", type: "tel", required: true },
      {
        id: "collegeName",
        label: "College Name",
        type: "text",
        required: true,
      },
      { id: "year", label: "Year", type: "text", required: true },
      { id: "course", label: "Course", type: "text", required: true },
      { id: "photo", label: "Photo of ID", type: "file", required: true },
    ],
  },

  group_dance: {
    title: "Group Dance",
    description: "Register your dance group",
    scriptUrl: "YOUR_SCRIPT_URL_3",
    formId: "group_dance",
    fields: [
      { id: "group_name", label: "Group Name", type: "text", required: true },
    ],
  },

  sports: {
    title: "Sports Registration",
    description: "Register for sports events",
    scriptUrl: "YOUR_SCRIPT_URL_4",
    formId: "sports",
    fields: [
      { id: "player_name", label: "Player Name", type: "text", required: true },
    ],
  },
};
