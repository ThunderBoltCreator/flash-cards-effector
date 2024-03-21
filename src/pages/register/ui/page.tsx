import { routes } from '@/shared/routing'
import { Link } from 'atomic-router-react'

export const RegisterPage = () => {
  return (
    <div>
      <p>RegisterPage</p>
      <Link to={routes.auth.login}>Go to LoginPage</Link>
    </div>
  )
}
