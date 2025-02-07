import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Message from ${form.name}`;
    const body = `From: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

    // Create a mailto link
    const mailtoLink = `mailto:zahrayasin2209@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;

    setLoading(false);
    setResponse(
      "Your message is ready to send. Please check your email client."
    );

    // Optionally, reset the form after submitting
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionMainText}>GET IN TOUCH</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white text-[17px] font-medium mb-1">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[17px] font-medium mb-1">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white text-[17px] font-medium mb-1">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 text-[20px] px-12 font-semibold rounded-xl outline-none w-fit text-white shadow-md shadow-primary
            hover:bg-purple-500 hover:text-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {response && (
          <div className="mt-4 text-green-700 font-bold">
            <p>{response}</p>
          </div>
        )}
      </motion.div>
      
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
