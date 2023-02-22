import { FormEvent, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/Home.module.scss'
import logo from '../../public/logo.svg'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { useAuth } from "@/contexts/useAuth"

export default function Home() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    let data = {
      email,
      password

    }

    await signIn(data)
  }
  return (
    <>
      <Head>
        <title>Sujeito Pizza - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logo} alt="Sujeito Pizzaria" />


        <div className={styles.login}>

          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>

          </form>
          <Link href="/signup">
            <span className={styles.text}>Não possui conta ? Cadastre se</span>
          </Link>
        </div>

      </div>




    </>
  )
}
