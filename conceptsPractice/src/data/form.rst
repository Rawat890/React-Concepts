Feature / Aspect	
                                          React Hook Form	                                       Formik
API Style	                           Hook-based (useForm, Controller, etc.)	       Component-based (<Formik>, <Field>)
Performance	                         ✅ High (minimizes re-renders)	              ❌ Slower with larger forms
Code Boilerplate	                   ✅ Minimal	                                  ❌ More verbose
Validation Integration.              ✅ Built-in + easy integration with yup	      ✅ Built-in + works well with yup
Form State Management	               ✅ Uses uncontrolled inputs internally	      ❌ Controlled components (heavier re-renders)

Pro Tip

Formik uses controlled components, meaning input values are stored in state and updated on every change → more re-renders.

React Hook Form uses uncontrolled components with refs → better performance, especially on mobile where re-renders can be expensive.

How React Hook Form Minimizes Re-Renders
1. Uncontrolled components via refs

RHF uses the DOM (or native input refs) to read and write values.

This bypasses the React state cycle.

2. Selective subscriptions

Each field only subscribes to its own updates.

If one field changes, only that field is updated — not the whole form.
watch('email') // only re-renders when 'email' changes
