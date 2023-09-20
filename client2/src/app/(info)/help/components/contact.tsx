import { Input } from "@/components";

export default function Contact() {
  return (
    <section className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">¿No encontraste lo que buscabas?</h2>
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
  );
}
