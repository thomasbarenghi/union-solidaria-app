import AccordionItem from './AccordionItem'

function Accordion() {
  return (
    <ul className='mx-auto max-w-screen-sm space-y-4'>
      <AccordionItem
        title='¿Cómo puedo ser voluntario/a?'
        content='Para comenzar a hacer voluntariados solo necesitas registrarte como voluntario.'
      />
      <AccordionItem
        title='¿Cómo puedo publicar una iniciativa?'
        content='Para publicar una iniciativa debes registrarte como organización y luego crear una iniciativa desde el panel que aparecerá en tu Dashboard.'
      />
      <AccordionItem
        title='¿Cómo puedo hacer una donación?'
        content='Para hacer una donación debes ir a Donaciones donde te pediremos datos de facturación y de contacto. Las donaciones podrán ser efectuadas a través de una tarjeta de crédito internacional o con Stripe.'
      />
      <AccordionItem
        title='¿Qué necesito para viajar al exterior?'
        content='Como cada país tiene políticas diferentes y varía de acuerdo con la nacionalidad del viajero, el lugar correcto para consultar los requisitos es el consulado o la embajada del país que deseas conocer.'
      />
      <AccordionItem
        title='¿Cómo elimino mi cuenta??'
        content='Para eliminar tu cuenta debes ir a la sección Configuración y seleccionar la opción “Eliminar mi cuenta”.'
      />
      <AccordionItem
        title='¿Cómo busco por categorías?'
        content='Para buscar una iniciativa por categorías debes ingresar a Iniciativas y seleccionar las categorías deseadas a través de su filtro correspondiente.'
      />
    </ul>
  )
}

export default Accordion
