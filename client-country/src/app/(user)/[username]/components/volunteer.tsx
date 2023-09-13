export default function Volunteer({ user }: any) {
  console.log('user', user)
  return (
    <div>
      <h1>Volunteer</h1>
      <p>{user?.username}</p>
    </div>
  )
}
