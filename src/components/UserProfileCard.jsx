import './UserProfileCard.css'

function UserProfileCard({ user, isLoading = false, error = null }) {
  if (isLoading) {
    return (
      <article className="user-profile-card" aria-busy="true">
        <div className="profile-loading" role="status" aria-live="polite">
          <span className="loading-avatar" aria-hidden="true" />
          <span className="loading-copy" aria-hidden="true">
            <span className="loading-line loading-line-name" />
            <span className="loading-line loading-line-email" />
          </span>
          <span className="loading-label">Loading profile…</span>
        </div>
      </article>
    )
  }

  if (error) {
    return (
      <article className="user-profile-card" aria-busy="false">
        <div className="profile-message profile-error" role="alert">
          <span className="message-icon" aria-hidden="true">
            !
          </span>
          <div>
            <h3>Profile unavailable</h3>
            <p>{error}</p>
          </div>
        </div>
      </article>
    )
  }

  if (!user) {
    return (
      <article className="user-profile-card" aria-busy="false">
        <div className="profile-message" role="status">
          <h3>No profile to show</h3>
          <p>User information will appear here when available.</p>
        </div>
      </article>
    )
  }

  return (
    <article className="user-profile-card" aria-busy="false">
      <img
        className="profile-image"
        src={user.imageUrl}
        alt={`Portrait of ${user.name}`}
        width="88"
        height="88"
        decoding="async"
      />
      <div className="profile-details">
        <p className="profile-label">USER PROFILE</p>
        <h3>{user.name}</h3>
        <a className="profile-email" href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </div>
      <span className="profile-status">
        <span className="status-dot" aria-hidden="true" />
        Active
      </span>
    </article>
  )
}

export default UserProfileCard
