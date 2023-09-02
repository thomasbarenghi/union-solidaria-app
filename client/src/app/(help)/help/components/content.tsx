"use client";
import { Accordion, Input } from "@/components";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

export default function Content() {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
          <Accordion questionsAnswers={questionsAnswers} />
        </div>
      </section>
      <section className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="bodyText">
            Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
        <form className="flex flex-col gap-3">
          <Input label="Nombre" type="text" name="name" placeholder="Nombre" />
          <Input label="Email" type="email" name="email" placeholder="Email" />
          <Input
            label="Mensaje"
            type="textarea"
            rows={3}
            name="message"
            placeholder="Mensaje"
          />
          <button className="primaryButton mt-4">Enviar</button>
        </form>
      </section>
    </>
  );
}
