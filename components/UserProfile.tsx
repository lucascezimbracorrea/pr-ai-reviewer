// This component has security issues - exposing API key and unsafe HTML
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
  // Security issue: Exposing API key in client-side code
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>User Profile</h2>
      <div>
        <img 
          src={user.avatar} 
          alt="User avatar"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      </div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      
      {/* Security issue: Exposing API key */}
      <p>API Key: {apiKey}</p>
      
      {/* Security issue: Unsafe HTML rendering */}
      <div dangerouslySetInnerHTML={{ __html: user.bio }} />
      
      <div>
        <button onClick={() => console.log('Edit profile')}>
          Edit Profile
        </button>
      </div>
    </div>
  )
}
