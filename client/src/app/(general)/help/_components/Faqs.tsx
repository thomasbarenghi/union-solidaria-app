'use client'
import { questionsAnswers } from '../_lib/questionsAnswers.lib'
import { Accordion, AccordionItem } from '@nextui-org/react'

const FAQs = () => (
  <section className='w-full 2xl:container'>
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Preguntas frecuentes</h2>
      <Accordion>
        {questionsAnswers.map((item, index) => (
          <AccordionItem key={index} title={item.question}>
            {item.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
)

export default FAQs
