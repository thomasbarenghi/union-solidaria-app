interface Props {
  className: string
}

function NotificationIcon({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'>
      <path d='M450-368h60v-84h84v-60h-84v-84h-60v84h-84v60h84v84ZM160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v22q81 17 130.5 83.5T720-564v304h80v60H160Zm320-302Zm0 422q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM300-260h360v-304q0-75-52.5-127.5T480-744q-75 0-127.5 52.5T300-564v304Z' />
    </svg>
  )
}

export default NotificationIcon