import { defineField } from "sanity";

import { DurationInput } from "./DurationInput";

export default defineField({
  type: "object",
  name: "durationEducation",
  title: "Duration",
  components: {
    input: DurationInput,
  },
  fields: [
    defineField({
      type: "date",
      name: "start",
      title: "Start",
      options: {
        dateFormat: "YYYY",
      },
    }),
    defineField({
      type: "date",
      name: "end",
      title: "End",
      options: {
        dateFormat: "YYYY",
      },
    }),
  ],
});
