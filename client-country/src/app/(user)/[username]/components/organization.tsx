export default function Organization({ user }: any) {
  console.log('user', user)
  return (
    <div>
      <h1>Organization</h1>
      <p>{user?.username}</p>
    </div>
  )
}
