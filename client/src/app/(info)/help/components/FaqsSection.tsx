'use client'
import { questionsAnswers } from '../lib/questionsAnswers'
import { Accordion, AccordionItem } from '@nextui-org/react'

const FAQs = () => (
  <section className='w-full'>
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
