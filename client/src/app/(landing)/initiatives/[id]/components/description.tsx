import { SeeMore } from '@/components'

interface Props {
  description: string
}

export default function Description(props: Props) {
  const { description } = props

  return (
    <section>
      <SeeMore text={description} maxChars={35} />
    </section>
  )
}
