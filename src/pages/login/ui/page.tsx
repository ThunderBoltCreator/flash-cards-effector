import { Link } from 'atomic-router-react'

import { routes } from '~/shared/routing'

export const LoginPage = () => {
  return (
    <div>
      <p>LoginPage</p>
      <Link to={routes.auth.register}>Go to RegisterPage</Link>
    </div>
  )
}
