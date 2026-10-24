## Notes
Always answer in English.

## UI Development Guidelines
- Prioritize usability, accessibility, and aesthetics in all designs.
- Ensure that the interface is intuitive and easy to navigate.
- Maintain consistency in design elements across the application.
- Use color, typography, and spacing effectively to enhance readability.
- Test designs with real users whenever possible to gather feedback.
- Stay updated with the latest design trends and best practices.
- Avoid changing files under any of the \core folders unless absolutely necessary. Prefer moving that logic to composables.

**Reusability**

- Design components and patterns should be reusable across different parts of the application to maintain consistency and reduce development effort.
- Always prefer creating component for grouped elements and patterns to promote reusability and maintainability. (i.e., if you are creating a <section>, consider making it a reusable component)
- Create a library of reusable components and patterns to streamline the design process and ensure consistency across the application.
- Create a Pinia store for managing reusable state and shared data across components to enhance maintainability and consistency.