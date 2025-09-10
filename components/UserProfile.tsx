// Good implementation: Secure user profile component
import Image from 'next/image'

interface User {
  id: string
  name: string
  email: string
  bio: string
  avatar: string
}

interface UserProfileProps {
  user: User
}

export default function UserProfile({ user }: UserProfileProps) {
  // Security: No API keys exposed in client-side code
  // Security: Safe HTML rendering without dangerouslySetInnerHTML
  
  return (
    <article style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <header>
        <h2>User Profile</h2>
      </header>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
        <Image
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          width={100}
          height={100}
          style={{ borderRadius: '50%' }}
          priority={false}
        />
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
        </div>
      </div>
      
      {/* Security: Safe text rendering instead of dangerouslySetInnerHTML */}
      <section>
        <h4>Bio</h4>
        <p>{user.bio}</p>
      </section>
      
      <footer style={{ marginTop: '16px' }}>
        <Button 
          onClick={() => console.log('Edit profile')}
          variant="primary"
          type="button"
        >
          Edit Profile
        </Button>
      </footer>
    </article>
  )
}
