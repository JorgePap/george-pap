import { FC } from "react";
import emailjs from "@emailjs/browser";
import FormItem from "./FormItem";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export const FormSection: FC = () => {
  // Initialize formik with initial values, validation schema and submit handler
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema, // Apply yup validation schema
    onSubmit: (values, { resetForm }) => {
      const serviceId = import.meta.env.VITE_SERVICE_ID;
      const templateId = import.meta.env.VITE_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_KEY;

      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: "My Name",
        subject: values.subject,
        message: values.message,
      };

      //Send the email using EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          resetForm(); // Reset form after successful submission
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-lg w-full max-w-[500px] md:max-w-[650px] lg:max-w-[750px]"
    >
      <FormItem
        type="text"
        placeholder="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} // To show validation on blur
        error={formik.touched.name && formik.errors.name} // Show error if field is touched and has an error
      />
      <FormItem
        type="email"
        placeholder="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
      />
      <FormItem
        type="text"
        placeholder="Subject"
        name="subject"
        value={formik.values.subject}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.subject && formik.errors.subject}
      />
      <FormItem
        isTextArea={true}
        value={formik.values.message}
        placeholder="Message"
        name="message"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && formik.errors.message}
      />
      <button
        type="submit"
        className="w-full max-w-[250px] py-md self-center bg-[#6272A4] rounded-lg text-neutral-1"
      >
        Submit
      </button>
    </form>
  );
};

export default FormSection;
