interface Props {
  className: string
}

function DonationIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
      <path d='M646-458q-47-42-89.5-82t-74.435-77.946q-31.934-37.946-51-73.459Q412-726.919 412-760q0-51.758 35.22-86.879Q482.439-882 534.341-882 564-882 593.5-865.5T646-821q23-28 52.5-44.5t59.159-16.5q51.902 0 87.122 35.121Q880-811.758 880-760q0 33.081-19.065 68.595-19.066 35.513-51 73.459Q778-580 735.323-539.829 692.647-499.659 646-458Zm0-83q66-60 120-119t54-100q0-27.423-17.356-44.712Q785.288-822 757.758-822 741-822 724.5-814q-16.5 8-33.5 30l-45 55-45-55q-17-22-33.5-30t-33.258-8q-27.53 0-44.886 17.288Q472-787.423 472-760q0 41 54 100t120 119ZM566-62l-311-89v57H40v-394h309l255 96q27 10 45.5 32.5T668-295h114q42 0 70 30t28 81v26L566-62Zm-466-92h94v-274h-94v274Zm462 30 256-78q-6-19-15-26t-21-7H575q-30 0-55.5-4T471-250l-81-25 22-58 73 24q25 8 47.5 11t71.5 3q0-12-4.5-23.5T584-335l-245-93h-84v214l307 90ZM194-291Zm410-4Zm-410 4Zm61 0Zm391-391Z' />
    </svg>
  )
}

export default DonationIcon