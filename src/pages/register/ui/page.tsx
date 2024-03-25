import { Link } from 'atomic-router-react'

import { routes } from '~/shared/routing'

export const RegisterPage = () => {
  return (
    <div>
      <p>RegisterPage</p>
      <Link to={routes.auth.login}>Go to LoginPage</Link>
    </div>
  )
}
