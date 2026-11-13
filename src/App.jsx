import { useState } from 'react'
import UserProfileCard from './components/UserProfileCard.jsx'
import profileAvatar from './assets/profile-avatar.svg'
import './App.css'

const sampleUser = {
  name: 'Alex Morgan',
  email: 'alex.morgan@example.com',
  imageUrl: profileAvatar,
}

const previewOptions = [
  { value: 'profile', label: 'Profile' },
  { value: 'loading', label: 'Loading' },
  { value: 'error', label: 'Error' },
]

function App() {
  const [preview, setPreview] = useState('profile')

  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">COMPONENT PLAYGROUND</p>
        <h1>A profile, at a glance.</h1>
        <p className="page-description">
          A reusable user card with thoughtful loading and error states.
        </p>
      </header>

      <section className="preview" aria-label="User profile card preview">
        <div className="preview-heading">
          <div>
            <p className="section-label">LIVE PREVIEW</p>
            <h2>UserProfileCard</h2>
          </div>
          <div className="state-picker" role="group" aria-label="Preview state">
            {previewOptions.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={preview === value}
                onClick={() => setPreview(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <UserProfileCard
          user={sampleUser}
          isLoading={preview === 'loading'}
          error={
            preview === 'error'
              ? 'We could not load this profile. Please try again.'
              : null
          }
        />
        <p className="preview-caption">
          Switch states to see how the component responds to different data
          conditions.
        </p>
      </section>

      <footer className="page-footer">
        <span className="footer-dot" aria-hidden="true" />
        Built to be reused across your app
      </footer>
    </main>
  )
}

export default App
